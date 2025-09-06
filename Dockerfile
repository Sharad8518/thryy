# Step 1: Build the app
FROM node:slim  
# Set working directory
WORKDIR /app
# Install dependencies
COPY package*.json ./
# Build for production
RUN npm run dev
