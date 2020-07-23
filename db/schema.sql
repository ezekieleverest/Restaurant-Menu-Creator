DROP DATABASE IF EXISTS restaurant_db;
CREATE DATABASE restaurant_db;

USE restaurant_db;



CREATE TABLE category (
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    description VARCHAR(300),
    PRIMARY KEY(id)
);
CREATE TABLE menu (
    id INT AUTO_INCREMENT,
    title VARCHAR (30) NOT NULL,
    description VARCHAR(300) NOT NULL,
    price DECIMAL (4, 2),
    category INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (category) REFERENCES category(id)
)