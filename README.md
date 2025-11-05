RUN IN DOCKER
====================================================================



create a file name 01-seed-user.sql  inside  News-App/db-init folder and past this

-- db-init/01-seed-user.sql
-- Create default user on first DB creation

INSERT INTO users (username, email, password, firstname, lastname)
VALUES ('debi', 'debi@gmail.com', '123456', 'Debi', 'Prasad')
ON CONFLICT (email) DO NOTHING;







=====================

create Dockerfile inside  News-App/News-App and paste it

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







Run this to create image

docker build \

 --build-arg REACT_APP_API_URL=http://65.0.5.20:3001 \

 -t frontend-app ./News-App




run this to cretae an frintend container from the image
docker run -d \
 --name frontend \
 --network akruti-network \
 -p 80:80 \
 frontend-app





============================

crate a Dockerfile inside News-App/uni-server and paste it

# server/Dockerfile

FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3001

CMD ["node", "app.js"]





docker run -d  -p 3001:3001  --env-file ./uni-server/.env  --name backend backend-app  : run to create image 



then run this to create an backend container









======================================

Run these commands one by one 

sudo docker volume create pgdata

sudo docker network create akruti-network



sudo docker run -d \
 --name postgres-db \
 --network akruti-network \
 -e POSTGRES_USER=postgres \
 -e POSTGRES_PASSWORD=postgres \
 -e POSTGRES_DB=akrutidev \
 -v pgdata:/var/lib/postgresql/data \
 -v ./db-init:/docker-entrypoint-initdb.d \
 -p 5432:5432 \
 postgres:16



===============================

sudo docker exec -it postgres-db psql -U postgres -d akruti-dev   then run  SELECT * FROM users  :to verify the login credential is added  or not inside the database

























if anything wrong you can run these command as per need

docker volume rm pgdata

docker system prune -af









