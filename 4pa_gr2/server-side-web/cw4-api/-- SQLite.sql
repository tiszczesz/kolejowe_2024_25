-- SQLite
Create Table games(
    id INTEGER PRIMARY KEY,
    title TEXT,
    genre TEXT,
    releaseDate DATE,
    price DECIMAL(8,2)
)

INSERT INTO games (id, title, genre, releaseDate, price) VALUES
(1, 'The Legend of Zelda', 'Adventure', '1986-02-21', 59.99),
(2, 'Super Mario Bros.', 'Platformer', '1985-09-13', 49.99),
(3, 'Minecraft', 'Sandbox', '2011-11-18', 26.95),
(4, 'The Witcher 3', 'RPG', '2015-05-19', 39.99),
(5, 'Fortnite', 'Battle Royale', '2017-07-25', 0.00),
(6, 'Overwatch', 'Shooter', '2016-05-24', 39.99),
(7, 'Red Dead Redemption 2', 'Action-Adventure', '2018-10-26', 59.99),
(8, 'Cyberpunk 2077', 'RPG', '2020-12-10', 59.99),
(9, 'Among Us', 'Party', '2018-06-15', 4.99),
(10, 'Animal Crossing: New Horizons', 'Simulation', '2020-03-20', 59.99);