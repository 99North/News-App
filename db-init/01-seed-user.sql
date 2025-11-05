-- db-init/01-seed-user.sql
-- Create default user on first DB creation
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    firstname VARCHAR(50),
    lastname VARCHAR(50)
);

INSERT INTO users (username, email, password, firstname, lastname)
VALUES ('debi', 'debi@gmail.com', '123456', 'Debi', 'Prasad')
ON CONFLICT (email) DO NOTHING;

