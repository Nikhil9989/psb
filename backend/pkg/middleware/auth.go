// Go - Authentication Middleware
// backend/pkg/middleware/auth.go

package middleware

import (
	"net/http"
	"strings"

	"github.com/Nikhil9989/psb/backend/pkg/utils"
	"github.com/gin-gonic/gin"
)

// AuthMiddleware checks for a valid JWT token in the Authorization header
func AuthMiddleware(jwtSecret string) gin.HandlerFunc {
	return func(c *gin.Context) {
		// Get the Authorization header
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.JSON(http.StatusUnauthorized, gin.H{"success": false, "message": "Authorization header is required"})
			c.Abort()
			return
		}

		// Check if the Authorization header has the correct format
		parts := strings.Split(authHeader, " ")
		if len(parts) != 2 || parts[0] != "Bearer" {
			c.JSON(http.StatusUnauthorized, gin.H{"success": false, "message": "Authorization header format must be Bearer {token}"})
			c.Abort()
			return
		}

		// Get the token from the Authorization header
		tokenString := parts[1]

		// Validate the token
		claims, err := utils.ValidateToken(tokenString, jwtSecret)
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"success": false, "message": "Invalid or expired token"})
			c.Abort()
			return
		}

		// Check if token is an access token
		if claims.Type != "access" {
			c.JSON(http.StatusUnauthorized, gin.H{"success": false, "message": "Invalid token type"})
			c.Abort()
			return
		}

		// Set user information in the context
		c.Set("userID", claims.UserID)
		c.Set("email", claims.Email)
		c.Set("role", claims.Role)

		c.Next()
	}
}

// RoleMiddleware checks if the user has the required role
func RoleMiddleware(roles ...string) gin.HandlerFunc {
	return func(c *gin.Context) {
		// Get the user role from the context
		userRole, exists := c.Get("role")
		if !exists {
			c.JSON(http.StatusUnauthorized, gin.H{"success": false, "message": "Unauthorized - user role not found"})
			c.Abort()
			return
		}

		// Check if the user has one of the required roles
		hasRole := false
		for _, role := range roles {
			if userRole == role {
				hasRole = true
				break
			}
		}

		if !hasRole {
			c.JSON(http.StatusForbidden, gin.H{"success": false, "message": "Forbidden - insufficient permissions"})
			c.Abort()
			return
		}

		c.Next()
	}
}

// Updated package.json for frontend
/* 
{
  "name": "skill-bridge",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "axios": "^1.6.5",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "framer-motion": "^11.0.3",
    "js-cookie": "^3.0.5",
    "lucide-react": "^0.302.0",
    "next": "14.2.26",
    "react": "^18",
    "react-dom": "^18",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.0.1",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/js-cookie": "^3.0.6",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.2.26",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
*/