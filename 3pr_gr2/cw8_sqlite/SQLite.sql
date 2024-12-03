-- SQLite
CREATE TABLE products(
    id Integer PRIMARY KEY,
    name TEXT,
    price float,
    type TEXT
)
INSERT INTO products (name, price, type) VALUES ('Apple', 1.00, 'Fruit');
INSERT INTO products (name, price, type) VALUES ('Banana', 0.50, 'Fruit');
INSERT INTO products (name, price, type) VALUES ('Orange', 0.75, 'Fruit');
INSERT INTO products (name, price, type) VALUES ('Carrot', 0.25, 'Vegetable');
INSERT INTO products (name, price, type) VALUES ('Celery', 0.75, 'Vegetable');
INSERT INTO products (name, price, type) VALUES ('Lettuce', 1.00, 'Vegetable');
INSERT INTO products (name, price, type) VALUES ('Milk', 2.50, 'Dairy');