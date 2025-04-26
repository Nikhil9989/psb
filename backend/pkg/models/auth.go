package models

import "time"

// TokenPair represents an access and refresh token pair
type TokenPair struct {
	AccessToken  string `json:"access_token"`
	RefreshToken string `json:"refresh_token"`
	ExpiresIn    int64  `json:"expires_in"` // seconds until access token expires
}

// RefreshRequest is used to request a new token using a refresh token
type RefreshRequest struct {
	RefreshToken string `json:"refresh_token" binding:"required"`
}

// TokenClaims represents the JWT claims stored in access and refresh tokens
type TokenClaims struct {
	UserID string `json:"user_id"`
	Email  string `json:"email"`
	Role   string `json:"role"`
	Exp    int64  `json:"exp"`
	Iat    int64  `json:"iat"`
	Type   string `json:"type"` // "access" or "refresh"
}

// PasswordResetRequest is used to request a password reset
type PasswordResetRequest struct {
	Email string `json:"email" binding:"required,email"`
}

// VerifyEmailRequest is used to verify a user's email address
type VerifyEmailRequest struct {
	Token string `json:"token" binding:"required"`
}

// VerificationToken represents an email verification or password reset token
type VerificationToken struct {
	Token     string    `json:"token"`
	UserID    string    `json:"user_id"`
	Type      string    `json:"type"` // "email_verification" or "password_reset"
	ExpiresAt time.Time `json:"expires_at"`
	CreatedAt time.Time `json:"created_at"`
}

// ResetPasswordRequest is used to reset a password using a token
type ResetPasswordRequest struct {
	Token       string `json:"token" binding:"required"`
	NewPassword string `json:"new_password" binding:"required,min=8"`
}

// LoginResponse is returned after successful login
type LoginResponse struct {
	User       UserResponse `json:"user"`
	Tokens     TokenPair    `json:"tokens"`
}
