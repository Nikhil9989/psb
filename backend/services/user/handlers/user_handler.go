package handlers

import (
	"net/http"
	"strconv"
	"time"

	"github.com/Nikhil9989/psb/backend/pkg/models"
	"github.com/Nikhil9989/psb/backend/pkg/utils"
	"github.com/Nikhil9989/psb/backend/services/user/repository"
	"github.com/gin-gonic/gin"
)

// UserHandler handles HTTP requests for user operations
type UserHandler struct {
	userRepo *repository.UserRepository
}

// NewUserHandler creates a new UserHandler
func NewUserHandler(userRepo *repository.UserRepository) *UserHandler {
	return &UserHandler{userRepo: userRepo}
}

// CreateUser handles user creation requests
func (h *UserHandler) CreateUser(c *gin.Context) {
	var request models.CreateUserRequest

	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, models.NewErrorResponse("Invalid request", err.Error()))
		return
	}

	// Validate email and password
	if !utils.ValidateEmail(request.Email) {
		c.JSON(http.StatusBadRequest, models.NewErrorResponse("Invalid email", "Please provide a valid email address"))
		return
	}

	if !utils.ValidatePassword(request.Password) {
		c.JSON(http.StatusBadRequest, models.NewErrorResponse(
			"Invalid password",
			"Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character",
		))
		return
	}

	// Check if user already exists
	existingUser, err := h.userRepo.GetUserByEmail(request.Email)
	if err == nil && existingUser != nil {
		c.JSON(http.StatusConflict, models.NewErrorResponse("User already exists", "Email is already registered"))
		return
	}

	// Hash password
	hashedPassword, err := utils.HashPassword(request.Password)
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.NewErrorResponse("Failed to create user", "Internal server error"))
		return
	}

	// Create user
	now := time.Now()
	userID := utils.GenerateUUID()

	user := &models.User{
		ID:          userID,
		Email:       request.Email,
		Password:    hashedPassword,
		FirstName:   request.FirstName,
		LastName:    request.LastName,
		Role:        request.Role,
		IsVerified:  false,
		PhoneNumber: request.PhoneNumber,
		CreatedAt:   now,
		UpdatedAt:   now,
	}

	err = h.userRepo.CreateUser(user)
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.NewErrorResponse("Failed to create user", err.Error()))
		return
	}

	// Return user response (excluding password)
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

	c.JSON(http.StatusCreated, models.NewSuccessResponse("User created successfully", userResponse))
}

// GetUsers handles requests to get all users with pagination
func (h *UserHandler) GetUsers(c *gin.Context) {
	// Parse pagination parameters
	page, err := strconv.Atoi(c.DefaultQuery("page", "1"))
	if err != nil || page < 1 {
		page = 1
	}

	pageSize, err := strconv.Atoi(c.DefaultQuery("page_size", "10"))
	if err != nil || pageSize < 1 || pageSize > 100 {
		pageSize = 10
	}

	// Get users from repository
	users, err := h.userRepo.GetUsers(page, pageSize)
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.NewErrorResponse("Failed to get users", err.Error()))
		return
	}

	// Convert to response objects (excluding passwords)
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

	response := gin.H{
		"users":      userResponses,
		"page":       page,
		"page_size":  pageSize,
		"total_items": len(userResponses), // This is not the total count, just the current page count
	}

	c.JSON(http.StatusOK, models.NewSuccessResponse("Users retrieved successfully", response))
}

// GetUserByID handles requests to get a user by ID
func (h *UserHandler) GetUserByID(c *gin.Context) {
	userID := c.Param("id")

	user, err := h.userRepo.GetUserByID(userID)
	if err != nil {
		c.JSON(http.StatusNotFound, models.NewErrorResponse("User not found", err.Error()))
		return
	}

	// Convert to response object (excluding password)
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

	c.JSON(http.StatusOK, models.NewSuccessResponse("User retrieved successfully", userResponse))
}

// UpdateUser handles requests to update a user
func (h *UserHandler) UpdateUser(c *gin.Context) {
	userID := c.Param("id")

	// Check if user exists
	user, err := h.userRepo.GetUserByID(userID)
	if err != nil {
		c.JSON(http.StatusNotFound, models.NewErrorResponse("User not found", err.Error()))
		return
	}

	// Parse request body
	var request models.UpdateUserRequest
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, models.NewErrorResponse("Invalid request", err.Error()))
		return
	}

	// Update user fields
	if request.FirstName != "" {
		user.FirstName = request.FirstName
	}
	if request.LastName != "" {
		user.LastName = request.LastName
	}
	if request.PhoneNumber != "" {
		user.PhoneNumber = request.PhoneNumber
	}
	user.UpdatedAt = time.Now()

	// Save changes
	err = h.userRepo.UpdateUser(user)
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.NewErrorResponse("Failed to update user", err.Error()))
		return
	}

	// Return updated user
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

	c.JSON(http.StatusOK, models.NewSuccessResponse("User updated successfully", userResponse))
}

// DeleteUser handles requests to delete a user
func (h *UserHandler) DeleteUser(c *gin.Context) {
	userID := c.Param("id")

	// Check if user exists
	_, err := h.userRepo.GetUserByID(userID)
	if err != nil {
		c.JSON(http.StatusNotFound, models.NewErrorResponse("User not found", err.Error()))
		return
	}

	// Delete user
	err = h.userRepo.DeleteUser(userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.NewErrorResponse("Failed to delete user", err.Error()))
		return
	}

	c.JSON(http.StatusOK, models.NewSuccessResponse("User deleted successfully", nil))
}

// GetUserProfile handles requests to get a user's profile
func (h *UserHandler) GetUserProfile(c *gin.Context) {
	userID := c.Param("id")

	// Check if user exists
	_, err := h.userRepo.GetUserByID(userID)
	if err != nil {
		c.JSON(http.StatusNotFound, models.NewErrorResponse("User not found", err.Error()))
		return
	}

	// Get profile
	profile, err := h.userRepo.GetUserProfile(userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.NewErrorResponse("Failed to get user profile", err.Error()))
		return
	}

	c.JSON(http.StatusOK, models.NewSuccessResponse("User profile retrieved successfully", profile))
}

// UpdateUserProfile handles requests to update a user's profile
func (h *UserHandler) UpdateUserProfile(c *gin.Context) {
	userID := c.Param("id")

	// Check if user exists
	_, err := h.userRepo.GetUserByID(userID)
	if err != nil {
		c.JSON(http.StatusNotFound, models.NewErrorResponse("User not found", err.Error()))
		return
	}

	// Get current profile
	currentProfile, err := h.userRepo.GetUserProfile(userID)
	if err != nil {
		// If error is not 'not found', return error
		if err.Error() != "profile not found" {
			c.JSON(http.StatusInternalServerError, models.NewErrorResponse("Failed to get current profile", err.Error()))
			return
		}
		// If profile not found, create an empty one
		currentProfile = &models.UserProfile{
			UserID:    userID,
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
		}
	}

	// Parse request body
	var profile models.UserProfile
	if err := c.ShouldBindJSON(&profile); err != nil {
		c.JSON(http.StatusBadRequest, models.NewErrorResponse("Invalid request", err.Error()))
		return
	}

	// Ensure user ID is set correctly
	profile.UserID = userID
	profile.UpdatedAt = time.Now()

	// Preserve creation time
	profile.CreatedAt = currentProfile.CreatedAt

	// Update profile
	err = h.userRepo.UpdateUserProfile(&profile)
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.NewErrorResponse("Failed to update user profile", err.Error()))
		return
	}

	c.JSON(http.StatusOK, models.NewSuccessResponse("User profile updated successfully", profile))
}

// GetUserPreferences handles requests to get a user's preferences
func (h *UserHandler) GetUserPreferences(c *gin.Context) {
	userID := c.Param("id")

	// Check if user exists
	_, err := h.userRepo.GetUserByID(userID)
	if err != nil {
		c.JSON(http.StatusNotFound, models.NewErrorResponse("User not found", err.Error()))
		return
	}

	// Get preferences
	prefs, err := h.userRepo.GetUserPreferences(userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.NewErrorResponse("Failed to get user preferences", err.Error()))
		return
	}

	c.JSON(http.StatusOK, models.NewSuccessResponse("User preferences retrieved successfully", prefs))
}

// UpdateUserPreferences handles requests to update a user's preferences
func (h *UserHandler) UpdateUserPreferences(c *gin.Context) {
	userID := c.Param("id")

	// Check if user exists
	_, err := h.userRepo.GetUserByID(userID)
	if err != nil {
		c.JSON(http.StatusNotFound, models.NewErrorResponse("User not found", err.Error()))
		return
	}

	// Get current preferences
	currentPrefs, err := h.userRepo.GetUserPreferences(userID)
	if err != nil {
		// If error is not 'not found', return error
		if err.Error() != "preferences not found" {
			c.JSON(http.StatusInternalServerError, models.NewErrorResponse("Failed to get current preferences", err.Error()))
			return
		}
		// If preferences not found, create default ones
		currentPrefs = &models.UserPreference{
			UserID:             userID,
			EmailNotifications: true,
			SMSNotifications:   false,
			PushNotifications:  true,
			Language:           "en",
			Theme:              "light",
			Timezone:           "UTC",
			CreatedAt:          time.Now(),
			UpdatedAt:          time.Now(),
		}
	}

	// Parse request body
	var prefs models.UserPreference
	if err := c.ShouldBindJSON(&prefs); err != nil {
		c.JSON(http.StatusBadRequest, models.NewErrorResponse("Invalid request", err.Error()))
		return
	}

	// Ensure user ID is set correctly
	prefs.UserID = userID
	prefs.UpdatedAt = time.Now()

	// Preserve creation time
	prefs.CreatedAt = currentPrefs.CreatedAt

	// Update preferences
	err = h.userRepo.UpdateUserPreferences(&prefs)
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.NewErrorResponse("Failed to update user preferences", err.Error()))
		return
	}

	c.JSON(http.StatusOK, models.NewSuccessResponse("User preferences updated successfully", prefs))
}
