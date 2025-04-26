package proxy

import (
	"bytes"
	"io"
	"net/http"
	"net/http/httputil"
	"net/url"
	"strings"

	"github.com/gin-gonic/gin"
)

// ServiceProxy handles proxying requests to the appropriate service
type ServiceProxy struct {
	ServiceURL string
}

// NewServiceProxy creates a new ServiceProxy
func NewServiceProxy(serviceURL string) *ServiceProxy {
	return &ServiceProxy{ServiceURL: serviceURL}
}

// ProxyRequest returns a Gin handler that proxies the request to the service
func (p *ServiceProxy) ProxyRequest(path string) gin.HandlerFunc {
	return func(c *gin.Context) {
		// Parse the service URL
		targetURL, err := url.Parse(p.ServiceURL)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to parse service URL"})
			return
		}

		// Create reverse proxy
		proxy := httputil.NewSingleHostReverseProxy(targetURL)

		// Get the path from the original request
		originalPath := c.Request.URL.Path
		
		// Replace placeholder parameter names in the target path
		targetPath := path
		for _, param := range c.Params {
			targetPath = strings.Replace(targetPath, ":"+param.Key, param.Value, 1)
		}

		// Prepare the target request
		targetReq := new(http.Request)
		*targetReq = *c.Request
		targetReq.URL, err = url.Parse(targetURL.String() + targetPath)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to construct target URL"})
			return
		}

		// Add query parameters
		targetReq.URL.RawQuery = c.Request.URL.RawQuery

		// Preserve request body if needed
		var bodyBytes []byte
		if c.Request.Body != nil {
			bodyBytes, _ = io.ReadAll(c.Request.Body)
			c.Request.Body = io.NopCloser(bytes.NewBuffer(bodyBytes))
			targetReq.Body = io.NopCloser(bytes.NewBuffer(bodyBytes))
			targetReq.ContentLength = int64(len(bodyBytes))
		}

		// Preserve authentication header
		if authHeader := c.GetHeader("Authorization"); authHeader != "" {
			targetReq.Header.Set("Authorization", authHeader)
		}

		// Forward additional headers if needed
		targetReq.Header.Set("Content-Type", c.GetHeader("Content-Type"))
		targetReq.Header.Set("X-Forwarded-For", c.ClientIP())
		targetReq.Header.Set("X-Original-Path", originalPath)

		// Forward user ID and role from JWT token if available
		if userID, exists := c.Get("user_id"); exists {
			targetReq.Header.Set("X-User-ID", userID.(string))
		}
		if role, exists := c.Get("role"); exists {
			targetReq.Header.Set("X-User-Role", role.(string))
		}

		// Create a response recorder to capture the response
		respWriter := &responseWriter{ResponseWriter: c.Writer}

		// Execute the proxy request
		proxy.ServeHTTP(respWriter, targetReq)

		// Set the status code from the proxied response
		c.Status(respWriter.statusCode)
	}
}

// responseWriter is a wrapper around gin.ResponseWriter to capture the status code
type responseWriter struct {
	gin.ResponseWriter
	statuscode int
}

// WriteHeader captures the status code
func (r *responseWriter) WriteHeader(code int) {
	r.statusCode = code
	r.ResponseWriter.WriteHeader(code)
}

// Write captures the response body
func (r *responseWriter) Write(b []byte) (int, error) {
	return r.ResponseWriter.Write(b)
}
