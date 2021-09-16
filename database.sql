-- CREATE DATABASE "fs-react-shopping";

-- Table structure
CREATE TABLE list (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80) NOT NULL,
	quantity DECIMAL(3, 2) NOT NULL,
	unit VARCHAR(20),
	isPurchased BOOLEAN DEFAULT false
);

INSERT INTO list (name, quantity, unit)
VALUES ('Orange Juice', '2', 'bottles'), 
('Apples', '5', 'lbs'), 
('Bread', '1', 'loaf'),
('Milk', '1', 'gallon'),
('Sliced Almonds', '2', 'cups');

SELECT * FROM list;