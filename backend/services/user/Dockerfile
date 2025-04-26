FROM golang:1.20-alpine AS builder

WORKDIR /app

# Copy the Go Modules manifests
COPY backend/go.mod backend/go.mod
COPY backend/go.sum backend/go.sum

# Set the working directory to the location of the go.mod file
WORKDIR /app/backend

# Download dependencies
RUN go mod download

# Copy the source code
COPY backend/pkg/ /app/backend/pkg/
COPY backend/services/user/ /app/backend/services/user/

# Build the binary
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o user-service /app/backend/services/user/

# Use a smaller image for the final container
FROM alpine:latest
RUN apk --no-cache add ca-certificates

WORKDIR /app

# Copy the binary from the builder stage
COPY --from=builder /app/backend/user-service /app/

# Set environment variables
ENV PORT=8081
ENV GIN_MODE=release

# Expose the port
EXPOSE 8081

# Run the service
CMD ["/app/user-service"]
