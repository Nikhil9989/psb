package service

import (
	"errors"
	"time"

	"github.com/Nikhil9989/psb/backend/pkg/models"
	"github.com/Nikhil9989/psb/backend/pkg/utils"
	"github.com/Nikhil9989/psb/backend/services/user/repository"
)

// UserService handles business logic for user operations
type UserService struct {
	userRepo *repository.UserRepository
}

// NewUserService creates a new UserService
func NewUserService(userRepo *repository.UserRepository) *UserService {
	return &UserService{userRepo: userRepo}
}

// CreateUser creates a new user
func (s *UserService) CreateUser(req *models.CreateUserRequest) (*models.UserResponse, error) {
	// Validate email and password
	if !utils.ValidateEmail(req.Email) {
		return nil, errors.New("invalid email format")
	}

	if !utils.ValidatePassword(req.Password) {
		return nil, errors.New("password must be at least 8 characters with at least one uppercase, lowercase, number, and special character")
	}

	// Check if user already exists
	existingUser, err := s.userRepo.GetUserByEmail(req.Email)
	if err == nil && existingUser != nil {
		return nil, errors.New("email already registered")
	}

	// Hash the password
	hashedPassword, err := utils.HashPassword(req.Password)
	if err != nil {
		return nil, err
	}

	// Create user
	now := time.Now()
	userID := utils.GenerateUUID()

	user := &models.User{
		ID:          userID,
		Email:       req.Email,
		Password:    hashedPassword,
		FirstName:   req.FirstName,
		LastName:    req.LastName,
		Role:        req.Role,
		IsVerified:  false,
		PhoneNumber: req.PhoneNumber,
		CreatedAt:   now,
		UpdatedAt:   now,
	}

	err = s.userRepo.CreateUser(user)
	if err != nil {
		return nil, err
	}

	// Return user response (excluding password)
	return &models.UserResponse{
		ID:          user.ID,
		Email:       user.Email,
		FirstName:   user.FirstName,
		LastName:    user.LastName,
		Role:        user.Role,
		IsVerified:  user.IsVerified,
		PhoneNumber: user.PhoneNumber,
		CreatedAt:   user.CreatedAt,
		UpdatedAt:   user.UpdatedAt,
	}, nil
}

// GetUserByID retrieves a user by ID
func (s *UserService) GetUserByID(id string) (*models.UserResponse, error) {
	user, err := s.userRepo.GetUserByID(id)
	if err != nil {
		return nil, err
	}

	return &models.UserResponse{
		ID:          user.ID,
		Email:       user.Email,
		FirstName:   user.FirstName,
		LastName:    user.LastName,
		Role:        user.Role,
		IsVerified:  user.IsVerified,
		PhoneNumber: user.PhoneNumber,
		CreatedAt:   user.CreatedAt,
		UpdatedAt:   user.UpdatedAt,
	}, nil
}

// GetUserByEmail retrieves a user by email
func (s *UserService) GetUserByEmail(email string) (*models.User, error) {
	return s.userRepo.GetUserByEmail(email)
}

// GetUsers retrieves all users with pagination
func (s *UserService) GetUsers(page, pageSize int) ([]models.UserResponse, error) {
	users, err := s.userRepo.GetUsers(page, pageSize)
	if err != nil {
		return nil, err
	}

	userResponses := make([]models.UserResponse, len(users))
	for i, user := range users {
		userResponses[i] = models.UserResponse{
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
	}

	return userResponses, nil
}

// UpdateUser updates a user's information
func (s *UserService) UpdateUser(id string, req *models.UpdateUserRequest) (*models.UserResponse, error) {
	user, err := s.userRepo.GetUserByID(id)
	if err != nil {
		return nil, err
	}

	// Update fields
	if req.FirstName != "" {
		user.FirstName = req.FirstName
	}
	if req.LastName != "" {
		user.LastName = req.LastName
	}
	if req.PhoneNumber != "" {
		user.PhoneNumber = req.PhoneNumber
	}
	user.UpdatedAt = time.Now()

	err = s.userRepo.UpdateUser(user)
	if err != nil {
		return nil, err
	}

	return &models.UserResponse{
		ID:          user.ID,
		Email:       user.Email,
		FirstName:   user.FirstName,
		LastName:    user.LastName,
		Role:        user.Role,
		IsVerified:  user.IsVerified,
		PhoneNumber: user.PhoneNumber,
		CreatedAt:   user.CreatedAt,
		UpdatedAt:   user.UpdatedAt,
	}, nil
}

// DeleteUser deletes a user
func (s *UserService) DeleteUser(id string) error {
	_, err := s.userRepo.GetUserByID(id)
	if err != nil {
		return err
	}

	return s.userRepo.DeleteUser(id)
}

// UpdatePassword updates a user's password
func (s *UserService) UpdatePassword(id string, hashedPassword string) error {
	user, err := s.userRepo.GetUserByID(id)
	if err != nil {
		return err
	}

	user.Password = hashedPassword
	user.UpdatedAt = time.Now()

	return s.userRepo.UpdateUser(user)
}

// SetUserVerified marks a user as verified
func (s *UserService) SetUserVerified(id string) error {
	user, err := s.userRepo.GetUserByID(id)
	if err != nil {
		return err
	}

	user.IsVerified = true
	user.UpdatedAt = time.Now()

	return s.userRepo.UpdateUser(user)
}
