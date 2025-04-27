# SKILL BRIDGE API Documentation

This directory contains Swagger/OpenAPI documentation for the SKILL BRIDGE microservices.

## Generating Documentation

### Prerequisites

Install the Swagger command-line tool:

```bash
go install github.com/swaggo/swag/cmd/swag@latest
```

Ensure the binary is in your PATH:

```bash
export PATH=$PATH:$(go env GOPATH)/bin
```

### Generate Documentation for Each Service

From the root `backend` directory:

```bash
# Generate documentation for Auth Service with output to shared docs directory
swag init -g services/auth/main.go -o docs --pd

# Generate documentation for User Service with output to shared docs directory
swag init -g services/user/main.go -o docs --pd

# Generate documentation for API Gateway with output to shared docs directory
swag init -g services/api-gateway/main.go -o docs --pd
```

### Common Issues and Solutions

1. **Package Not Found Errors**:
   - Ensure all necessary model imports are added to each service's docs.go file
   - Example (in auth/docs.go):
     ```go
     // Import references to model packages to make them available to Swagger
     _ "github.com/Nikhil9989/psb/backend/pkg/models"
     ```

2. **Model Definition Not Found**:
   - Use the `--pd` flag to parse dependencies
   - Use `-d` to specify additional directories to scan for model definitions

3. **No Go Files in Directory Error**:
   - Explicitly specify the service directory path
   - Example: `swag init -g services/auth/main.go -d ./services/auth -o docs`

## API Documentation by Service

### Authentication Service (Port 8082)

Swagger UI: http://localhost:8082/swagger/index.html

Handles user authentication and token management:
- User registration with email verification
- Login and token issuing
- Token refresh and revocation
- Password reset functionality

### User Service (Port 8081)

Swagger UI: http://localhost:8081/swagger/index.html

Manages user data and profiles:
- User information management
- User profile operations
- User preferences
- Role-based permissions

### API Gateway (Port 8080)

Swagger UI: http://localhost:8080/swagger/index.html

Central entry point for all services:
- Request routing
- Authentication validation
- Rate limiting
- Response caching

## Manual Testing with cURL

Examples of testing the authentication API:

```bash
# Register a new user
curl -X POST http://localhost:8082/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "first_name": "Test",
    "last_name": "User",
    "role": "student"
  }'

# Login
curl -X POST http://localhost:8082/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

## Models

Common models are defined in the `backend/pkg/models` package for consistency across services:
- Authentication-related models
- User profile models
- API response models

## Adding Swagger Annotations

Example annotations for handlers:

```go
// @Summary Register a new user
// @Description Creates a new user account and sends email verification
// @Tags Authentication
// @Accept json
// @Produce json
// @Param request body models.CreateUserRequest true "User registration details"
// @Success 201 {object} models.APIResponse "User registered successfully"
// @Failure 400 {object} models.APIResponse "Invalid request"
// @Failure 500 {object} models.APIResponse "Failed to register user"
// @Router /auth/register [post]
func (h *AuthHandler) Register(c *gin.Context) {
    // Implementation...
}
```
