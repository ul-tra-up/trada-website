#!/bin/bash

# Trada Website — Sanity Setup Script
# This script automates the initial setup of the Sanity CMS integration

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
print_header() {
    echo -e "\n${BLUE}======================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}======================================${NC}\n"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

# Check if Node.js is installed
print_header "Step 1: Checking Node.js Installation"

if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v)
print_success "Node.js found: $NODE_VERSION"

if ! command -v npm &> /dev/null; then
    print_error "npm is not installed"
    exit 1
fi

NPM_VERSION=$(npm -v)
print_success "npm found: $NPM_VERSION"

# Check if in correct directory
print_header "Step 2: Verifying Project Directory"

if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

PROJECT_NAME=$(grep '"name"' package.json | head -1 | awk -F'"' '{print $4}')
print_success "Project found: $PROJECT_NAME"

# Install dependencies
print_header "Step 3: Installing Dependencies"

if [ -d "node_modules" ]; then
    print_warning "node_modules already exists. Skipping npm install."
    echo "Run 'npm install' manually if you need to update dependencies."
else
    print_info "Running npm install..."
    npm install
    print_success "Dependencies installed"
fi

# Check if .env.local exists
print_header "Step 4: Configuring Environment Variables"

if [ -f ".env.local" ]; then
    print_warning ".env.local already exists"
    read -p "Do you want to reconfigure it? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_info "Skipping .env.local configuration"
        exit 0
    fi
fi

if [ ! -f ".env.example" ]; then
    print_error ".env.example not found"
    exit 1
fi

print_info "Please provide your Sanity project credentials."
print_info "You can find these at https://www.sanity.io/manage"
echo

# Prompt for Sanity Project ID
read -p "Enter your Sanity Project ID: " SANITY_PROJECT_ID
if [ -z "$SANITY_PROJECT_ID" ]; then
    print_error "Sanity Project ID cannot be empty"
    exit 1
fi

# Prompt for Sanity API Token
read -sp "Enter your Sanity API Token (Editor permissions): " SANITY_API_TOKEN
echo
if [ -z "$SANITY_API_TOKEN" ]; then
    print_error "Sanity API Token cannot be empty"
    exit 1
fi

# Prompt for Customer.io credentials (optional)
read -p "Enter Customer.io Site ID (leave blank to skip): " CUSTOMERIO_SITE_ID
read -sp "Enter Customer.io API Key (leave blank to skip): " CUSTOMERIO_API_KEY
echo

# Prompt for Google Analytics ID (optional)
read -p "Enter Google Analytics Measurement ID (G-XXXXXXXXXX) (leave blank to skip): " GA_MEASUREMENT_ID

# Prompt for URLs
read -p "Enter your main site URL (default: https://trada.io): " SITE_URL
SITE_URL=${SITE_URL:-https://trada.io}

read -p "Enter your app URL (default: https://app.trada.io): " APP_URL
APP_URL=${APP_URL:-https://app.trada.io}

# Create .env.local from .env.example
print_header "Step 5: Creating .env.local"

cp .env.example .env.local
print_success "Copied .env.example to .env.local"

# Function to update environment variable
update_env() {
    local key=$1
    local value=$2
    local file=".env.local"

    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        sed -i '' "s|^${key}=.*|${key}=${value}|" "$file"
    else
        # Linux
        sed -i "s|^${key}=.*|${key}=${value}|" "$file"
    fi
}

# Update environment variables
update_env "NEXT_PUBLIC_SANITY_PROJECT_ID" "$SANITY_PROJECT_ID"
update_env "SANITY_API_TOKEN" "$SANITY_API_TOKEN"
update_env "NEXT_PUBLIC_SITE_URL" "$SITE_URL"
update_env "NEXT_PUBLIC_APP_URL" "$APP_URL"

if [ -n "$CUSTOMERIO_SITE_ID" ]; then
    update_env "CUSTOMERIO_SITE_ID" "$CUSTOMERIO_SITE_ID"
    update_env "NEXT_PUBLIC_CUSTOMERIO_SITE_ID" "$CUSTOMERIO_SITE_ID"
fi

if [ -n "$CUSTOMERIO_API_KEY" ]; then
    update_env "CUSTOMERIO_API_KEY" "$CUSTOMERIO_API_KEY"
fi

if [ -n "$GA_MEASUREMENT_ID" ]; then
    update_env "NEXT_PUBLIC_GA_MEASUREMENT_ID" "$GA_MEASUREMENT_ID"
fi

print_success "Environment variables configured"

# Verify Sanity connection
print_header "Step 6: Verifying Sanity Connection"

print_info "Testing Sanity API connection..."

# Use curl to test Sanity API
SANITY_TEST=$(curl -s -H "Authorization: Bearer $SANITY_API_TOKEN" \
    "https://api.sanity.io/v2026-03-01/projects/$SANITY_PROJECT_ID" \
    | grep -q "error" && echo "0" || echo "1")

if [ "$SANITY_TEST" = "1" ]; then
    print_success "Sanity API connection successful"
else
    print_warning "Could not verify Sanity API connection"
    print_info "You can test manually by visiting:"
    echo "https://www.sanity.io/manage/projects/$SANITY_PROJECT_ID"
fi

# Test build
print_header "Step 7: Running Test Build"

print_info "Building project (this may take 1-2 minutes)..."

if npm run build; then
    print_success "Test build successful!"
    rm -rf .next
else
    print_error "Build failed. Please check the error messages above."
    echo
    echo "Common issues:"
    echo "1. Invalid Sanity Project ID"
    echo "2. Sanity API Token missing or invalid"
    echo "3. TypeScript errors in the codebase"
    exit 1
fi

# Final instructions
print_header "Setup Complete! 🎉"

echo -e "${GREEN}Next steps:${NC}"
echo "1. Start development server:"
echo "   ${BLUE}npm run dev${NC}"
echo
echo "2. Open browser:"
echo "   ${BLUE}http://localhost:3000${NC}"
echo
echo "3. Access Sanity Studio:"
echo "   ${BLUE}http://localhost:3000/studio${NC}"
echo
echo "4. Read the full setup guide:"
echo "   ${BLUE}SETUP-GUIDE.md${NC}"
echo
echo -e "${GREEN}Environment variables saved to: .env.local${NC}"
echo -e "${YELLOW}Important: Never commit .env.local to version control!${NC}"
echo

print_success "Setup script completed successfully"
