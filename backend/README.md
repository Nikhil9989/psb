# SKILL BRIDGE Backend

This directory contains the backend microservices for the SKILL BRIDGE platform. The backend is built using a microservices architecture with services written in Go.

## Services

- **User Service**: Manages user profiles, preferences, and role-based access control
- **Authentication Service**: Handles user authentication, JWT token management, and security

## Getting Started

### Prerequisites

- Go 1.20 or higher
- Docker and Docker Compose
- PostgreSQL
- Redis

### Running Locally

```bash
# Start all services with Docker Compose
docker-compose up -d

# Or run individual services
cd services/user
go run main.go
```

## Architecture

The backend follows a microservices architecture with the following components:

- **API Gateway**: Entry point for client requests with authentication and routing
- **Services**: Independent microservices handling specific domain functionality
- **Database**: PostgreSQL for structured data storage
- **Cache**: Redis for session management and caching

## Development Guidelines

- Follow Go best practices and project structure
- Write unit tests for critical functionality
- Document all APIs using OpenAPI/Swagger
- Implement proper error handling and logging
