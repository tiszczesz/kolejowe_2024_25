-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 30 Wrz 2024, 16:36
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `4pb_gr2`
--
CREATE DATABASE IF NOT EXISTS `4pb_gr2` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci;
USE `4pb_gr2`;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `games`
--

INSERT INTO `games` (`id`, `title`, `description`, `price`, `genre_id`) VALUES
(1, 'The Witcher 3', 'Epic fantasy RPG', '29.99', 1),
(2, 'Counter-Strike', 'Tactical FPS game', '14.99', 2),
(3, 'StarCraft II', 'Sci-fi RTS game', '19.99', 3),
(4, 'League of Legends', 'Popular MOBA game', '0.00', 4),
(5, 'World of Warcraft', 'Massive MMORPG', '39.99', 5),
(6, 'Tetris', 'Classic puzzle game', '9.99', 6),
(7, 'The Sims 4', 'Life simulation game', '49.99', 7),
(8, 'FIFA 24', 'Popular sports game', '59.99', 8),
(9, 'Uncharted 4', 'Action-adventure game', '19.99', 9),
(10, 'Resident Evil 7', 'Survival horror game', '24.99', 10),
(11, 'Cyberpunk 2077', 'Futuristic RPG', '59.99', 1),
(12, 'Call of Duty', 'Military FPS game', '49.99', 2),
(13, 'Age of Empires IV', 'Historical RTS game', '39.99', 3),
(14, 'Dota 2', 'Competitive MOBA game', '0.00', 4),
(15, 'Final Fantasy XIV', 'Fantasy MMORPG', '29.99', 5),
(16, 'Candy Crush', 'Addictive puzzle game', '0.00', 6),
(17, 'Flight Simulator', 'Realistic simulation game', '59.99', 7),
(18, 'NBA 2K24', 'Basketball sports game', '59.99', 8),
(19, 'Tomb Raider', 'Adventure game with puzzles', '19.99', 9),
(20, 'Silent Hill', 'Psychological horror game', '14.99', 10);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `genres`
--

INSERT INTO `genres` (`id`, `name`, `description`) VALUES
(1, 'RPG', 'Gry fabularne z rozbudowaną fabułą'),
(2, 'FPS', 'Strzelanki pierwszoosobowe'),
(3, 'RTS', 'Strategie czasu rzeczywistego'),
(4, 'MOBA', 'Gry wieloosobowe na arenach bitew'),
(5, 'MMORPG', 'Masowe gry fabularne online'),
(6, 'Puzzle', 'Gry logiczne i układanki'),
(7, 'Simulation', 'Symulatory różnych aktywności'),
(8, 'Sports', 'Gry sportowe'),
(9, 'Adventure', 'Gry przygodowe'),
(10, 'Horror', 'Gry z elementami grozy');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT dla tabeli `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
