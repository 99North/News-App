




docker build \
--build-arg REACT_APP_API_URL=http://65.0.5.20:3001 \
-t frontend-app ./News-App



curl -X POST http://localhost:3001/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "test",
    "email": "test@gmail.com",
    "password": "testpass",
    "firstName": "Test",
    "lastName": "User"
  }'




docker exec -it postgres-db psql -U debi -d akrutidev

psql -U debi -d akrutidev

\ls

\c akrutidev    : to connetc to sepeific databse

SELECT to_regclass('public.users');









====================================


RUN IN DOCKER
====================================================================



create a file name 01-seed-user.sql  inside  News-App/db-init folder and past this

-- db-init/01-seed-user.sql
-- Create default user on first DB creation

INSERT INTO users (username, email, password, firstname, lastname)
VALUES ('debi', 'debi@gmail.com', '123456', 'Debi', 'Prasad')
ON CONFLICT (email) DO NOTHING;





======================
read me file
=====================
First Update the ip here with your ec2 instance ip
root@ip-172-31-7-172:/home/ubuntu/News-App# cat backend/.env 
# Database Configuration for development environment, make sure to update these values as per your local setup -RKS
DB_USER=debi
DB_PASSWORD=9090
DB_HOST=postgres-db
DB_PORT=5432
DB_NAME=akrutidev
# Note: JWT Configuration generate it using any online tool or library -RKS
JWT_SECRET=419461bae0350d7058bbb6629f88813c9dfd5498da471466c64caa4e14269c2b27e681f8897c6bf2664fa9bd22408cc0c0937728d13201aff27080dcf8f37d56
JWT_EXPIRES_IN=24h
# Server Port
PORT=3001

#update the ip with your ec2 instance ip
FRONTEND_URL=http://13.235.81.177

 
Also update the ip here 
root@ip-172-31-7-172:/home/ubuntu/News-App# cat frontend/.env 
REACT_APP_API_URL=http://13.235.81.177:3001     //backend url 







Create Dockerfile inside  News-App/frontend and paste it

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






Now Run this to create frontend image   and update your instance ip in the ip bellow  before running the script
docker build \
  --build-arg REACT_APP_API_URL=http://13.235.81.177:3001 \
  -t frontend-app ./frontend




run this to cretae an frontend container from the image
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





docker run -d  -p 3001:3001  --env-file ./backend/.env  --name backend backend-app  : run to create image 



======================================

Run these commands one by one 

docker volume create pgdata    :to create a persistent volume

docker network create akruti-network:   to create a network


Now go inside News-App/backend      folder and run this command
docker run -d \
  --name postgres-db \
  --network akruti-network \
  -e POSTGRES_USER=debi \
  -e POSTGRES_PASSWORD=9090 \
  -e POSTGRES_DB=akrutidev \
  -v pgdata:/var/lib/postgresql/data \
  -v $(pwd)/init.sql:/docker-entrypoint-initdb.d/init.sql \
  -p 5432:5432 \
  postgres:16




===============================

sudo docker exec -it postgres-db psql -U postgres -d akruti-dev   then run  SELECT * FROM users  :to verify the login credential is added  or not inside the database

====================================
to add a new user credential

curl -X POST http://localhost:3001/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "test",
    "email": "test@gmail.com",
    "password": "testpass",
    "firstName": "Test",
    "lastName": "User"
  }'

=============================================================================
if anything wrong you can run these command as per need

docker volume rm pgdata

docker kill <psotegress_container_id>
docker rm <postgress_container_id>

again run the postgress conatiner creation command
























