#!/bin/bash

# Remove existing node_modules if present
if [ -d "node_modules" ]; then
  echo "Removing existing node_modules..."
  rm -rf node_modules
fi

# Remove package-lock.json if present
if [ -f "package-lock.json" ]; then
  echo "Removing existing package-lock.json..."
  rm -f package-lock.json
fi

# Install dependencies with npm install
echo "Installing dependencies with npm install..."
npm install

echo "Installation completed successfully!"
