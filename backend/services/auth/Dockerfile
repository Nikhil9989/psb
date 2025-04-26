FROM golang:1.21-alpine AS builder

# Set working directory for the build
WORKDIR /app

# Copy the entire backend directory
COPY backend/ /app/backend/

# Set working directory for Go Modules
WORKDIR /app/backend

# Clean any existing modules and download dependencies
RUN go clean -modcache && go mod download

# Build the binary with proper path
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o /app/auth-service ./services/auth

# Use a smaller image for the final container
FROM alpine:latest

# Add necessary certificates and timezone data
RUN apk --no-cache add ca-certificates tzdata

WORKDIR /app

# Copy the binary from the builder stage
COPY --from=builder /app/auth-service /app/

# Set environment variables
ENV PORT=8082
ENV GIN_MODE=release

# Expose the port
EXPOSE 8082

# Run the service
CMD ["/app/auth-service"]
