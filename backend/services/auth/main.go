package main

import (
	"fmt"
	"log"
	"os"

	"github.com/Nikhil9989/psb/backend/services/auth/config"
	"github.com/Nikhil9989/psb/backend/services/auth/handlers"
	"github.com/Nikhil9989/psb/backend/services/auth/repository"
	"github.com/Nikhil9989/psb/backend/services/auth/service"
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

	// Set up the database connection
	db, err := config.SetupDatabase(cfg)
	if err != nil {
		log.Fatalf("Failed to setup database: %v", err)
	}

	// Set up Redis connection
	redisClient, err := config.SetupRedis(cfg)
	if err != nil {
		log.Fatalf("Failed to setup Redis: %v", err)
	}
	
	// Initialize repositories
	tokenRepo := repository.NewTokenRepository(db, redisClient)
	// Create user API client to communicate with user service
	userAPIClient := service.NewUserAPIClient(cfg.Services.UserServiceURL)

	// Initialize services
	authService := service.NewAuthService(tokenRepo, userAPIClient, cfg)

	// Initialize handlers
	authHandler := handlers.NewAuthHandler(authService)

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
			"service": "auth-service",
		})
	})

	// API routes
	api := router.Group("/api/v1")
	{
		auth := api.Group("/auth")
		{
			auth.POST("/register", authHandler.Register)
			auth.POST("/login", authHandler.Login)
			auth.POST("/refresh", authHandler.RefreshToken)
			auth.POST("/logout", authHandler.Logout)
			auth.GET("/verify-email/:token", authHandler.VerifyEmail)
			auth.POST("/forgot-password", authHandler.ForgotPassword)
			auth.POST("/reset-password", authHandler.ResetPassword)
		}
	}

	// Start the server
	port := os.Getenv("PORT")
	if port == "" {
		port = fmt.Sprintf("%d", cfg.Server.Port)
	}
	log.Printf("Auth service starting on port %s", port)
	router.Run(fmt.Sprintf(":%s", port))
}
