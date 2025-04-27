package utils

import (
	"crypto/rand"
	"encoding/base64"
	"fmt"
	"math/big"
)

// RandomString generates a random string of the specified length
func RandomString(length int) string {
	b := make([]byte, length)
	rand.Read(b)
	return base64.URLEncoding.EncodeToString(b)[:length]
}

// GenerateUUID generates a random UUID
func GenerateUUID() string {
	b := make([]byte, 16)
	rand.Read(b)
	// Set version (4) and variant (8, 9, A, or B)
	b[6] = (b[6] & 0x0F) | 0x40
	b[8] = (b[8] & 0x3F) | 0x80
	return fmt.Sprintf("%x-%x-%x-%x-%x", b[0:4], b[4:6], b[6:8], b[8:10], b[10:])
}

// RandomInt generates a random integer between min and max
func RandomInt(min, max int64) (int64, error) {
	// Calculate the range
	n := big.NewInt(max - min + 1)
	
	// Generate a random number in the range [0, n)
	rand, err := rand.Int(rand.Reader, n)
	if err != nil {
		return 0, err
	}
	
	// Add min to the random number to get a number in the range [min, max]
	return rand.Int64() + min, nil
}
