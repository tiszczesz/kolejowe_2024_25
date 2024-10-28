-- SQLite
CREATE TABLE Movie (
    Id INTEGER PRIMARY KEY,
    Title TEXT,
    Director TEXT,
    ReleaseYear INTEGER,
    Genre TEXT
);
INSERT INTO Movie (Id, Title, Director, ReleaseYear, Genre) VALUES
(1, 'The Shawshank Redemption', 'Frank Darabont', 1994, 'Drama'),
(2, 'The Godfather', 'Francis Ford Coppola', 1972, 'Crime'),
(3, 'The Dark Knight', 'Christopher Nolan', 2008, 'Action'),
(4, 'Pulp Fiction', 'Quentin Tarantino', 1994, 'Crime'),
(5, 'The Lord of the Rings: The Return of the King', 'Peter Jackson', 2003, 'Fantasy'),
(6, 'Forrest Gump', 'Robert Zemeckis', 1994, 'Drama'),
(7, 'Inception', 'Christopher Nolan', 2010, 'Sci-Fi'),
(8, 'Fight Club', 'David Fincher', 1999, 'Drama'),
(9, 'The Matrix', 'Lana Wachowski, Lilly Wachowski', 1999, 'Sci-Fi'),
(10, 'Goodfellas', 'Martin Scorsese', 1990, 'Crime');