package config

import (
	"database/sql"
	"fmt"
	"os"
	"strconv"
	"time"

	_ "github.com/lib/pq"
	"github.com/redis/go-redis/v9"
)

// Config stores all configuration for the service
type Config struct {
	Database  DatabaseConfig
	Redis     RedisConfig
	JWT       JWTConfig
	Server    ServerConfig
	Services  ServicesConfig
	Email     EmailConfig
}

// DatabaseConfig stores database connection configuration
type DatabaseConfig struct {
	Host     string
	Port     int
	User     string
	Password string
	DBName   string
	SSLMode  string
}

// RedisConfig stores Redis connection configuration
type RedisConfig struct {
	Host     string
	Port     int
	Password string
	DB       int
}

// JWTConfig stores JWT configuration
type JWTConfig struct {
	Secret              string
	AccessTokenExpiry   time.Duration
	RefreshTokenExpiry  time.Duration
	VerificationExpiry  time.Duration
	PasswordResetExpiry time.Duration
}

// ServerConfig stores the server configuration
type ServerConfig struct {
	Port int
}

// ServicesConfig stores the configuration for other services
type ServicesConfig struct {
	UserServiceURL string
}

// EmailConfig stores email configuration
type EmailConfig struct {
	Sender   string
	Host     string
	Port     int
	Username string
	Password string
	Enabled  bool
}

// LoadConfig loads configuration from environment variables
func LoadConfig() (*Config, error) {
	port, err := strconv.Atoi(getEnv("PORT", "8082"))
	if err != nil {
		return nil, fmt.Errorf("invalid PORT: %v", err)
	}

	dbPort, err := strconv.Atoi(getEnv("DB_PORT", "5432"))
	if err != nil {
		return nil, fmt.Errorf("invalid DB_PORT: %v", err)
	}

	redisPort, err := strconv.Atoi(getEnv("REDIS_PORT", "6379"))
	if err != nil {
		return nil, fmt.Errorf("invalid REDIS_PORT: %v", err)
	}

	redisDB, err := strconv.Atoi(getEnv("REDIS_DB", "0"))
	if err != nil {
		return nil, fmt.Errorf("invalid REDIS_DB: %v", err)
	}

	accessExpiry, err := time.ParseDuration(getEnv("JWT_ACCESS_EXPIRY", "15m"))
	if err != nil {
		return nil, fmt.Errorf("invalid JWT_ACCESS_EXPIRY: %v", err)
	}

	refreshExpiry, err := time.ParseDuration(getEnv("JWT_REFRESH_EXPIRY", "7d"))
	if err != nil {
		return nil, fmt.Errorf("invalid JWT_REFRESH_EXPIRY: %v", err)
	}

	verificationExpiry, err := time.ParseDuration(getEnv("JWT_VERIFICATION_EXPIRY", "24h"))
	if err != nil {
		return nil, fmt.Errorf("invalid JWT_VERIFICATION_EXPIRY: %v", err)
	}

	passwordResetExpiry, err := time.ParseDuration(getEnv("JWT_PASSWORD_RESET_EXPIRY", "15m"))
	if err != nil {
		return nil, fmt.Errorf("invalid JWT_PASSWORD_RESET_EXPIRY: %v", err)
	}

	emailPort, err := strconv.Atoi(getEnv("EMAIL_PORT", "587"))
	if err != nil {
		return nil, fmt.Errorf("invalid EMAIL_PORT: %v", err)
	}

	emailEnabled, err := strconv.ParseBool(getEnv("EMAIL_ENABLED", "false"))
	if err != nil {
		return nil, fmt.Errorf("invalid EMAIL_ENABLED: %v", err)
	}

	return &Config{
		Database: DatabaseConfig{
			Host:     getEnv("DB_HOST", "localhost"),
			Port:     dbPort,
			User:     getEnv("DB_USER", "postgres"),
			Password: getEnv("DB_PASSWORD", "postgres"),
			DBName:   getEnv("DB_NAME", "skillbridge_auth"),
			SSLMode:  getEnv("DB_SSLMODE", "disable"),
		},
		Redis: RedisConfig{
			Host:     getEnv("REDIS_HOST", "localhost"),
			Port:     redisPort,
			Password: getEnv("REDIS_PASSWORD", ""),
			DB:       redisDB,
		},
		JWT: JWTConfig{
			Secret:              getEnv("JWT_SECRET", "your_jwt_secret_key_change_in_production"),
			AccessTokenExpiry:   accessExpiry,
			RefreshTokenExpiry:  refreshExpiry,
			VerificationExpiry:  verificationExpiry,
			PasswordResetExpiry: passwordResetExpiry,
		},
		Server: ServerConfig{
			Port: port,
		},
		Services: ServicesConfig{
			UserServiceURL: getEnv("USER_SERVICE_URL", "http://localhost:8081"),
		},
		Email: EmailConfig{
			Sender:   getEnv("EMAIL_SENDER", "noreply@skillbridge.com"),
			Host:     getEnv("EMAIL_HOST", "smtp.example.com"),
			Port:     emailPort,
			Username: getEnv("EMAIL_USERNAME", ""),
			Password: getEnv("EMAIL_PASSWORD", ""),
			Enabled:  emailEnabled,
		},
	}, nil
}

// SetupDatabase sets up the database connection
func SetupDatabase(cfg *Config) (*sql.DB, error) {
	psqlInfo := fmt.Sprintf(
		"host=%s port=%d user=%s password=%s dbname=%s sslmode=%s",
		cfg.Database.Host,
		cfg.Database.Port,
		cfg.Database.User,
		cfg.Database.Password,
		cfg.Database.DBName,
		cfg.Database.SSLMode,
	)

	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		return nil, err
	}

	// Check the connection
	err = db.Ping()
	if err != nil {
		return nil, err
	}

	// Create tables if they don't exist
	err = createTables(db)
	if err != nil {
		return nil, err
	}

	return db, nil
}

// SetupRedis sets up the Redis connection
func SetupRedis(cfg *Config) (*redis.Client, error) {
	redisClient := redis.NewClient(&redis.Options{
		Addr:     fmt.Sprintf("%s:%d", cfg.Redis.Host, cfg.Redis.Port),
		Password: cfg.Redis.Password,
		DB:       cfg.Redis.DB,
	})

	return redisClient, nil
}

// getEnv gets an environment variable or returns a default value
func getEnv(key, defaultValue string) string {
	value := os.Getenv(key)
	if value == "" {
		return defaultValue
	}
	return value
}

// createTables creates the necessary tables if they don't exist
func createTables(db *sql.DB) error {
	// Verification tokens table
	tokensTable := `
	CREATE TABLE IF NOT EXISTS verification_tokens (
		id SERIAL PRIMARY KEY,
		token VARCHAR(255) UNIQUE NOT NULL,
		user_id VARCHAR(36) NOT NULL,
		type VARCHAR(50) NOT NULL,
		expires_at TIMESTAMP NOT NULL,
		created_at TIMESTAMP NOT NULL DEFAULT NOW()
	);
	`

	// Execute table creation statements
	_, err := db.Exec(tokensTable)
	if err != nil {
		return err
	}

	return nil
}
