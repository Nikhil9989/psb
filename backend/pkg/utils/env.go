package utils

import (
	"os"
)

// GetEnv retrieves an environment variable with a default fallback value
func GetEnv(key, defaultValue string) string {
	value := os.Getenv(key)
	if value == "" {
		return defaultValue
	}
	return value
}
