FROM golang:1.20-alpine AS builder

# Set working directory for the build
WORKDIR /app

# Copy the entire backend directory
COPY ./ /app/

# Set working directory for Go Modules
WORKDIR /app/


# Install required dependencies explicitly
RUN go get github.com/gin-gonic/gin
RUN go get github.com/golang-jwt/jwt/v5
RUN go get github.com/joho/godotenv
RUN go get github.com/lib/pq
RUN go get github.com/redis/go-redis/v9
RUN go get golang.org/x/crypto/bcrypt

# Run go mod tidy to ensure go.sum is properly updated
RUN go mod tidy

RUN ls -la /app
RUN ls -la /app/services/user

# Build the binary with proper path
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o /app/user-service ./services/user

# Use a smaller image for the final container
FROM alpine:latest

# Add necessary certificates and timezone data
RUN apk --no-cache add ca-certificates tzdata

WORKDIR /app

# Copy the binary from the builder stage
COPY --from=builder /app/user-service /app/

# Set environment variables
ENV PORT=8081
ENV GIN_MODE=release

# Expose the port
EXPOSE 8081

# Run the service
CMD ["/app/user-service"]
