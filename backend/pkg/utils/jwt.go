package utils

import (
	"fmt"
	"time"

	"github.com/Nikhil9989/psb/backend/pkg/models"
	"github.com/golang-jwt/jwt/v5"
)

// GenerateTokenPair generates a new access and refresh token pair
func GenerateTokenPair(userID, email, role, jwtSecret string, accessExpiry, refreshExpiry time.Duration) (models.TokenPair, error) {
	// Generate access token
	accessTokenClaims := jwt.MapClaims{
		"user_id": userID,
		"email":   email,
		"role":    role,
		"type":    "access",
		"exp":     time.Now().Add(accessExpiry).Unix(),
		"iat":     time.Now().Unix(),
	}

	accessToken := jwt.NewWithClaims(jwt.SigningMethodHS256, accessTokenClaims)
	accessTokenString, err := accessToken.SignedString([]byte(jwtSecret))
	if err != nil {
		return models.TokenPair{}, err
	}

	// Generate refresh token
	refreshTokenClaims := jwt.MapClaims{
		"user_id": userID,
		"email":   email,
		"role":    role,
		"type":    "refresh",
		"exp":     time.Now().Add(refreshExpiry).Unix(),
		"iat":     time.Now().Unix(),
	}

	refreshToken := jwt.NewWithClaims(jwt.SigningMethodHS256, refreshTokenClaims)
	refreshTokenString, err := refreshToken.SignedString([]byte(jwtSecret))
	if err != nil {
		return models.TokenPair{}, err
	}

	return models.TokenPair{
		AccessToken:  accessTokenString,
		RefreshToken: refreshTokenString,
		ExpiresIn:    int64(accessExpiry.Seconds()),
	}, nil
}

// ValidateToken validates a JWT token and returns the claims
func ValidateToken(tokenString, jwtSecret string) (*models.TokenClaims, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Validate the signing method
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(jwtSecret), nil
	})

	if err != nil {
		return nil, err
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		tokenClaims := &models.TokenClaims{
			UserID: claims["user_id"].(string),
			Email:  claims["email"].(string),
			Role:   claims["role"].(string),
			Type:   claims["type"].(string),
			Exp:    int64(claims["exp"].(float64)),
			Iat:    int64(claims["iat"].(float64)),
		}
		return tokenClaims, nil
	}

	return nil, fmt.Errorf("invalid token")
}

// GenerateVerificationToken generates a random token for email verification or password reset
func GenerateVerificationToken() string {
	// Generate a random 32-character string
	return RandomString(32)
}
