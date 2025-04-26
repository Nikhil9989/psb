package service

import (
	"fmt"
	"time"

	"github.com/Nikhil9989/psb/backend/pkg/models"
	"github.com/Nikhil9989/psb/backend/pkg/utils"
	"github.com/Nikhil9989/psb/backend/services/auth/config"
	"github.com/Nikhil9989/psb/backend/services/auth/repository"
)

// AuthService handles authentication business logic
type AuthService struct {
	tokenRepo     *repository.TokenRepository
	userAPIClient *UserAPIClient
	config        *config.Config
}

// NewAuthService creates a new AuthService
func NewAuthService(tokenRepo *repository.TokenRepository, userAPIClient *UserAPIClient, config *config.Config) *AuthService {
	return &AuthService{
		tokenRepo:     tokenRepo,
		userAPIClient: userAPIClient,
		config:        config,
	}
}

// Register handles user registration
func (s *AuthService) Register(req *models.CreateUserRequest) (*models.UserResponse, error) {
	// Create the user via the user service
	user, err := s.userAPIClient.CreateUser(req)
	if err != nil {
		return nil, err
	}

	// Generate a verification token
	verificationToken := utils.GenerateVerificationToken()
	
	// Store the verification token
	now := time.Now()
	token := &models.VerificationToken{
		Token:     verificationToken,
		UserID:    user.ID,
		Type:      "email_verification",
		ExpiresAt: now.Add(s.config.JWT.VerificationExpiry),
		CreatedAt: now,
	}

	err = s.tokenRepo.StoreVerificationToken(token)
	if err != nil {
		return nil, err
	}

	// In a production system, we would send an email with the verification link
	// For now, we'll just return the user

	return user, nil
}

// Login handles user authentication
func (s *AuthService) Login(req *models.LoginRequest) (*models.LoginResponse, error) {
	// Get the user by email via the user service
	user, err := s.userAPIClient.GetUserByEmail(req.Email)
	if err != nil {
		return nil, fmt.Errorf("invalid credentials")
	}

	// Verify password
	if !utils.ComparePasswords(user.Password, req.Password) {
		return nil, fmt.Errorf("invalid credentials")
	}

	// Generate token pair
	tokens, err := utils.GenerateTokenPair(
		user.ID,
		user.Email,
		user.Role,
		s.config.JWT.Secret,
		s.config.JWT.AccessTokenExpiry,
		s.config.JWT.RefreshTokenExpiry,
	)
	if err != nil {
		return nil, err
	}

	// Store refresh token
	err = s.tokenRepo.StoreRefreshToken(user.ID, tokens.RefreshToken, s.config.JWT.RefreshTokenExpiry)
	if err != nil {
		return nil, err
	}

	// Create user response (excluding password)
	userResponse := models.UserResponse{
		ID:          user.ID,
		Email:       user.Email,
		FirstName:   user.FirstName,
		LastName:    user.LastName,
		Role:        user.Role,
		IsVerified:  user.IsVerified,
		PhoneNumber: user.PhoneNumber,
		CreatedAt:   user.CreatedAt,
		UpdatedAt:   user.UpdatedAt,
	}

	// Return login response
	return &models.LoginResponse{
		User:   userResponse,
		Tokens: tokens,
	}, nil
}

// RefreshToken handles token refresh
func (s *AuthService) RefreshToken(req *models.RefreshRequest) (*models.TokenPair, error) {
	// Verify refresh token
	claims, err := utils.ValidateToken(req.RefreshToken, s.config.JWT.Secret)
	if err != nil {
		return nil, fmt.Errorf("invalid refresh token")
	}

	// Check token type
	if claims.Type != "refresh" {
		return nil, fmt.Errorf("invalid token type")
	}

	// Check if token exists in Redis
	userID, err := s.tokenRepo.GetUserIDFromRefreshToken(req.RefreshToken)
	if err != nil {
		return nil, fmt.Errorf("refresh token expired or revoked")
	}

	// Validate that the user ID in the token matches the one in Redis
	if claims.UserID != userID {
		return nil, fmt.Errorf("invalid refresh token")
	}

	// Generate new token pair
	tokens, err := utils.GenerateTokenPair(
		claims.UserID,
		claims.Email,
		claims.Role,
		s.config.JWT.Secret,
		s.config.JWT.AccessTokenExpiry,
		s.config.JWT.RefreshTokenExpiry,
	)
	if err != nil {
		return nil, err
	}

	// Delete old refresh token
	err = s.tokenRepo.DeleteRefreshToken(req.RefreshToken)
	if err != nil {
		return nil, err
	}

	// Store new refresh token
	err = s.tokenRepo.StoreRefreshToken(claims.UserID, tokens.RefreshToken, s.config.JWT.RefreshTokenExpiry)
	if err != nil {
		return nil, err
	}

	return &tokens, nil
}

// Logout handles user logout
func (s *AuthService) Logout(refreshToken string) error {
	// Delete refresh token from Redis
	return s.tokenRepo.DeleteRefreshToken(refreshToken)
}

// LogoutAll logs out a user from all devices
func (s *AuthService) LogoutAll(userID string) error {
	// Delete all refresh tokens for the user from Redis
	return s.tokenRepo.DeleteAllUserRefreshTokens(userID)
}

// VerifyEmail handles email verification
func (s *AuthService) VerifyEmail(token string) error {
	// Get the verification token
	verificationToken, err := s.tokenRepo.GetVerificationToken(token)
	if err != nil {
		return err
	}

	// Check token type
	if verificationToken.Type != "email_verification" {
		return fmt.Errorf("invalid token type")
	}

	// Check if token is expired
	if time.Now().After(verificationToken.ExpiresAt) {
		return fmt.Errorf("token expired")
	}

	// Mark user as verified
	err = s.userAPIClient.SetUserVerified(verificationToken.UserID)
	if err != nil {
		return err
	}

	// Delete the verification token
	return s.tokenRepo.DeleteVerificationToken(token)
}

// ForgotPassword handles password reset requests
func (s *AuthService) ForgotPassword(email string) error {
	// Get the user by email
	user, err := s.userAPIClient.GetUserByEmail(email)
	if err != nil {
		// Don't reveal that the email doesn't exist
		return nil
	}

	// Generate a password reset token
	resetToken := utils.GenerateVerificationToken()
	
	// Store the password reset token
	now := time.Now()
	token := &models.VerificationToken{
		Token:     resetToken,
		UserID:    user.ID,
		Type:      "password_reset",
		ExpiresAt: now.Add(s.config.JWT.PasswordResetExpiry),
		CreatedAt: now,
	}

	err = s.tokenRepo.StoreVerificationToken(token)
	if err != nil {
		return err
	}

	// In a production system, we would send an email with the reset link
	// For now, we'll just return success

	return nil
}

// ResetPassword handles password reset
func (s *AuthService) ResetPassword(req *models.ResetPasswordRequest) error {
	// Get the verification token
	verificationToken, err := s.tokenRepo.GetVerificationToken(req.Token)
	if err != nil {
		return err
	}

	// Check token type
	if verificationToken.Type != "password_reset" {
		return fmt.Errorf("invalid token type")
	}

	// Check if token is expired
	if time.Now().After(verificationToken.ExpiresAt) {
		return fmt.Errorf("token expired")
	}

	// Hash the new password
	hashedPassword, err := utils.HashPassword(req.NewPassword)
	if err != nil {
		return err
	}

	// Update the user's password
	err = s.userAPIClient.UpdateUserPassword(verificationToken.UserID, hashedPassword)
	if err != nil {
		return err
	}

	// Delete the verification token
	err = s.tokenRepo.DeleteVerificationToken(req.Token)
	if err != nil {
		return err
	}

	// Delete all existing refresh tokens for the user
	return s.tokenRepo.DeleteAllUserRefreshTokens(verificationToken.UserID)
}
