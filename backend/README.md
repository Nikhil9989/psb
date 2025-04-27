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

To generate the Swagger documentation correctly:

1. Install the required tools:
```bash
go install github.com/swaggo/swag/cmd/swag@latest
```

2. Generate documentation using the centralized swagger models:
```bash
# From the backend directory

# For Auth Service - important to include the root directory for swagger.go
swag init -g services/auth/main.go -d ./ -o services/auth/docs

# For User Service
swag init -g services/user/main.go -d ./ -o services/user/docs

# For API Gateway
swag init -g services/api-gateway/main.go -d ./ -o services/api-gateway/docs
```

3. Each service should import the docs in their main.go:
```go
import (
    // Swagger documentation
    _ "github.com/Nikhil9989/psb/backend/services/auth/docs"
    swaggerFiles "github.com/swaggo/files"
    ginSwagger "github.com/swaggo/gin-swagger"
)
```

For more detailed instructions and common issue solutions, see the [Swagger Documentation README](./docs/README.md).

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

## Troubleshooting Swagger Generation

If you encounter issues with Swagger generation:

1. **Type Definition Not Found Error**
   - Check that you're including the root directory in your `-d` flag to find the swagger.go file
   - Ensure all model types are defined in swagger.go with proper tags
   - Make sure handlers are properly importing the packages with model definitions

2. **No Go Files Error**
   - This warning about the root directory is expected and can be ignored as long as the service-specific directories are found

3. **General Swagger Issues**
   - Check that all handler functions have proper Swagger annotations
   - Ensure the main.go file has the correct Swagger configuration header
   - Verify that all dependencies are properly imported
