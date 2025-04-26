package models

import (
	"time"
)

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

// UserProfile represents additional profile information for a user
type UserProfile struct {
	UserID           string    `json:"user_id"`
	Bio              string    `json:"bio"`
	Location         string    `json:"location"`
	Education        string    `json:"education"`
	Experience       string    `json:"experience"`
	Skills           []string  `json:"skills"`
	Interests        []string  `json:"interests"`
	ProfileImageURL  string    `json:"profile_image_url"`
	SocialLinks      []string  `json:"social_links"`
	PreferredLearningStyle string `json:"preferred_learning_style"`
	CreatedAt        time.Time `json:"created_at"`
	UpdatedAt        time.Time `json:"updated_at"`
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

// Role defines the available user roles in the system
type Role string

const (
	RoleStudent      Role = "student"
	RoleMentor       Role = "mentor"
	RoleAdmin        Role = "admin"
	RoleInstitution  Role = "institution"
	RoleIndustry     Role = "industry"
)

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

// UpdateUserRequest is used to update a user
type UpdateUserRequest struct {
	FirstName   string `json:"first_name"`
	LastName    string `json:"last_name"`
	PhoneNumber string `json:"phone_number"`
}

// UpdatePasswordRequest is used to update a user's password
type UpdatePasswordRequest struct {
	CurrentPassword string `json:"current_password" binding:"required"`
	NewPassword     string `json:"new_password" binding:"required,min=8"`
}
