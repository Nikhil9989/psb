FROM golang:1.20-alpine AS builder

WORKDIR /app

# Copy the Go Modules manifests
COPY go.mod go.mod
COPY go.sum go.sum

# Download dependencies
RUN go mod download

# Copy the source code
COPY pkg/ /app/pkg/
COPY services/api-gateway/ /app/services/api-gateway/

# Build the binary
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o api-gateway /app/services/api-gateway/

# Use a smaller image for the final container
FROM alpine:latest
RUN apk --no-cache add ca-certificates

WORKDIR /app

# Copy the binary from the builder stage
COPY --from=builder /app/api-gateway /app/

# Set environment variables
ENV PORT=8080
ENV GIN_MODE=release
ENV USER_SERVICE_URL=http://user-service:8081
ENV AUTH_SERVICE_URL=http://auth-service:8082

# Expose the port
EXPOSE 8080

# Run the service
CMD ["/app/api-gateway"]
