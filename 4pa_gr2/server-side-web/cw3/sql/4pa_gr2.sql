-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 01 Paź 2024, 11:32
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
-- Baza danych: `4pa_gr2`
--
CREATE DATABASE IF NOT EXISTS `4pa_gr2` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci;
USE `4pa_gr2`;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `genres`
--

INSERT INTO `genres` (`id`, `name`, `description`) VALUES
(1, 'Action', 'High energy and lots of physical activities'),
(2, 'Comedy', 'Humorous content meant to entertain and amuse'),
(3, 'Drama', 'Serious, narrative-focused stories'),
(4, 'Horror', 'Designed to scare and create suspense'),
(5, 'Science Fiction', 'Futuristic and science-based themes'),
(6, 'Romance', 'Focus on love and relationships'),
(7, 'Thriller', 'Intense excitement and suspense'),
(8, 'Fantasy', 'Magical and supernatural elements'),
(9, 'Documentary', 'Non-fictional, informative content'),
(10, 'Animation', 'Animated films, often for all ages');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `director` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `movies`
--

INSERT INTO `movies` (`id`, `title`, `director`, `price`, `genre_id`) VALUES
(1, 'Inception', 'Christopher Nolan', '19.99', 1),
(2, 'The Matrix', 'Lana Wachowski, Lilly Wachowski', '14.99', 2),
(3, 'Interstellar', 'Christopher Nolan', '18.99', 1),
(4, 'The Godfather', 'Francis Ford Coppola', '12.99', 3),
(5, 'Pulp Fiction', 'Quentin Tarantino', '13.99', 4),
(6, 'The Dark Knight', 'Christopher Nolan', '15.99', 1),
(7, 'Fight Club', 'David Fincher', '11.99', 4),
(8, 'Forrest Gump', 'Robert Zemeckis', '10.99', 5),
(9, 'The Shawshank Redemption', 'Frank Darabont', '9.99', 5),
(10, 'The Lord of the Rings: The Fellowship of the Ring', 'Peter Jackson', '20.99', 6),
(11, 'Star Wars: Episode IV - A New Hope', 'George Lucas', '17.99', 7),
(12, 'The Avengers', 'Joss Whedon', '16.99', 8),
(13, 'Gladiator', 'Ridley Scott', '14.99', 9),
(14, 'Titanic', 'James Cameron', '13.99', 10),
(15, 'Jurassic Park', 'Steven Spielberg', '12.99', 11);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT dla tabeli `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
