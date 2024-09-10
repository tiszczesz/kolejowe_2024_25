-- SQLite
CREATE TABLE IF NOT EXISTS Games (
    Title TEXT NOT NULL,
    Category TEXT NOT NULL,
    Year INTEGER NOT NULL,
    Price REAL NOT NULL
);

INSERT INTO Games (Title, Category, Year, Price) VALUES ('The Witcher 3: Wild Hunt', 'RPG', 2015, 29.99);
INSERT INTO Games (Title, Category, Year, Price) VALUES ('Cyberpunk 2077', 'RPG', 2020, 59.99);
INSERT INTO Games (Title, Category, Year, Price) VALUES ('Minecraft', 'Sandbox', 2011, 26.95);
INSERT INTO Games (Title, Category, Year, Price) VALUES ('Grand Theft Auto V', 'Action', 2013, 29.99);
INSERT INTO Games (Title, Category, Year, Price) VALUES ('The Legend of Zelda: Breath of the Wild', 'Adventure', 2017, 59.99);
INSERT INTO Games (Title, Category, Year, Price) VALUES ('Red Dead Redemption 2', 'Action', 2018, 59.99);
INSERT INTO Games (Title, Category, Year, Price) VALUES ('Among Us', 'Party', 2018, 4.99);
INSERT INTO Games (Title, Category, Year, Price) VALUES ('Stardew Valley', 'Simulation', 2016, 14.99);
INSERT INTO Games (Title, Category, Year, Price) VALUES ('Hades', 'Roguelike', 2020, 24.99);
INSERT INTO Games (Title, Category, Year, Price) VALUES ('Celeste', 'Platformer', 2018, 19.99);

SELECT Year,count(Year) as ilosc FROM Games
GROUP by Year