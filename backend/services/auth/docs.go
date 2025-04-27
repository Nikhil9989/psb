// Package auth SKILL BRIDGE Authentication Service
//
// Documentation for Authentication Service API
//
//	Schemes: http, https
//	BasePath: /api/v1
//	Version: 1.0.0
//
//	Consumes:
//	- application/json
//
//	Produces:
//	- application/json
//
//	SecurityDefinitions:
//	  BearerAuth:
//	    type: apiKey
//	    name: Authorization
//	    in: header
//
// swagger:meta
package main

import (
	// Import references to model packages to make them available to Swagger
	_ "github.com/Nikhil9989/psb/backend/pkg/models"
)
