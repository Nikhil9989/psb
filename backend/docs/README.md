# Swagger Documentation Setup Guide

This guide will help you properly set up and generate Swagger/OpenAPI documentation for the SKILL BRIDGE microservices.

## Common Issues

When running `swag init`, you might encounter these issues:

1. **"No Go files in directory"**: Running from the wrong directory
2. **"Cannot find type definition"**: Missing model or type reference
3. **"Failed to get package name"**: Incorrect package structure or import

## Correct Usage for Each Service

### Authentication Service

Generate from the service directory (not the backend root):

```bash
cd backend/services/auth
swag init -o ../../docs/auth
```

### User Service

```bash
cd backend/services/user
swag init -o ../../docs/user
```

### API Gateway

```bash
cd backend/services/api-gateway
swag init -o ../../docs/api-gateway
```

## Adding Required Type Definitions

Some Swagger annotations may reference types that need to be explicitly imported:

```go
// For handlers/user_handler.go
import (
    // Other imports...
    "github.com/Nikhil9989/psb/backend/pkg/models" // Ensure this import exists
)

// @Summary Get user by ID
// @Description Get detailed information about a user
// @Tags Users
// @Accept json
// @Produce json
// @Param id path string true "User ID"
// @Success 200 {object} models.APIResponse{data=models.UserResponse} "User found"
// @Failure 400 {object} models.APIResponse "Bad request"
// @Failure 404 {object} models.APIResponse "User not found"
// @Router /users/{id} [get]
```

## Generating Combined Documentation

To generate documentation for all services that gets stored in a central location:

```bash
# Create the combined docs structure
mkdir -p backend/docs/{auth,user,api-gateway}

# Generate for each service
cd backend/services/auth
swag init -o ../../docs/auth

cd ../user
swag init -o ../../docs/user

cd ../api-gateway
swag init -o ../../docs/api-gateway
```

## Setting Up Service to Use Docs

In each service's main.go file, ensure you're importing the correct docs package:

```go
import (
    // Other imports...
    
    // For auth service
    _ "github.com/Nikhil9989/psb/backend/docs/auth"
    swaggerFiles "github.com/swaggo/files"
    ginSwagger "github.com/swaggo/gin-swagger"
)

// In your setup code:
router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
```

## Resolving "Cannot Find Type Definition" Errors

These errors often happen when:

1. The referenced type isn't imported in the file with the Swagger annotation
2. The type exists in another service but isn't accessible

Solution:

1. Make sure all model types are in a shared package (e.g., `backend/pkg/models`)
2. Import this package where Swagger annotations are used 
3. Use fully qualified type names in annotations
4. If needed, create duplicate type definitions in the local service for documentation purposes

## Verifying Documentation Generation

After generating documentation, verify the generated files:

```bash
# Check auth docs
ls -la backend/docs/auth

# Check the content of the main swagger file
cat backend/docs/auth/docs.go
```

## Common Swagger Annotation Patterns

```go
// Service Info (in main.go)
// @title SKILL BRIDGE Authentication Service API
// @description API for user authentication and token management
// @version 1.0
// @host localhost:8082
// @BasePath /api/v1

// Route Annotation (in handlers)
// @Summary Login user
// @Description Authenticate user and return tokens
// @Tags Authentication
// @Accept json
// @Produce json
// @Param request body models.LoginRequest true "Login credentials"
// @Success 200 {object} models.APIResponse{data=models.LoginResponse} "Login successful"
// @Failure 400 {object} models.APIResponse "Invalid request"
// @Failure 401 {object} models.APIResponse "Authentication failed"
// @Router /auth/login [post]
```
