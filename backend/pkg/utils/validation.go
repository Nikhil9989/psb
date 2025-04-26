package utils

import (
	"net/mail"
	"regexp"
	"strings"
)

// ValidateEmail validates if a string is a valid email address
func ValidateEmail(email string) bool {
	_, err := mail.ParseAddress(email)
	return err == nil
}

// ValidatePassword checks if a password meets the minimum requirements
// Password must be at least 8 characters long and contain at least one uppercase letter,
// one lowercase letter, one number, and one special character
func ValidatePassword(password string) bool {
	if len(password) < 8 {
		return false
	}

	hasUppercase := regexp.MustCompile(`[A-Z]`).MatchString(password)
	hasLowercase := regexp.MustCompile(`[a-z]`).MatchString(password)
	hasNumber := regexp.MustCompile(`[0-9]`).MatchString(password)
	hasSpecialChar := regexp.MustCompile(`[!@#$%^&*(),.?":{}|<>]`).MatchString(password)

	return hasUppercase && hasLowercase && hasNumber && hasSpecialChar
}

// SanitizeString removes dangerous characters from a string
func SanitizeString(input string) string {
	// Remove any HTML tags
	htmlTagRegex := regexp.MustCompile(`<[^>]*>`)
	sanitized := htmlTagRegex.ReplaceAllString(input, "")

	// Remove special characters that could be used for injection
	sanitized = regexp.MustCompile(`[\\'";%*]`).ReplaceAllString(sanitized, "")

	// Trim whitespace
	sanitized = strings.TrimSpace(sanitized)

	return sanitized
}
