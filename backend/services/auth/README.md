# SKILL BRIDGE Authentication Service

Authentication microservice for the SKILL BRIDGE platform, handling user registration, authentication, and token management.

## Features

- User registration with email verification
- JWT-based authentication
- Access and refresh token management
- Password reset functionality
- Integration with User Service

## API Endpoints

- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Authenticate and receive tokens
- `POST /api/v1/auth/refresh` - Refresh access token
- `POST /api/v1/auth/logout` - Invalidate tokens
- `GET /api/v1/auth/verify-email/:token` - Verify email address
- `POST /api/v1/auth/forgot-password` - Request password reset
- `POST /api/v1/auth/reset-password` - Reset password with token
- `GET /health` - Service health check

## Configuration

Environment variables:
```
PORT=8082
ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password
DB_NAME=skillbridge_auth
DB_SSL_MODE=disable
REDIS_ADDR=localhost:6379
REDIS_PASSWORD=
REDIS_DB=0
JWT_SECRET=your_jwt_secret_key
ACCESS_TOKEN_EXPIRY=3600
REFRESH_TOKEN_EXPIRY=604800
USER_SERVICE_URL=http://localhost:8081/api/v1
```

## Running the Service

### Local Development
```bash
go run main.go
```

### Using Docker
```bash
docker build -t skillbridge/auth-service .
docker run -p 8082:8082 --env-file .env skillbridge/auth-service
```

## Swagger Documentation

This service includes Swagger/OpenAPI documentation accessible at:
```
http://localhost:8082/swagger/index.html
```

### Generating Swagger Documentation

Make sure to install the Swagger tools:
```bash
go install github.com/swaggo/swag/cmd/swag@latest
```

Generate the documentation:
```bash
# From the backend directory
swag init -g services/auth/main.go -o docs
```

### Swagger Annotations

Endpoints are documented using Go comments. Example:

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

## Project Structure

```
auth/
├── config/             # Configuration
├── handlers/           # HTTP handlers
├── repository/         # Data access
├── service/            # Business logic
├── main.go             # Entry point
├── Dockerfile          # Container definition
└── README.md           # This file
```

## Testing

Running tests:
```bash
go test ./... -v
```

### API Testing

Example cURL commands:

```bash
# Register
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
