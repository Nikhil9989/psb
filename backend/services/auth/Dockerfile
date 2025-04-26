FROM golang:1.20-alpine AS builder

WORKDIR /app

# Copy the Go Modules manifests
COPY backend/go.mod backend/go.mod
COPY backend/go.sum backend/go.sum

# Set Working Directory for Go Modules
WORKDIR /app/backend

# Download dependencies
RUN go mod download

# Go back to root directory
WORKDIR /app

# Copy the source code
COPY backend/pkg/ /app/backend/pkg/
COPY backend/services/auth/ /app/backend/services/auth/

# Build the binary
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o auth-service /app/backend/services/auth/

# Use a smaller image for the final container
FROM alpine:latest
RUN apk --no-cache add ca-certificates

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
