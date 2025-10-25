# Dockerfile
FROM node:20-alpine

# Build tooling for native modules if needed
RUN apk add --no-cache python3 make g++

WORKDIR /usr/src/app

# Copy manifest for caching
COPY package*.json ./

# Install production deps
RUN npm ci --only=production || npm install --production

# Copy source
COPY . .

EXPOSE 3000

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

CMD ["node", "app.js"]
