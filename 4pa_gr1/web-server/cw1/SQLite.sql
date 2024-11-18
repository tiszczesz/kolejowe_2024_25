-- SQLite
CREATE TABLE Books(
    id Integer PRIMARY KEY,
    title text,
    author text,
    price float
)
INSERT INTO Books (id, title, author, price) VALUES (1, 'To Kill a Mockingbird', 'Harper Lee', 10.99);
INSERT INTO Books (id, title, author, price) VALUES (2, '1984', 'George Orwell', 8.99);
INSERT INTO Books (id, title, author, price) VALUES (3, 'Pride and Prejudice', 'Jane Austen', 12.99);
INSERT INTO Books (id, title, author, price) VALUES (4, 'The Great Gatsby', 'F. Scott Fitzgerald', 10.49);
INSERT INTO Books (id, title, author, price) VALUES (5, 'Moby Dick', 'Herman Melville', 9.99);
INSERT INTO Books (id, title, author, price) VALUES (6, 'War and Peace', 'Leo Tolstoy', 14.99);
INSERT INTO Books (id, title, author, price) VALUES (7, 'The Catcher in the Rye', 'J.D. Salinger', 11.99);
INSERT INTO Books (id, title, author, price) VALUES (8, 'The Hobbit', 'J.R.R. Tolkien', 13.99);
INSERT INTO Books (id, title, author, price) VALUES (9, 'Fahrenheit 451', 'Ray Bradbury', 9.49);
INSERT INTO Books (id, title, author, price) VALUES (10, 'Jane Eyre', 'Charlotte Brontë', 10.99);
