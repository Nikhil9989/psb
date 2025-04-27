package service

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/Nikhil9989/psb/backend/pkg/models"
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
	// Make HTTP request to the user service
	url := fmt.Sprintf("%s/api/v1/users/by-email/%s", c.baseURL, email)
	request, err := http.NewRequest("GET", url, nil)
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
	if resp.StatusCode != http.StatusOK {
		var errorResp struct {
			Success bool   `json:"success"`
			Message string `json:"message"`
			Error   string `json:"error"`
		}
		err = json.NewDecoder(resp.Body).Decode(&errorResp)
		if err != nil {
			return nil, fmt.Errorf("failed to get user by email: status %d", resp.StatusCode)
		}
		return nil, fmt.Errorf("failed to get user by email: %s", errorResp.Error)
	}

	// Parse the response
	var apiResp struct {
		Success bool        `json:"success"`
		Message string      `json:"message"`
		Data    models.User `json:"data"`
	}
	err = json.NewDecoder(resp.Body).Decode(&apiResp)
	if err != nil {
		return nil, err
	}

	return &apiResp.Data, nil
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
	// URL for user verification
	url := fmt.Sprintf("%s/api/v1/users/%s/verify", c.baseURL, userID)
	
	// Create PUT request
	request, err := http.NewRequest("PUT", url, nil)
	if err != nil {
		return err
	}

	// Set headers
	request.Header.Set("Content-Type", "application/json")

	// Make the request
	resp, err := c.client.Do(request)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	// Check response status
	if resp.StatusCode != http.StatusOK {
		var errorResp struct {
			Success bool   `json:"success"`
			Message string `json:"message"`
			Error   string `json:"error"`
		}
		err = json.NewDecoder(resp.Body).Decode(&errorResp)
		if err != nil {
			return fmt.Errorf("failed to verify user: status %d", resp.StatusCode)
		}
		return fmt.Errorf("failed to verify user: %s", errorResp.Error)
	}

	return nil
}

// UpdateUserPassword updates a user's password in the user service
func (c *UserAPIClient) UpdateUserPassword(userID, hashedPassword string) error {
	// URL for password update
	url := fmt.Sprintf("%s/api/v1/users/%s/password", c.baseURL, userID)
	
	// Prepare request body
	requestBody := struct {
		Password string `json:"password"`
	}{
		Password: hashedPassword,
	}
	
	reqData, err := json.Marshal(requestBody)
	if err != nil {
		return err
	}
	
	// Create PUT request
	request, err := http.NewRequest("PUT", url, bytes.NewBuffer(reqData))
	if err != nil {
		return err
	}

	// Set headers
	request.Header.Set("Content-Type", "application/json")

	// Make the request
	resp, err := c.client.Do(request)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	// Check response status
	if resp.StatusCode != http.StatusOK {
		var errorResp struct {
			Success bool   `json:"success"`
			Message string `json:"message"`
			Error   string `json:"error"`
		}
		err = json.NewDecoder(resp.Body).Decode(&errorResp)
		if err != nil {
			return fmt.Errorf("failed to update password: status %d", resp.StatusCode)
		}
		return fmt.Errorf("failed to update password: %s", errorResp.Error)
	}

	return nil
}
