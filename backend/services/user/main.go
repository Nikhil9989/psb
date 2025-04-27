package main

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/Nikhil9989/psb/backend/pkg/utils"
	"github.com/Nikhil9989/psb/backend/services/user/handlers"
	"github.com/Nikhil9989/psb/backend/services/user/repository"
	"github.com/Nikhil9989/psb/backend/services/user/service"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
	
	// Swagger documentation
	_ "github.com/Nikhil9989/psb/backend/docs"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

// @title SKILL BRIDGE User Service API
// @description API for the SKILL BRIDGE user management system
// @version 1.0
// @host localhost:8081
// @BasePath /api/v1
// @schemes http https
// @securityDefinitions.apikey BearerAuth
// @in header
// @name Authorization
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
	dbName := utils.GetEnv("DB_NAME", "skillbridge_auth")
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

	// Initialize repositories, services and handlers
	userRepo := repository.NewUserRepository(db)
	userService := service.NewUserService(userRepo)
	userHandler := handlers.NewUserHandler(userRepo)

	// Set up Gin router
	router := gin.Default()

	// Setup Swagger
	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

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
			
			// Additional endpoints for auth service integration
			users.GET("/by-email/:email", func(c *gin.Context) {
				email := c.Param("email")
				user, err := userService.GetUserByEmail(email)
				if err != nil {
					c.JSON(404, gin.H{"success": false, "message": "User not found", "error": err.Error()})
					return
				}
				c.JSON(200, gin.H{"success": true, "message": "User found", "data": user})
			})

			users.PUT("/:id/verify", func(c *gin.Context) {
				id := c.Param("id")
				err := userService.SetUserVerified(id)
				if err != nil {
					c.JSON(500, gin.H{"success": false, "message": "Failed to verify user", "error": err.Error()})
					return
				}
				c.JSON(200, gin.H{"success": true, "message": "User verified successfully"})
			})

			users.PUT("/:id/password", func(c *gin.Context) {
				id := c.Param("id")
				var data struct {
					Password string `json:"password" binding:"required"`
				}

				if err := c.ShouldBindJSON(&data); err != nil {
					c.JSON(400, gin.H{"success": false, "message": "Invalid request", "error": err.Error()})
					return
				}

				err := userService.UpdatePassword(id, data.Password)
				if err != nil {
					c.JSON(500, gin.H{"success": false, "message": "Failed to update password", "error": err.Error()})
					return
				}
				c.JSON(200, gin.H{"success": true, "message": "Password updated successfully"})
			})
		}
	}

	// Start the server
	port := utils.GetEnv("USER_SERVICE_PORT", "8081")
	if err := router.Run(":" + port); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
