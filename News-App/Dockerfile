# ---- Stage 1: Build React app ----
FROM node:20-slim AS builder

# Install build tools to fix some missing peer deps in slim image
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install all deps including devDependencies (important for ESLint/react-scripts)
ENV NODE_ENV=development
RUN npm install

# Copy the full source
COPY . .

# Run build command
RUN npm run build

# ---- Stage 2: Serve using Nginx ----
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

