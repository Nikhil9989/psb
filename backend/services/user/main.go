package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/Nikhil9989/psb/backend/pkg/utils"
	"github.com/Nikhil9989/psb/backend/services/user/handlers"
	"github.com/Nikhil9989/psb/backend/services/user/repository"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func main() {
	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Println("Warning: No .env file found")
	}

	// Set up database connection
	dbHost := utils.GetEnv("DB_HOST", "localhost")
	dbPort := utils.GetEnv("DB_PORT", "5432")
	dbUser := utils.GetEnv("DB_USER", "postgres")
	dbPassword := utils.GetEnv("DB_PASSWORD", "postgres")
	dbName := utils.GetEnv("DB_NAME", "skillbridge")
	sslMode := utils.GetEnv("DB_SSL_MODE", "disable")

	dsn := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=%s",
		dbHost, dbPort, dbUser, dbPassword, dbName, sslMode,
	)

	db, err := sql.Open("postgres", dsn)
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}
	defer db.Close()

	if err = db.Ping(); err != nil {
		log.Fatalf("Failed to ping database: %v", err)
	}

	log.Println("Connected to database successfully")

	// Initialize repositories and handlers
	userRepo := repository.NewUserRepository(db)
	userHandler := handlers.NewUserHandler(userRepo)

	// Set up Gin router
	router := gin.Default()

	// API routes
	api := router.Group("/api/v1")
	{
		// User routes
		users := api.Group("/users")
		{
			users.POST("/", userHandler.CreateUser)
			users.GET("/", userHandler.GetUsers)
			users.GET("/:id", userHandler.GetUserByID)
			users.PUT("/:id", userHandler.UpdateUser)
			users.DELETE("/:id", userHandler.DeleteUser)
			
			// User profile routes
			users.GET("/:id/profile", userHandler.GetUserProfile)
			users.PUT("/:id/profile", userHandler.UpdateUserProfile)
			
			// User preferences routes
			users.GET("/:id/preferences", userHandler.GetUserPreferences)
			users.PUT("/:id/preferences", userHandler.UpdateUserPreferences)
		}
	}

	// Start the server
	port := utils.GetEnv("USER_SERVICE_PORT", "8081")
	if err := router.Run(":" + port); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
