package handlers

import (
	"net/http"

	"github.com/Nikhil9989/psb/backend/pkg/models"
	"github.com/Nikhil9989/psb/backend/services/auth/service"
	"github.com/gin-gonic/gin"
)

// AuthHandler handles HTTP requests for authentication operations
type AuthHandler struct {
	authService *service.AuthService
}

// NewAuthHandler creates a new AuthHandler
func NewAuthHandler(authService *service.AuthService) *AuthHandler {
	return &AuthHandler{authService: authService}
}

// Register handles user registration requests
func (h *AuthHandler) Register(c *gin.Context) {
	var request models.CreateUserRequest

	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, models.NewErrorResponse("Invalid request", err.Error()))
		return
	}

	// Register the user
	user, err := h.authService.Register(&request)
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.NewErrorResponse("Failed to register user", err.Error()))
		return
	}

	c.JSON(http.StatusCreated, models.NewSuccessResponse("User registered successfully. Please check your email for verification.", user))
}

// Login handles user login requests
func (h *AuthHandler) Login(c *gin.Context) {
	var request models.LoginRequest

	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, models.NewErrorResponse("Invalid request", err.Error()))
		return
	}

	// Login the user
	response, err := h.authService.Login(&request)
	if err != nil {
		c.JSON(http.StatusUnauthorized, models.NewErrorResponse("Authentication failed", err.Error()))
		return
	}

	c.JSON(http.StatusOK, models.NewSuccessResponse("Login successful", response))
}

// RefreshToken handles token refresh requests
func (h *AuthHandler) RefreshToken(c *gin.Context) {
	var request models.RefreshRequest

	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, models.NewErrorResponse("Invalid request", err.Error()))
		return
	}

	// Refresh the token
	tokens, err := h.authService.RefreshToken(&request)
	if err != nil {
		c.JSON(http.StatusUnauthorized, models.NewErrorResponse("Token refresh failed", err.Error()))
		return
	}

	c.JSON(http.StatusOK, models.NewSuccessResponse("Token refreshed successfully", tokens))
}

// Logout handles user logout requests
func (h *AuthHandler) Logout(c *gin.Context) {
	var request models.RefreshRequest

	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, models.NewErrorResponse("Invalid request", err.Error()))
		return
	}

	// Logout the user
	err := h.authService.Logout(request.RefreshToken)
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.NewErrorResponse("Logout failed", err.Error()))
		return
	}

	c.JSON(http.StatusOK, models.NewSuccessResponse("Logout successful", nil))
}

// VerifyEmail handles email verification requests
func (h *AuthHandler) VerifyEmail(c *gin.Context) {
	token := c.Param("token")

	// Verify the email
	err := h.authService.VerifyEmail(token)
	if err != nil {
		c.JSON(http.StatusBadRequest, models.NewErrorResponse("Email verification failed", err.Error()))
		return
	}

	c.JSON(http.StatusOK, models.NewSuccessResponse("Email verified successfully", nil))
}

// ForgotPassword handles password reset requests
func (h *AuthHandler) ForgotPassword(c *gin.Context) {
	var request models.PasswordResetRequest

	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, models.NewErrorResponse("Invalid request", err.Error()))
		return
	}

	// Process password reset request
	err := h.authService.ForgotPassword(request.Email)
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.NewErrorResponse("Password reset request failed", err.Error()))
		return
	}

	// Always return success to avoid revealing whether an email exists
	c.JSON(http.StatusOK, models.NewSuccessResponse("If your email is registered, you will receive password reset instructions", nil))
}

// ResetPassword handles password reset with token
func (h *AuthHandler) ResetPassword(c *gin.Context) {
	var request models.ResetPasswordRequest

	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, models.NewErrorResponse("Invalid request", err.Error()))
		return
	}

	// Reset the password
	err := h.authService.ResetPassword(&request)
	if err != nil {
		c.JSON(http.StatusBadRequest, models.NewErrorResponse("Password reset failed", err.Error()))
		return
	}

	c.JSON(http.StatusOK, models.NewSuccessResponse("Password reset successfully", nil))
}
