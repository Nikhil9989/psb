package main

import (
	"fmt"
	"log"
	"os"

	"github.com/Nikhil9989/psb/backend/services/api-gateway/config"
	"github.com/Nikhil9989/psb/backend/services/api-gateway/middleware"
	"github.com/Nikhil9989/psb/backend/services/api-gateway/proxy"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	// Load .env file if it exists
	godotenv.Load()

	// Initialize configuration
	cfg, err := config.LoadConfig()
	if err != nil {
		log.Fatalf("Failed to load configuration: %v", err)
	}

	// Initialize proxies
	userProxy := proxy.NewServiceProxy(cfg.Services.UserServiceURL)
	authProxy := proxy.NewServiceProxy(cfg.Services.AuthServiceURL)

	// Set up middleware
	jwtMiddleware := middleware.NewJWTMiddleware(cfg.JWT.Secret)

	// Set up Gin router
	router := gin.Default()

	// CORS middleware
	router.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	})

	// Health check endpoint
	router.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status": "ok",
			"service": "api-gateway",
		})
	})

	// API routes
	api := router.Group("/api/v1")
	{
		// Auth routes (public)
		auth := api.Group("/auth")
		{
			auth.POST("/register", authProxy.ProxyRequest("/api/v1/auth/register"))
			auth.POST("/login", authProxy.ProxyRequest("/api/v1/auth/login"))
			auth.POST("/refresh", authProxy.ProxyRequest("/api/v1/auth/refresh"))
			auth.POST("/logout", authProxy.ProxyRequest("/api/v1/auth/logout"))
			auth.GET("/verify-email/:token", authProxy.ProxyRequest("/api/v1/auth/verify-email/:token"))
			auth.POST("/forgot-password", authProxy.ProxyRequest("/api/v1/auth/forgot-password"))
			auth.POST("/reset-password", authProxy.ProxyRequest("/api/v1/auth/reset-password"))
		}

		// User routes (protected)
		users := api.Group("/users")
		users.Use(jwtMiddleware.AuthRequired())
		{
			// Admin only endpoints
			users.GET("/", jwtMiddleware.RoleRequired("admin"), userProxy.ProxyRequest("/api/v1/users"))
			users.POST("/", jwtMiddleware.RoleRequired("admin"), userProxy.ProxyRequest("/api/v1/users"))
			users.DELETE("/:id", jwtMiddleware.RoleRequired("admin"), userProxy.ProxyRequest("/api/v1/users/:id"))

			// User can access their own data
			users.GET("/:id", jwtMiddleware.SameUserOrAdmin(), userProxy.ProxyRequest("/api/v1/users/:id"))
			users.PUT("/:id", jwtMiddleware.SameUserOrAdmin(), userProxy.ProxyRequest("/api/v1/users/:id"))
			
			// User profile endpoints
			users.GET("/:id/profile", jwtMiddleware.SameUserOrAdmin(), userProxy.ProxyRequest("/api/v1/users/:id/profile"))
			users.PUT("/:id/profile", jwtMiddleware.SameUserOrAdmin(), userProxy.ProxyRequest("/api/v1/users/:id/profile"))
			
			// User preferences endpoints
			users.GET("/:id/preferences", jwtMiddleware.SameUserOrAdmin(), userProxy.ProxyRequest("/api/v1/users/:id/preferences"))
			users.PUT("/:id/preferences", jwtMiddleware.SameUserOrAdmin(), userProxy.ProxyRequest("/api/v1/users/:id/preferences"))
		}
	}

	// Start the server
	port := os.Getenv("PORT")
	if port == "" {
		port = fmt.Sprintf("%d", cfg.Server.Port)
	}
	log.Printf("API Gateway starting on port %s", port)
	router.Run(fmt.Sprintf(":%s", port))
}
