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

### Generate Swagger Documentation

The easiest way to generate Swagger documentation is using the included shell script:

```bash
# From the backend directory
chmod +x swagger.sh
./swagger.sh
```

This script:
1. Creates a temporary `swagger-models` directory with all required model definitions
2. Creates necessary wrapper files for each service
3. Runs the `swag` command with appropriate parameters for each service
4. Places the generated docs in the correct locations

If you prefer to run the commands manually:

```bash
# Install swag tool if not already installed
go install github.com/swaggo/swag/cmd/swag@latest

# Create swagger-models directory with model definitions
# See swagger.sh for the contents to put in ./swagger-models/models.go

# Generate docs for each service
swag init -g services/auth/main.go -d ./services/auth,./swagger-models -o services/auth/docs
swag init -g services/user/main.go -d ./services/user,./swagger-models -o services/user/docs
swag init -g services/api-gateway/main.go -d ./services/api-gateway,./swagger-models -o services/api-gateway/docs
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

## Troubleshooting Swagger Generation

If you encounter issues with Swagger generation:

1. Make sure the `swag` tool is installed and in your PATH:
   ```bash
   go install github.com/swaggo/swag/cmd/swag@latest
   ```

2. Run the provided script which creates all necessary files:
   ```bash
   ./swagger.sh
   ```

3. Check that each service has imports for the Swagger UI:
   ```go
   import (
       // Swagger documentation
       _ "github.com/Nikhil9989/psb/backend/services/auth/docs" // Replace with appropriate service
       swaggerFiles "github.com/swaggo/files"
       ginSwagger "github.com/swaggo/gin-swagger"
   )
   ```

4. Ensure handler functions have proper Swagger annotations
