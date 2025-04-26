package middleware

import (
	"net/http"
	"strings"

	"github.com/Nikhil9989/psb/backend/pkg/models"
	"github.com/Nikhil9989/psb/backend/pkg/utils"
	"github.com/gin-gonic/gin"
)

// JWTMiddleware handles JWT authentication and authorization
type JWTMiddleware struct {
	JWTSecret string
}

// NewJWTMiddleware creates a new JWTMiddleware
func NewJWTMiddleware(jwtSecret string) *JWTMiddleware {
	return &JWTMiddleware{JWTSecret: jwtSecret}
}

// AuthRequired middleware requires a valid JWT token for access
func (m *JWTMiddleware) AuthRequired() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Extract token from Authorization header
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.JSON(http.StatusUnauthorized, models.NewErrorResponse("Unauthorized", "Missing authentication token"))
			c.Abort()
			return
		}

		// Check that the header is in the format "Bearer <token>"
		splitToken := strings.Split(authHeader, "Bearer ")
		if len(splitToken) != 2 {
			c.JSON(http.StatusUnauthorized, models.NewErrorResponse("Unauthorized", "Invalid authentication format"))
			c.Abort()
			return
		}

		tokenString := splitToken[1]

		// Validate token
		claims, err := utils.ValidateToken(tokenString, m.JWTSecret)
		if err != nil {
			c.JSON(http.StatusUnauthorized, models.NewErrorResponse("Unauthorized", "Invalid or expired token"))
			c.Abort()
			return
		}

		// Check token type
		if claims.Type != "access" {
			c.JSON(http.StatusUnauthorized, models.NewErrorResponse("Unauthorized", "Invalid token type"))
			c.Abort()
			return
		}

		// Store user info in the context
		c.Set("user_id", claims.UserID)
		c.Set("email", claims.Email)
		c.Set("role", claims.Role)

		c.Next()
	}
}

// RoleRequired middleware requires a specific role for access
func (m *JWTMiddleware) RoleRequired(role string) gin.HandlerFunc {
	return func(c *gin.Context) {
		// Check if user_id and role exist in the context (set by AuthRequired middleware)
		userRole, exists := c.Get("role")
		if !exists {
			c.JSON(http.StatusUnauthorized, models.NewErrorResponse("Unauthorized", "User role not found"))
			c.Abort()
			return
		}

		// Check if the user has the required role
		if userRole.(string) != role {
			c.JSON(http.StatusForbidden, models.NewErrorResponse("Forbidden", "Insufficient permissions"))
			c.Abort()
			return
		}

		c.Next()
	}
}

// SameUserOrAdmin middleware allows access only to the same user or an admin
func (m *JWTMiddleware) SameUserOrAdmin() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Check if user_id and role exist in the context (set by AuthRequired middleware)
		userID, userIDExists := c.Get("user_id")
		userRole, roleExists := c.Get("role")
		if !userIDExists || !roleExists {
			c.JSON(http.StatusUnauthorized, models.NewErrorResponse("Unauthorized", "User information not found"))
			c.Abort()
			return
		}

		// Check if the user is an admin
		if userRole.(string) == "admin" {
			c.Next()
			return
		}

		// Check if the user is accessing their own data
		requestedUserID := c.Param("id")
		if requestedUserID != userID.(string) {
			c.JSON(http.StatusForbidden, models.NewErrorResponse("Forbidden", "You can only access your own data"))
			c.Abort()
			return
		}

		c.Next()
	}
}
