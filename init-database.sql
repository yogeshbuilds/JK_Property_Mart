-- Database initialization script for Neon PostgreSQL
-- Run this script in your Neon database console or via psql

-- Create buyrequest table
CREATE TABLE IF NOT EXISTS "buyrequest" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    phone VARCHAR(20),
    lookingfor TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT (now() AT TIME ZONE 'Asia/Kolkata')
);

-- Create sellrequest table
CREATE TABLE IF NOT EXISTS "sellrequest" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    mobile VARCHAR(20),
    propertytype VARCHAR(255),
    address TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT (now() AT TIME ZONE 'Asia/Kolkata')
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_buy_request_created_at ON "buyrequest"(created_at);
CREATE INDEX IF NOT EXISTS idx_sell_request_created_at ON "sellrequest"(created_at);

