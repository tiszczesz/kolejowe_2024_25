-- SQLite
CREATE TABLE Movies(
    id Integer PRIMARY KEY,
    title text,
    director text,
    year Integer
);
INSERT INTO Movies (id, title, director, year) VALUES (1, 'Inception', 'Christopher Nolan', 2010);
INSERT INTO Movies (id, title, director, year) VALUES (2, 'The Matrix', 'Lana Wachowski, Lilly Wachowski', 1999);
INSERT INTO Movies (id, title, director, year) VALUES (3, 'Interstellar', 'Christopher Nolan', 2014);
INSERT INTO Movies (id, title, director, year) VALUES (4, 'The Godfather', 'Francis Ford Coppola', 1972);
INSERT INTO Movies (id, title, director, year) VALUES (5, 'Pulp Fiction', 'Quentin Tarantino', 1994);
INSERT INTO Movies (id, title, director, year) VALUES (6, 'The Dark Knight', 'Christopher Nolan', 2008);
INSERT INTO Movies (id, title, director, year) VALUES (7, 'Fight Club', 'David Fincher', 1999);
INSERT INTO Movies (id, title, director, year) VALUES (8, 'Forrest Gump', 'Robert Zemeckis', 1994);
INSERT INTO Movies (id, title, director, year) VALUES (9, 'The Shawshank Redemption', 'Frank Darabont', 1994);
INSERT INTO Movies (id, title, director, year) VALUES (10, 'The Lord of the Rings: The Return of the King', 'Peter Jackson', 2003);
