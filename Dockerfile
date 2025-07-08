# Use official Node.js 18 Alpine image for smaller size
FROM node:18-alpine

# Create and set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install production dependencies only
RUN npm install --production

# Copy all app source code into container
COPY . .

# Expose port 80 (change if your app listens on different port)
EXPOSE 80

# Run your Node.js app
CMD ["node", "index.js"]
