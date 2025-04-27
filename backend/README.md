# SKILL BRIDGE Backend

This is the backend for the SKILL BRIDGE platform, implementing a microservices architecture with Go.

## Architecture

The backend is built as a set of microservices:

1. **API Gateway**: Nginx-based service that routes requests to the appropriate microservice
2. **Authentication Service**: Handles user authentication, JWT token generation, and password management
3. **User Service**: Manages user accounts, profiles, and preferences

## Prerequisites

- Docker and Docker Compose
- Go 1.19 or later (for local development)
- PostgreSQL (optional, for local development without Docker)
- Redis (optional, for local development without Docker)

## Getting Started

### Running with Docker Compose

The easiest way to run the backend is using Docker Compose:

```bash
cd backend
docker-compose up
```

This will start all the required services:
- PostgreSQL database
- Redis cache
- User service (port 8081)
- Authentication service (port 8082)
- API Gateway (port 8080)

### Local Development

To run services locally for development:

1. Set up the database:

```bash
# Install PostgreSQL (if not using Docker)
# Create the skillbridge_auth database
psql -U postgres -c "CREATE DATABASE skillbridge_auth;"

# Run database initialization script
psql -U postgres -d skillbridge_auth -f scripts/db_init.sql
```

2. Set environment variables (or create a .env file in each service directory):

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=skillbridge_auth
DB_SSL_MODE=disable
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
JWT_SECRET=your_jwt_secret_key_change_this_in_production
USER_SERVICE_URL=http://localhost:8081
```

3. Run the user service:

```bash
cd services/user
go run main.go
```

4. Run the authentication service:

```bash
cd services/auth
go run main.go
```

## API Documentation

Swagger documentation is available at:
- User Service: http://localhost:8081/swagger/index.html
- Auth Service: http://localhost:8082/swagger/index.html

When running through the API Gateway:
- User Service: http://localhost:8080/api/v1/users/swagger/index.html
- Auth Service: http://localhost:8080/api/v1/auth/swagger/index.html

## Authentication Flow

### Registration

```
POST /api/v1/auth/register
```

Request body:
```json
{
  "email": "user@example.com",
  "password": "SecureP@ssw0rd",
  "first_name": "John",
  "last_name": "Doe",
  "role": "student",
  "phone_number": "+1234567890"
}
```

### Login

```
POST /api/v1/auth/login
```

Request body:
```json
{
  "email": "user@example.com",
  "password": "SecureP@ssw0rd"
}
```

This will return:
- Access token (short-lived)
- Refresh token (longer-lived)
- User information

### Refreshing Tokens

```
POST /api/v1/auth/refresh
```

Request body:
```json
{
  "refresh_token": "your-refresh-token"
}
```

### Logout

```
POST /api/v1/auth/logout
```

Request body:
```json
{
  "refresh_token": "your-refresh-token"
}
```

## Database Schema

### Users Table

Stores user accounts:

- `id`: UUID primary key
- `email`: Unique email address
- `password`: Hashed password
- `first_name`: User's first name
- `last_name`: User's last name
- `role`: User's role (student, mentor, admin)
- `is_verified`: Whether the email is verified
- `phone_number`: Optional phone number
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp

### Verification Tokens Table

Stores tokens for email verification and password reset:

- `token`: Unique token string (primary key)
- `user_id`: References users.id
- `type`: Token type (email_verification, password_reset)
- `expires_at`: Expiration timestamp
- `created_at`: Creation timestamp

### User Profiles Table

Stores additional user information:

- `user_id`: References users.id (primary key)
- `bio`: User bio/description
- `profile_image_url`: URL to profile image
- `location`: User's location
- `social_links`: JSON of social media links
- `skills`: JSON of skills and proficiency
- `interests`: JSON of interest areas
- `education`: JSON of education history
- `experience`: JSON of work experience
- `preferred_learning_style`: Learning style preference
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp

### User Preferences Table

Stores user application preferences:

- `user_id`: References users.id (primary key)
- `email_notifications`: Whether to receive email notifications
- `sms_notifications`: Whether to receive SMS notifications
- `push_notifications`: Whether to receive push notifications
- `language`: Preferred language
- `theme`: UI theme preference
- `timezone`: User's timezone
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp

## Troubleshooting

### Common Issues

1. **Database connection errors**:
   - Check that PostgreSQL is running and accessible
   - Verify the database credentials in environment variables
   - Ensure the database and tables have been created

2. **Redis connection errors**:
   - Check that Redis is running and accessible
   - Verify the Redis connection details

3. **Service communication errors**:
   - Verify that all services are running
   - Check the USER_SERVICE_URL environment variable in the auth service

### Docker Issues

1. **Container not starting**:
   - Check container logs: `docker logs skillbridge_auth_service`
   - Ensure ports are not in use by other applications

2. **Database initialization issues**:
   - The initialization script runs only on the first start
   - To force reinitialization: `docker-compose down -v`

## Development Guidelines

1. **Service Structure**:
   - `handlers`: HTTP request handlers
   - `service`: Business logic
   - `repository`: Data access layer
   - `main.go`: Service entry point

2. **Error Handling**:
   - Use consistent error responses
   - Don't expose sensitive information in errors

3. **Environment Variables**:
   - Use environment variables for configuration
   - Provide sensible defaults

4. **API Design**:
   - Follow RESTful conventions
   - Document APIs with Swagger
   - Use consistent response formats
