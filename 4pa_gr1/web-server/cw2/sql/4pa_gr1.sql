-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 01 Paź 2024, 07:59
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
-- Baza danych: `4pa_gr1`
--
CREATE DATABASE IF NOT EXISTS `4pa_gr1` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci;
USE `4pa_gr1`;

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
(1, 'Action', 'High-energy films with lots of stunts and explosions'),
(2, 'Comedy', 'Films designed to make the audience laugh'),
(3, 'Drama', 'Serious, plot-driven films with realistic characters'),
(4, 'Horror', 'Films designed to scare and thrill the audience'),
(5, 'Science Fiction', 'Films exploring futuristic concepts and technology'),
(6, 'Romance', 'Films focusing on love and relationships'),
(7, 'Fantasy', 'Films set in imaginary worlds with magical elements'),
(8, 'Documentary', 'Non-fiction films depicting real-life events and stories');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `director` varchar(50) NOT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `movies`
--

INSERT INTO `movies` (`id`, `title`, `price`, `director`, `genre_id`) VALUES
(1, 'Inception', '19.99', 'Christopher Nolan', 1),
(2, 'The Matrix', '14.99', 'Lana Wachowski', 2),
(3, 'Interstellar', '24.99', 'Christopher Nolan', 1),
(4, 'The Godfather', '29.99', 'Francis Ford Coppola', 3),
(5, 'Pulp Fiction', '19.99', 'Quentin Tarantino', 4),
(6, 'The Dark Knight', '21.99', 'Christopher Nolan', 1),
(7, 'Fight Club', '17.99', 'David Fincher', 4),
(8, 'Forrest Gump', '18.99', 'Robert Zemeckis', 5),
(9, 'The Shawshank Redemption', '22.99', 'Frank Darabont', 5),
(10, 'Gladiator', '20.99', 'Ridley Scott', 6);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT dla tabeli `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
