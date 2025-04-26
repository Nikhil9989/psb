FROM golang:1.20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy go.mod and go.sum files
COPY backend/go.mod backend/go.sum ./

# Download dependencies
RUN go mod download

# Copy source code
COPY backend/pkg/ ./pkg/
COPY backend/services/auth/ ./services/auth/

# Build the binary
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
