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

## Development Guidelines

- Follow Go best practices and project structure
- Write unit tests for critical functionality
- Document all APIs using OpenAPI standards
- Implement proper error handling and logging
