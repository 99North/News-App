# ==========================
# ⚙️ Stage 1: Build React App
# ==========================
FROM node:20-slim AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies (production)
ENV NODE_ENV=production
RUN npm install

# Copy source code
COPY . .

# Build production bundle
RUN npm run build

# ==========================
# 🌐 Stage 2: Serve with Nginx
# ==========================
FROM nginx:alpine

# Install gettext for envsubst
RUN apk add --no-cache gettext

# Copy React build output
COPY --from=builder /app/build /usr/share/nginx/html

# Copy env-config.js template
COPY public/env-config.js /usr/share/nginx/html/env-config.js

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Runtime env substitution + start Nginx
CMD ["/bin/sh", "-c", "\
  echo 'Substituting environment variables in env-config.js...'; \
  envsubst < /usr/share/nginx/html/env-config.js > /usr/share/nginx/html/env-config.tmp && \
  mv /usr/share/nginx/html/env-config.tmp /usr/share/nginx/html/env-config.js && \
  nginx -g 'daemon off;'"]
