#!/bin/sh

# Create models folder if it doesn't exist
mkdir -p ./swagger-models

# Create a temporary file with all the models needed for Swagger
cat > ./swagger-models/models.go << 'EOF'
// Package swaggermodels contains definitions used by Swagger for documentation
package swaggermodels

import (
	"time"
)

// APIResponse is the standard API response format
type APIResponse struct {
	Success bool        `json:"success"`
	Message string      `json:"message"`
	Data    interface{} `json:"data,omitempty"`
	Error   string      `json:"error,omitempty"`
}

// SuccessResponse represents a successful API response
type SuccessResponse struct {
	Success bool        `json:"success" example:"true"`
	Message string      `json:"message" example:"Operation successful"`
	Data    interface{} `json:"data,omitempty"`
}

// ErrorResponse represents an error API response
type ErrorResponse struct {
	Success bool   `json:"success" example:"false"`
	Message string `json:"message" example:"Operation failed"`
	Error   string `json:"error" example:"Invalid credentials provided"`
}

// User represents a user in the system
type User struct {
	ID          string    `json:"id"`
	Email       string    `json:"email"`
	Password    string    `json:"-"` // Never returned in JSON responses
	FirstName   string    `json:"first_name"`
	LastName    string    `json:"last_name"`
	Role        string    `json:"role"`
	IsVerified  bool      `json:"is_verified"`
	PhoneNumber string    `json:"phone_number"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}

// UserResponse is the response returned to the client after user operations
type UserResponse struct {
	ID          string    `json:"id"`
	Email       string    `json:"email"`
	FirstName   string    `json:"first_name"`
	LastName    string    `json:"last_name"`
	Role        string    `json:"role"`
	IsVerified  bool      `json:"is_verified"`
	PhoneNumber string    `json:"phone_number,omitempty"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}

// CreateUserRequest is used for user registration
type CreateUserRequest struct {
	Email       string `json:"email" binding:"required,email"`
	Password    string `json:"password" binding:"required,min=8"`
	FirstName   string `json:"first_name" binding:"required"`
	LastName    string `json:"last_name" binding:"required"`
	Role        string `json:"role" binding:"required,oneof=student mentor admin institution industry"`
	PhoneNumber string `json:"phone_number"`
}

// LoginRequest is used for user authentication
type LoginRequest struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required"`
}

// LoginResponse is returned after successful login
type LoginResponse struct {
	User   UserResponse `json:"user"`
	Tokens TokenPair    `json:"tokens"`
}

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

// PasswordResetRequest is used to request a password reset
type PasswordResetRequest struct {
	Email string `json:"email" binding:"required,email"`
}

// ResetPasswordRequest is used to reset a password using a token
type ResetPasswordRequest struct {
	Token       string `json:"token" binding:"required"`
	NewPassword string `json:"new_password" binding:"required,min=8"`
}

// UserProfile represents additional profile information for a user
type UserProfile struct {
	UserID              string    `json:"user_id"`
	Bio                 string    `json:"bio"`
	Location            string    `json:"location"`
	Education           string    `json:"education"`
	Experience          string    `json:"experience"`
	Skills              []string  `json:"skills"`
	Interests           []string  `json:"interests"`
	ProfileImageURL     string    `json:"profile_image_url"`
	SocialLinks         []string  `json:"social_links"`
	PreferredLearningStyle string `json:"preferred_learning_style"`
	CreatedAt           time.Time `json:"created_at"`
	UpdatedAt           time.Time `json:"updated_at"`
}

// UserPreference represents user preferences for the platform
type UserPreference struct {
	UserID              string    `json:"user_id"`
	EmailNotifications  bool      `json:"email_notifications"`
	SMSNotifications    bool      `json:"sms_notifications"`
	PushNotifications   bool      `json:"push_notifications"`
	Language            string    `json:"language"`
	Theme               string    `json:"theme"`
	Timezone            string    `json:"timezone"`
	CreatedAt           time.Time `json:"created_at"`
	UpdatedAt           time.Time `json:"updated_at"`
}

// UpdateUserRequest is used to update a user
type UpdateUserRequest struct {
	FirstName   string `json:"first_name"`
	LastName    string `json:"last_name"`
	PhoneNumber string `json:"phone_number"`
}
EOF

# Create a temporary file with swag wrapper
cat > ./services/auth/swag_wrapper.go << 'EOF'
// Package main provides API for auth service
package main

import (
	// Import for Swagger documentation
	_ "github.com/Nikhil9989/psb/backend/swagger-models"
)
EOF

cat > ./services/user/swag_wrapper.go << 'EOF'
// Package main provides API for user service
package main

import (
	// Import for Swagger documentation
	_ "github.com/Nikhil9989/psb/backend/swagger-models"
)
EOF

cat > ./services/api-gateway/swag_wrapper.go << 'EOF'
// Package main provides API for API gateway
package main

import (
	// Import for Swagger documentation
	_ "github.com/Nikhil9989/psb/backend/swagger-models"
)
EOF

# Generate Swagger documents
echo "Generating Swagger for Auth Service..."
swag init -g services/auth/main.go -d ./services/auth,./swagger-models -o services/auth/docs

echo "Generating Swagger for User Service..."
swag init -g services/user/main.go -d ./services/user,./swagger-models -o services/user/docs

echo "Generating Swagger for API Gateway..."
swag init -g services/api-gateway/main.go -d ./services/api-gateway,./swagger-models -o services/api-gateway/docs

echo "Swagger generation complete!"
