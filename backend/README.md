# SKILL BRIDGE Backend

This directory contains the backend microservices for the SKILL BRIDGE platform. The backend is built using a microservices architecture with services written in Go.

## Architecture

The backend follows a microservices architecture with the following components:

- **API Gateway**: Central entry point that routes requests to appropriate microservices
- **User Service**: Manages user profiles, preferences, and role-based access control
- **Authentication Service**: Handles user authentication, JWT token management, and security
- **Database**: PostgreSQL for structured data storage
- **Cache**: Redis for session management and caching

## Services

### API Gateway (Port 8080)
- Routes requests to appropriate services
- Handles authentication verification
- Implements role-based access control
- Proxies requests to microservices

### User Service (Port 8081)
- Manages user accounts and profiles
- Handles user data operations
- Stores user preferences
- Implements role management

### Authentication Service (Port 8082)
- Handles user registration and login
- Issues and validates JWT tokens
- Manages refresh tokens
- Handles password reset and email verification

## Getting Started

### Prerequisites

- Go 1.20 or higher
- Docker and Docker Compose
- PostgreSQL
- Redis

### Running Locally with Docker Compose

The easiest way to run the backend is using Docker Compose:

```bash
# Navigate to the backend directory
cd backend

# Start all services
docker-compose up -d
```

This will start all services, PostgreSQL, and Redis with the proper configurations.

### Running Individual Services Locally

To run services individually:

```bash
# User Service
cd services/user
go run main.go

# Auth Service
cd services/auth
go run main.go

# API Gateway
cd services/api-gateway
go run main.go
```

## API Documentation

### Swagger Documentation

All services are documented using Swagger/OpenAPI. Once services are running, you can access the Swagger UI at:

- Authentication Service: `http://localhost:8082/swagger/index.html`
- User Service: `http://localhost:8081/swagger/index.html`
- API Gateway: `http://localhost:8080/swagger/index.html`

### Swagger Setup and Generation

This project uses [gin-swagger](https://github.com/swaggo/gin-swagger) to generate API documentation.

#### Installing Swagger Tools

```bash
# Install swag CLI
go install github.com/swaggo/swag/cmd/swag@latest

# Ensure $GOPATH/bin is in your PATH
export PATH=$PATH:$(go env GOPATH)/bin
```

#### Generating Swagger Documentation

Generate documentation for each service:

```bash
# Generate documentation for Auth Service
cd backend
swag init -g services/auth/main.go -o docs

# Generate documentation for User Service
swag init -g services/user/main.go -o docs

# Generate documentation for API Gateway
swag init -g services/api-gateway/main.go -o docs
```

#### Adding Swagger Annotations

Swagger annotations are added as comments in the code. Here's an example:

```go
// @title SKILL BRIDGE Authentication Service API
// @description API for user authentication and token management
// @version 1.0
// @host localhost:8082
// @BasePath /api/v1
// @schemes http https
// @securityDefinitions.apikey BearerAuth
// @in header
// @name Authorization

// For endpoints:
// @Summary Register a new user
// @Description Creates a new user account and sends email verification
// @Tags Authentication
// @Accept json
// @Produce json
// @Param request body models.CreateUserRequest true "User registration details"
// @Success 201 {object} models.APIResponse "User registered successfully"
// @Failure 400 {object} models.APIResponse "Invalid request"
// @Router /auth/register [post]
```

### Authentication API

- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Authenticate a user and get tokens
- `POST /api/v1/auth/refresh` - Refresh an access token
- `POST /api/v1/auth/logout` - Log out a user
- `GET /api/v1/auth/verify-email/:token` - Verify a user's email
- `POST /api/v1/auth/forgot-password` - Request a password reset
- `POST /api/v1/auth/reset-password` - Reset password with token

### User API

- `GET /api/v1/users` - Get all users (admin only)
- `POST /api/v1/users` - Create a new user (admin only)
- `GET /api/v1/users/:id` - Get a specific user
- `PUT /api/v1/users/:id` - Update a user
- `DELETE /api/v1/users/:id` - Delete a user (admin only)
- `GET /api/v1/users/:id/profile` - Get user profile
- `PUT /api/v1/users/:id/profile` - Update user profile
- `GET /api/v1/users/:id/preferences` - Get user preferences
- `PUT /api/v1/users/:id/preferences` - Update user preferences

## Testing the API

### Using Swagger UI

1. Start the service
2. Open the Swagger UI at the appropriate URL (e.g., `http://localhost:8082/swagger/index.html` for auth service)
3. Use the interactive documentation to test endpoints

### Using cURL

Examples for testing the authentication service:

```bash
# Register a new user
curl -X POST http://localhost:8082/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123",
    "first_name": "John",
    "last_name": "Doe",
    "role": "student"
  }'

# Login
curl -X POST http://localhost:8082/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

## Development Guidelines

- Follow Go best practices and project structure
- Write unit tests for critical functionality
- Document all APIs using OpenAPI standards
- Implement proper error handling and logging
- Update Swagger documentation when changing API endpoints
