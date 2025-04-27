package handlers

import (
	"net/http"
	"strconv"
	"time"

	"github.com/Nikhil9989/psb/backend/pkg/models"
	"github.com/Nikhil9989/psb/backend/services/user/repository"
	"github.com/Nikhil9989/psb/backend/services/user/service"
	"github.com/gin-gonic/gin"
)

// UserHandler handles HTTP requests for user operations
type UserHandler struct {
	userService *service.UserService
	userRepo    *repository.UserRepository
}

// NewUserHandler creates a new UserHandler
func NewUserHandler(userRepo *repository.UserRepository) *UserHandler {
	userService := service.NewUserService(userRepo)
	return &UserHandler{
		userService: userService,
		userRepo:    userRepo,
	}
}

// CreateUser handles user creation requests
// @Summary Create a new user
// @Description Register a new user in the system
// @Tags users
// @Accept json
// @Produce json
// @Param user body models.CreateUserRequest true "User details"
// @Success 201 {object} models.SuccessResponse{data=models.UserResponse} "User created successfully"
// @Failure 400 {object} models.ErrorResponse "Invalid request"
// @Failure 409 {object} models.ErrorResponse "User already exists"
// @Failure 500 {object} models.ErrorResponse "Internal server error"
// @Router /users [post]
func (h *UserHandler) CreateUser(c *gin.Context) {
	var request models.CreateUserRequest

	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, models.NewErrorResponse("Invalid request", err.Error()))
		return
	}

	userResponse, err := h.userService.CreateUser(&request)
	if err != nil {
		if err.Error() == "email already registered" {
			c.JSON(http.StatusConflict, models.NewErrorResponse("User already exists", "Email is already registered"))
			return
		}
		if err.Error() == "invalid email format" || err.Error() == "password must be at least 8 characters with at least one uppercase, lowercase, number, and special character" {
			c.JSON(http.StatusBadRequest, models.NewErrorResponse("Invalid input", err.Error()))
			return
		}
		c.JSON(http.StatusInternalServerError, models.NewErrorResponse("Failed to create user", err.Error()))
		return
	}

	c.JSON(http.StatusCreated, models.NewSuccessResponse("User created successfully", userResponse))
}

// GetUsers handles requests to get all users with pagination
// @Summary Get all users
// @Description Retrieves a paginated list of users
// @Tags users
// @Produce json
// @Security BearerAuth
// @Param page query int false "Page number (default: 1)"
// @Param page_size query int false "Items per page (default: 10, max: 100)"
// @Success 200 {object} models.SuccessResponse{data=map[string]interface{}} "Users retrieved successfully"
// @Failure 500 {object} models.ErrorResponse "Internal server error"
// @Router /users [get]
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

	// Get users from service
	users, err := h.userService.GetUsers(page, pageSize)
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.NewErrorResponse("Failed to get users", err.Error()))
		return
	}

	response := gin.H{
		"users":       users,
		"page":        page,
		"page_size":   pageSize,
		"total_items": len(users), // This is not the total count, just the current page count
	}

	c.JSON(http.StatusOK, models.NewSuccessResponse("Users retrieved successfully", response))
}

// GetUserByID handles requests to get a user by ID
// @Summary Get user by ID
// @Description Retrieves a user by their unique ID
// @Tags users
// @Produce json
// @Security BearerAuth
// @Param id path string true "User ID"
// @Success 200 {object} models.SuccessResponse{data=models.UserResponse} "User retrieved successfully"
// @Failure 404 {object} models.ErrorResponse "User not found"
// @Router /users/{id} [get]
func (h *UserHandler) GetUserByID(c *gin.Context) {
	userID := c.Param("id")

	userResponse, err := h.userService.GetUserByID(userID)
	if err != nil {
		c.JSON(http.StatusNotFound, models.NewErrorResponse("User not found", err.Error()))
		return
	}

	c.JSON(http.StatusOK, models.NewSuccessResponse("User retrieved successfully", userResponse))
}

// UpdateUser handles requests to update a user
// @Summary Update user
// @Description Updates a user's information
// @Tags users
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path string true "User ID"
// @Param user body models.UpdateUserRequest true "User details to update"
// @Success 200 {object} models.SuccessResponse{data=models.UserResponse} "User updated successfully"
// @Failure 400 {object} models.ErrorResponse "Invalid request"
// @Failure 404 {object} models.ErrorResponse "User not found"
// @Failure 500 {object} models.ErrorResponse "Internal server error"
// @Router /users/{id} [put]
func (h *UserHandler) UpdateUser(c *gin.Context) {
	userID := c.Param("id")

	// Parse request body
	var request models.UpdateUserRequest
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, models.NewErrorResponse("Invalid request", err.Error()))
		return
	}

	userResponse, err := h.userService.UpdateUser(userID, &request)
	if err != nil {
		c.JSON(http.StatusNotFound, models.NewErrorResponse("User not found", err.Error()))
		return
	}

	c.JSON(http.StatusOK, models.NewSuccessResponse("User updated successfully", userResponse))
}

// DeleteUser handles requests to delete a user
// @Summary Delete user
// @Description Deletes a user from the system
// @Tags users
// @Produce json
// @Security BearerAuth
// @Param id path string true "User ID"
// @Success 200 {object} models.SuccessResponse "User deleted successfully"
// @Failure 404 {object} models.ErrorResponse "User not found"
// @Failure 500 {object} models.ErrorResponse "Internal server error"
// @Router /users/{id} [delete]
func (h *UserHandler) DeleteUser(c *gin.Context) {
	userID := c.Param("id")

	err := h.userService.DeleteUser(userID)
	if err != nil {
		c.JSON(http.StatusNotFound, models.NewErrorResponse("User not found", err.Error()))
		return
	}

	c.JSON(http.StatusOK, models.NewSuccessResponse("User deleted successfully", nil))
}

// GetUserProfile handles requests to get a user's profile
// @Summary Get user profile
// @Description Retrieves a user's detailed profile
// @Tags profiles
// @Produce json
// @Security BearerAuth
// @Param id path string true "User ID"
// @Success 200 {object} models.SuccessResponse{data=models.UserProfile} "User profile retrieved successfully"
// @Failure 404 {object} models.ErrorResponse "User not found"
// @Failure 500 {object} models.ErrorResponse "Internal server error"
// @Router /users/{id}/profile [get]
func (h *UserHandler) GetUserProfile(c *gin.Context) {
	userID := c.Param("id")

	// Check if user exists
	_, err := h.userService.GetUserByID(userID)
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
// @Summary Update user profile
// @Description Updates a user's detailed profile information
// @Tags profiles
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path string true "User ID"
// @Param profile body models.UserProfile true "Profile information"
// @Success 200 {object} models.SuccessResponse{data=models.UserProfile} "User profile updated successfully"
// @Failure 400 {object} models.ErrorResponse "Invalid request"
// @Failure 404 {object} models.ErrorResponse "User not found"
// @Failure 500 {object} models.ErrorResponse "Internal server error"
// @Router /users/{id}/profile [put]
func (h *UserHandler) UpdateUserProfile(c *gin.Context) {
	userID := c.Param("id")

	// Check if user exists
	_, err := h.userService.GetUserByID(userID)
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
// @Summary Get user preferences
// @Description Retrieves a user's application preferences
// @Tags preferences
// @Produce json
// @Security BearerAuth
// @Param id path string true "User ID"
// @Success 200 {object} models.SuccessResponse{data=models.UserPreference} "User preferences retrieved successfully"
// @Failure 404 {object} models.ErrorResponse "User not found"
// @Failure 500 {object} models.ErrorResponse "Internal server error"
// @Router /users/{id}/preferences [get]
func (h *UserHandler) GetUserPreferences(c *gin.Context) {
	userID := c.Param("id")

	// Check if user exists
	_, err := h.userService.GetUserByID(userID)
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
// @Summary Update user preferences
// @Description Updates a user's application preferences
// @Tags preferences
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path string true "User ID"
// @Param preferences body models.UserPreference true "User preferences"
// @Success 200 {object} models.SuccessResponse{data=models.UserPreference} "User preferences updated successfully"
// @Failure 400 {object} models.ErrorResponse "Invalid request"
// @Failure 404 {object} models.ErrorResponse "User not found"
// @Failure 500 {object} models.ErrorResponse "Internal server error"
// @Router /users/{id}/preferences [put]
func (h *UserHandler) UpdateUserPreferences(c *gin.Context) {
	userID := c.Param("id")

	// Check if user exists
	_, err := h.userService.GetUserByID(userID)
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
