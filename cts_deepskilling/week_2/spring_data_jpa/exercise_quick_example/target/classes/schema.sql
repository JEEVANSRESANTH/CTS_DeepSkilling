-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS ormlearn;
USE ormlearn;

-- Create country table
CREATE TABLE IF NOT EXISTS country (
    co_code VARCHAR(2) NOT NULL PRIMARY KEY,
    co_name VARCHAR(100) NOT NULL
);

-- Insert sample data
INSERT INTO country (co_code, co_name) VALUES 
('US', 'United States'),
('UK', 'United Kingdom'),
('IN', 'India'),
('CA', 'Canada'),
('AU', 'Australia'),
('DE', 'Germany'),
('FR', 'France'),
('JP', 'Japan'),
('CN', 'China'),
('BR', 'Brazil')
ON DUPLICATE KEY UPDATE co_name = VALUES(co_name);