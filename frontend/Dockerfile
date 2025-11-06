# ---- Stage 1: Build React app ----
FROM node:20-slim AS builder

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install all deps including devDependencies (important for ESLint/react-scripts)
ENV NODE_ENV=development
RUN npm install

# Copy the full source
COPY . .

# Add build argument + environment variable
ARG REACT_APP_API_URL=http://13.235.247.22:3001
ENV REACT_APP_API_URL=$REACT_APP_API_URL



# Run build command
RUN npm run build


# ---- Stage 2: Serve using Nginx ----
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
