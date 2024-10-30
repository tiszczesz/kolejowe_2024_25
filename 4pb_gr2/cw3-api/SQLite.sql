-- SQLite
CREATE TABLE IF NOT EXISTS games(
    id INTEGER PRIMARY KEY,
    title TEXT,
    genre TEXT,
    year integer,
    platform TEXT   
);
INSERT INTO games (title, genre, year, platform) VALUES
('The Legend of Zelda: Breath of the Wild', 'Action-adventure', 2017, 'Nintendo Switch'),
('God of War', 'Action-adventure', 2018, 'PlayStation 4'),
('Red Dead Redemption 2', 'Action-adventure', 2018, 'PlayStation 4'),
('The Witcher 3: Wild Hunt', 'Action RPG', 2015, 'PC'),
('Minecraft', 'Sandbox', 2011, 'PC'),
('Fortnite', 'Battle Royale', 2017, 'PC'),
('Overwatch', 'First-person shooter', 2016, 'PC'),
('Cyberpunk 2077', 'Action RPG', 2020, 'PC'),
('Hades', 'Roguelike', 2020, 'PC'),
('Among Us', 'Party', 2018, 'PC');