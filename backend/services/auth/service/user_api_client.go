package service

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/Nikhil9989/psb/backend/pkg/models"
	"github.com/Nikhil9989/psb/backend/pkg/utils"
)

// UserAPIClient handles communication with the user service
type UserAPIClient struct {
	baseURL string
	client  *http.Client
}

// NewUserAPIClient creates a new UserAPIClient
func NewUserAPIClient(baseURL string) *UserAPIClient {
	return &UserAPIClient{
		baseURL: baseURL,
		client: &http.Client{
			Timeout: time.Second * 10,
		},
	}
}

// GetUserByEmail retrieves a user by email from the user service
func (c *UserAPIClient) GetUserByEmail(email string) (*models.User, error) {
	// In a real implementation, this would make an API call to the user service
	// For now, we'll simulate it with a hardcoded test user for development purposes
	
	// Check if this is the test user
	if email == "test@example.com" {
		// Create a test user with a hashed version of "yourpassword"
		hashedPassword, err := utils.HashPassword("yourpassword")
		if err != nil {
			return nil, err
		}
		
		return &models.User{
			ID:          "test-user-id",
			Email:       "test@example.com",
			Password:    hashedPassword,
			FirstName:   "Test",
			LastName:    "User",
			Role:        "student",
			IsVerified:  true,
			CreatedAt:   time.Now(),
			UpdatedAt:   time.Now(),
		}, nil
	}
	
	// For other emails, return user not found
	return nil, fmt.Errorf("user not found")
}

// CreateUser creates a new user in the user service
func (c *UserAPIClient) CreateUser(req *models.CreateUserRequest) (*models.UserResponse, error) {
	// Prepare the request body
	reqBody, err := json.Marshal(req)
	if err != nil {
		return nil, err
	}

	// Create the request
	request, err := http.NewRequest("POST", fmt.Sprintf("%s/api/v1/users", c.baseURL), bytes.NewBuffer(reqBody))
	if err != nil {
		return nil, err
	}

	// Set headers
	request.Header.Set("Content-Type", "application/json")

	// Make the request
	resp, err := c.client.Do(request)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	// Check response status
	if resp.StatusCode != http.StatusCreated {
		var errorResp models.APIResponse
		err = json.NewDecoder(resp.Body).Decode(&errorResp)
		if err != nil {
			return nil, fmt.Errorf("failed to create user: status %d", resp.StatusCode)
		}
		return nil, fmt.Errorf("failed to create user: %s", errorResp.Error)
	}

	// Parse the response
	var apiResp models.APIResponse
	err = json.NewDecoder(resp.Body).Decode(&apiResp)
	if err != nil {
		return nil, err
	}

	// Extract the user data
	userDataJSON, err := json.Marshal(apiResp.Data)
	if err != nil {
		return nil, err
	}

	// Unmarshal into UserResponse
	var userResp models.UserResponse
	err = json.Unmarshal(userDataJSON, &userResp)
	if err != nil {
		return nil, err
	}

	return &userResp, nil
}

// SetUserVerified marks a user as verified in the user service
func (c *UserAPIClient) SetUserVerified(userID string) error {
	// In a real implementation, this would make an API call to the user service
	// For now, we'll simulate it with a hardcoded request and response

	// URL would be something like: {baseURL}/api/v1/users/{userID}/verify
	// But since we don't have that endpoint yet, we'll skip the actual HTTP call for now
	
	// Dummy implementation for now
	// In a real implementation, you would make an HTTP request to the user service
	return nil
}

// UpdateUserPassword updates a user's password in the user service
func (c *UserAPIClient) UpdateUserPassword(userID, hashedPassword string) error {
	// In a real implementation, this would make an API call to the user service
	// For now, we'll simulate it with a hardcoded request and response

	// URL would be something like: {baseURL}/api/v1/users/{userID}/password
	// But since we don't have that endpoint yet, we'll skip the actual HTTP call for now
	
	// Dummy implementation for now
	// In a real implementation, you would make an HTTP request to the user service
	return nil
}
