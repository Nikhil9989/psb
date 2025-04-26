package config

import (
	"fmt"
	"os"
	"strconv"
)

// Config stores all configuration for the service
type Config struct {
	Server   ServerConfig
	Services ServicesConfig
	JWT      JWTConfig
}

// ServerConfig stores the server configuration
type ServerConfig struct {
	Port int
}

// ServicesConfig stores the configuration for other services
type ServicesConfig struct {
	UserServiceURL string
	AuthServiceURL string
}

// JWTConfig stores JWT configuration
type JWTConfig struct {
	Secret string
}

// LoadConfig loads configuration from environment variables
func LoadConfig() (*Config, error) {
	port, err := strconv.Atoi(getEnv("PORT", "8080"))
	if err != nil {
		return nil, fmt.Errorf("invalid PORT: %v", err)
	}

	return &Config{
		Server: ServerConfig{
			Port: port,
		},
		Services: ServicesConfig{
			UserServiceURL: getEnv("USER_SERVICE_URL", "http://localhost:8081"),
			AuthServiceURL: getEnv("AUTH_SERVICE_URL", "http://localhost:8082"),
		},
		JWT: JWTConfig{
			Secret: getEnv("JWT_SECRET", "your_jwt_secret_key_change_in_production"),
		},
	}, nil
}

// getEnv gets an environment variable or returns a default value
func getEnv(key, defaultValue string) string {
	value := os.Getenv(key)
	if value == "" {
		return defaultValue
	}
	return value
}
