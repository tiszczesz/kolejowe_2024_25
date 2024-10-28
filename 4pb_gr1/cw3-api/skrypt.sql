-- SQLite
DROP TABLE IF EXISTS Movies;

CREATE TABLE Movies (
    id Integer PRIMARY KEY,
    title TEXT,
    director TEXT,
    releaseYear INTEGER,
    genre TEXT
);
INSERT INTO Movies (title, director, releaseYear, genre) VALUES
( 'The Shawshank Redemption', 'Frank Darabont', 1994, 'Drama'),
( 'The Godfather', 'Francis Ford Coppola', 1972, 'Crime'),
( 'The Dark Knight', 'Christopher Nolan', 2008, 'Action'),
( 'Pulp Fiction', 'Quentin Tarantino', 1994, 'Crime'),
( 'The Lord of the Rings: The Return of the King', 'Peter Jackson', 2003, 'Fantasy'),
( 'Forrest Gump', 'Robert Zemeckis', 1994, 'Drama'),
( 'Inception', 'Christopher Nolan', 2010, 'Sci-Fi'),
( 'Fight Club', 'David Fincher', 1999, 'Drama'),
( 'The Matrix', 'Lana Wachowski, Lilly Wachowski', 1999, 'Sci-Fi'),
( 'Goodfellas', 'Martin Scorsese', 1990, 'Crime');