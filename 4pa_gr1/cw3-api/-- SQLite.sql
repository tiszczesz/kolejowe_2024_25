-- SQLite
CREATE TABLE IF NOT EXISTS "games" (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    genre TEXT NOT NULL,
    editDate TEXT ,
    price real
);

INSERT INTO "games" (id, title, genre, editDate, price) VALUES
(1, 'The Legend of Zelda', 'Adventure', '2023-01-01', 59.99),
(2, 'Super Mario Odyssey', 'Platformer', '2023-02-15', 49.99),
(3, 'Minecraft', 'Sandbox', '2023-03-10', 26.95),
(4, 'Fortnite', 'Battle Royale', '2023-04-05', 0.00),
(5, 'The Witcher 3', 'RPG', '2023-05-20', 39.99),
(6, 'Overwatch', 'Shooter', '2023-06-25', 19.99),
(7, 'Stardew Valley', 'Simulation', '2023-07-30', 14.99),
(8, 'Among Us', 'Party', '2023-08-15', 4.99),
(9, 'Cyberpunk 2077', 'RPG', '2023-09-10', 59.99),
(10, 'Animal Crossing: New Horizons', 'Simulation', '2023-10-05', 59.99);