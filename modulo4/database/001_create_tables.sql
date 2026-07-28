-- EcoColeta Recife — DDL
-- CREATE DATABASE ecocoleta;

CREATE TYPE pickup_status AS ENUM ('agendado', 'coletado', 'cancelado');
CREATE TYPE item_category AS ENUM ('celular', 'computador', 'tv', 'eletrodomestico', 'bateria', 'outro');

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    phone VARCHAR(15),
    points INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE collection_points (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    opening_hours VARCHAR(100),
    accepted_items TEXT[],
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE pickups (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    address VARCHAR(255) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    scheduled_date DATE NOT NULL,
    status pickup_status DEFAULT 'agendado',
    photo_url VARCHAR(500),
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE pickup_items (
    id SERIAL PRIMARY KEY,
    pickup_id INTEGER NOT NULL REFERENCES pickups(id) ON DELETE CASCADE,
    category item_category NOT NULL,
    description VARCHAR(200),
    quantity INTEGER DEFAULT 1
);

CREATE INDEX idx_points_location ON collection_points(latitude, longitude);
CREATE INDEX idx_pickups_user ON pickups(user_id);
CREATE INDEX idx_pickups_status ON pickups(status);
