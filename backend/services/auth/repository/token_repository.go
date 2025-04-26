package repository

import (
	"context"
	"database/sql"
	"fmt"
	"time"

	"github.com/Nikhil9989/psb/backend/pkg/models"
	"github.com/redis/go-redis/v9"
)

// TokenRepository handles storage and retrieval of verification tokens and refresh tokens
type TokenRepository struct {
	db    *sql.DB
	redis *redis.Client
}

// NewTokenRepository creates a new TokenRepository
func NewTokenRepository(db *sql.DB, redis *redis.Client) *TokenRepository {
	return &TokenRepository{db: db, redis: redis}
}

// StoreVerificationToken stores a verification token in the database
func (r *TokenRepository) StoreVerificationToken(token *models.VerificationToken) error {
	query := `
	INSERT INTO verification_tokens (token, user_id, type, expires_at, created_at)
	VALUES ($1, $2, $3, $4, $5)
	`

	_, err := r.db.Exec(
		query,
		token.Token,
		token.UserID,
		token.Type,
		token.ExpiresAt,
		token.CreatedAt,
	)

	return err
}

// GetVerificationToken retrieves a verification token from the database
func (r *TokenRepository) GetVerificationToken(token string) (*models.VerificationToken, error) {
	var verificationToken models.VerificationToken

	query := `
	SELECT token, user_id, type, expires_at, created_at
	FROM verification_tokens
	WHERE token = $1
	`

	err := r.db.QueryRow(query, token).Scan(
		&verificationToken.Token,
		&verificationToken.UserID,
		&verificationToken.Type,
		&verificationToken.ExpiresAt,
		&verificationToken.CreatedAt,
	)

	if err != nil {
		if err == sql.ErrNoRows {
			return nil, fmt.Errorf("token not found")
		}
		return nil, err
	}

	return &verificationToken, nil
}

// DeleteVerificationToken deletes a verification token from the database
func (r *TokenRepository) DeleteVerificationToken(token string) error {
	query := `DELETE FROM verification_tokens WHERE token = $1`
	_, err := r.db.Exec(query, token)
	return err
}

// StoreRefreshToken stores a refresh token in Redis
func (r *TokenRepository) StoreRefreshToken(userID, token string, expiry time.Duration) error {
	ctx := context.Background()
	// Store token with user ID as key
	key := fmt.Sprintf("refresh_token:%s", token)
	err := r.redis.Set(ctx, key, userID, expiry).Err()
	if err != nil {
		return err
	}

	// Also store in a user's tokens set to allow for revoking all tokens for a user
	userTokensKey := fmt.Sprintf("user_tokens:%s", userID)
	err = r.redis.SAdd(ctx, userTokensKey, token).Err()
	if err != nil {
		return err
	}

	// Set expiry on the user tokens key if it doesn't exist yet
	exists, err := r.redis.Exists(ctx, userTokensKey).Result()
	if err != nil {
		return err
	}

	if exists == 0 {
		// The longest refresh token expiry (typically) would be reasonable
		err = r.redis.Expire(ctx, userTokensKey, time.Hour*24*30).Err()
		if err != nil {
			return err
		}
	}

	return nil
}

// GetUserIDFromRefreshToken retrieves the user ID associated with a refresh token
func (r *TokenRepository) GetUserIDFromRefreshToken(token string) (string, error) {
	ctx := context.Background()
	key := fmt.Sprintf("refresh_token:%s", token)
	userID, err := r.redis.Get(ctx, key).Result()
	if err != nil {
		if err == redis.Nil {
			return "", fmt.Errorf("token not found or expired")
		}
		return "", err
	}

	return userID, nil
}

// DeleteRefreshToken deletes a refresh token from Redis
func (r *TokenRepository) DeleteRefreshToken(token string) error {
	ctx := context.Background()
	key := fmt.Sprintf("refresh_token:%s", token)

	// Get user ID first to remove from user's tokens set
	userID, err := r.redis.Get(ctx, key).Result()
	if err != nil && err != redis.Nil {
		return err
	}

	// Delete the token
	_, err = r.redis.Del(ctx, key).Result()
	if err != nil {
		return err
	}

	if userID != "" {
		// Remove from user's tokens set
		userTokensKey := fmt.Sprintf("user_tokens:%s", userID)
		_, err = r.redis.SRem(ctx, userTokensKey, token).Result()
		if err != nil {
			return err
		}
	}

	return nil
}

// DeleteAllUserRefreshTokens deletes all refresh tokens for a user
func (r *TokenRepository) DeleteAllUserRefreshTokens(userID string) error {
	ctx := context.Background()
	userTokensKey := fmt.Sprintf("user_tokens:%s", userID)

	// Get all tokens for the user
	tokens, err := r.redis.SMembers(ctx, userTokensKey).Result()
	if err != nil {
		return err
	}

	// Delete each token
	for _, token := range tokens {
		key := fmt.Sprintf("refresh_token:%s", token)
		_, err = r.redis.Del(ctx, key).Result()
		if err != nil {
			return err
		}
	}

	// Delete the user's tokens set
	_, err = r.redis.Del(ctx, userTokensKey).Result()
	if err != nil {
		return err
	}

	return nil
}
