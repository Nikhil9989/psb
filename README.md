# SKILL BRIDGE

SKILL BRIDGE is an innovative domain-based learning platform designed to bridge the gap between theoretical education and practical industry skills. The platform focuses on providing a comprehensive learning experience through integrated domain learning, particularly targeting students in tier-2 and tier-3 cities in India.

## Key Features

- **Domain-Based Progressive Learning**: Learn complete domains instead of isolated technologies through our progressive 0→70→90% mastery approach.
- **Hybrid Learning Model**: Combine online content with physical infrastructure through institutional partnerships in tier-2/3 cities.
- **Project-Based Learning**: Apply skills to real-world projects that integrate multiple technologies for practical experience.
- **Industry Alignment**: Curriculum constantly validated against industry needs with capstone projects reviewed by hiring managers.
- **1:1 Mentorship**: Personalized guidance from industry experts to accelerate learning and career development.
- **Flexible Payment Models**: Choose from subscription-based or Income Sharing Agreements (ISA) to make quality education accessible.

## Project Structure

The project is divided into two main components:

1. **Frontend**: Next.js application (React + TypeScript)
2. **Backend**: Microservices architecture built with Go

### Directory Structure

```
/
├── app/                   - Next.js frontend application
├── backend/               - Go-based microservices
│   ├── pkg/               - Shared packages
│   ├── scripts/           - Setup and utility scripts
│   ├── services/          - Microservice implementations
│   │   ├── api-gateway/   - API Gateway service
│   │   ├── auth/          - Authentication service
│   │   └── user/          - User management service
│   └── docker-compose.yml - Docker configuration
├── middleware.ts          - Next.js authentication middleware
└── package.json           - Frontend dependencies
```

## Technologies Used

### Frontend
- **Next.js**: React framework for server-side rendering and static site generation
- **React**: Frontend library for building user interfaces
- **TypeScript**: Static typing for safer code development
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Framer Motion**: Animation library for React
- **Lucide React**: Icon library for React applications
- **Axios**: Promise-based HTTP client for API requests

### Backend
- **Go**: Programming language for backend services
- **Gin**: Web framework for building APIs
- **JWT**: JSON Web Tokens for authentication
- **PostgreSQL**: Relational database for user data
- **Redis**: In-memory data store for caching and token management
- **Docker**: Containerization for consistent development and deployment

## Setup and Installation

### Prerequisites

- Node.js 18.x or later
- Go 1.19 or later
- Docker and Docker Compose
- PostgreSQL (or use the Docker container)
- Redis (or use the Docker container)

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Nikhil9989/psb.git
   cd psb
   ```

2. Install dependencies:
   ```bash
   # Use the installation script to handle dependency issues
   bash install.sh

   # OR for manual installation:
   # Remove existing node_modules and package-lock.json
   rm -rf node_modules package-lock.json
   # Install dependencies
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8082
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a database initialization script:
   ```bash
   mkdir -p scripts
   ```

   Create a file `scripts/init-db.sh` with the following content:
   ```bash
   #!/bin/bash
   set -e

   # Create the databases
   psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
       CREATE DATABASE skillbridge_user;
       CREATE DATABASE skillbridge_auth;
       
       GRANT ALL PRIVILEGES ON DATABASE skillbridge_user TO postgres;
       GRANT ALL PRIVILEGES ON DATABASE skillbridge_auth TO postgres;
   EOSQL
   ```

   Make the script executable:
   ```bash
   chmod +x scripts/init-db.sh
   ```

3. Start the backend services using Docker Compose:
   ```bash
   docker-compose down -v  # Remove any existing containers and volumes
   docker-compose up       # Start all services
   ```

4. The backend services will be available at:
   - API Gateway: [http://localhost:8080](http://localhost:8080)
   - Authentication Service: [http://localhost:8082](http://localhost:8082)
   - User Service: [http://localhost:8081](http://localhost:8081)

## Authentication Features

The platform includes a complete authentication system with the following features:

- **User Registration**: Create a new account with email verification
- **Login**: Authenticate with email and password
- **JWT-based Authentication**: Secure API access with JSON Web Tokens
- **Token Refresh**: Automatically refresh access tokens
- **Password Reset**: Reset forgotten passwords via email
- **Protected Routes**: Secure pages that require authentication
- **Role-based Access Control**: Different permissions for students, mentors, and admins

### Using Authentication

1. **Register a new account**:
   - Navigate to `/signup`
   - Fill in the registration form
   - Submit to create your account
   - Check your email for verification (simulated in development)

2. **Login to your account**:
   - Navigate to `/login`
   - Enter your email and password
   - Access your dashboard after successful login

3. **Protected Areas**:
   - `/dashboard`: View your learning progress
   - `/profile`: Manage your account settings
   - `/curriculum`: Access course materials

4. **Password Reset**:
   - Click "Forgot Password?" on the login page
   - Enter your email address
   - Follow the reset link sent to your email

## Development Workflow

### Frontend Development

1. Create or modify components in the `app/components` directory
2. Add pages in the appropriate directory under `app/`
3. Use the authentication context for protected routes:
   ```jsx
   'use client';
   
   import { useAuth } from '@/hooks/useAuth';
   import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
   
   export default function ProtectedPage() {
     return (
       <ProtectedRoute>
         <div>This content is only visible to authenticated users</div>
       </ProtectedRoute>
     );
   }
   ```

4. Make API requests using the provided hooks:
   ```jsx
   import { useApiProtected } from '@/hooks/useApiProtected';
   
   export function YourComponent() {
     const apiClient = useApiProtected();
     
     const fetchData = async () => {
       const response = await apiClient.get('/api/v1/some-endpoint');
       // Handle the response
     };
     
     return <button onClick={fetchData}>Fetch Data</button>;
   }
   ```

### Backend Development

1. Each service is structured with:
   - `handlers`: HTTP request handlers
   - `service`: Business logic
   - `repository`: Data access layer
   - `main.go`: Service entry point

2. Use the provided middleware for authentication:
   ```go
   import "github.com/Nikhil9989/psb/backend/pkg/middleware"
   
   func setupRoutes(router *gin.Engine) {
       // Public routes
       public := router.Group("/api/v1")
       {
           public.POST("/auth/login", authHandler.Login)
           public.POST("/auth/register", authHandler.Register)
       }
       
       // Protected routes
       protected := router.Group("/api/v1")
       protected.Use(middleware.AuthMiddleware(config.JWT.Secret))
       {
           protected.GET("/users/me", userHandler.GetCurrentUser)
           protected.PUT("/users/me", userHandler.UpdateCurrentUser)
       }
   }
   ```

3. Test API endpoints:
   - Use Postman or curl to test endpoints
   - Example login request:
     ```bash
     curl -X POST http://localhost:8082/api/v1/auth/login \
       -H "Content-Type: application/json" \
       -d '{"email":"test@example.com","password":"yourpassword"}'
     ```

## Building for Production

### Frontend

```bash
npm run build
```

The build output will be generated in the `out` directory.

### Backend

Build the Docker containers with production settings:

```bash
cd backend
docker-compose -f docker-compose.prod.yml build
```

## Deployment

### Frontend

For automatic deployment to GitHub Pages, you can set up a GitHub Actions workflow:

1. Create a `.github/workflows/deploy.yml` file
2. Add the workflow configuration as described in the original README

### Backend

Deploy the backend services to your preferred cloud provider:

1. Push Docker images to a registry
2. Deploy containers using Kubernetes, Docker Swarm, or cloud-specific services
3. Set up proper environment variables for production

## Troubleshooting

### Frontend Issues

1. **Authentication errors**:
   - Check if the backend services are running
   - Verify that environment variables are set correctly
   - Check browser console for API errors

2. **Build errors**:
   - Make sure all dependencies are installed
   - Check for TypeScript errors
   - Ensure components are properly imported

### Backend Issues

1. **Database connection errors**:
   - Verify PostgreSQL and Redis are running
   - Check connection parameters in environment variables
   - Ensure databases are properly initialized

2. **JWT token issues**:
   - Check that JWT_SECRET is set
   - Verify token expiry times are properly formatted (e.g., "24h")
   - Ensure clocks are synchronized between services

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions and support, please open an issue on the GitHub repository.