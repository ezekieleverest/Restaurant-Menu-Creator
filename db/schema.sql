DROP DATABASE IF EXISTS restaurant_db;
CREATE DATABASE restaurant_db;

USE restaurant_db;

CREATE TABLE menu (
    id INT AUTO_INCREMENT,
    title VARCHAR (30) NOT NULL,
    description VARCHAR(300) NOT NULL,
    price DECIMAL (4, 2),
    category VARCHAR (20) NOT NULL,
    PRIMARY KEY (id)
);
