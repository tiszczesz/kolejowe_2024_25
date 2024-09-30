-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Wrz 30, 2024 at 01:07 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `4pb_cw1`
--
CREATE DATABASE IF NOT EXISTS `4pb_cw1` DEFAULT CHARACTER SET utf8 COLLATE utf8_polish_ci;
USE `4pb_cw1`;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `name`, `description`) VALUES
(1, 'AGD', 'lorem ipsum'),
(2, 'słodycze', ''),
(3, 'wędliny', 'lorem ipsum'),
(4, 'napoje', ''),
(5, 'pieczywo', 'lorem ipsum'),
(6, 'chemia gospodarcza', '');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `genre_id`) VALUES
(1, 'Product 1', 'Description for product 1', 19.99, 1),
(2, 'Product 2', 'Description for product 2', 29.99, 2),
(3, 'Product 3', 'Description for product 3', 39.99, 3),
(4, 'Product 4', 'Description for product 4', 49.99, 4),
(5, 'Product 5', 'Description for product 5', 59.99, 5),
(6, 'Product 6', 'Description for product 6', 69.99, 1),
(7, 'Product 7', 'Description for product 7', 79.99, 2),
(8, 'Product 8', 'Description for product 8', 89.99, 3),
(9, 'Product 9', 'Description for product 9', 99.99, 4),
(10, 'Product 10', 'Description for product 10', 109.99, 5),
(11, 'Product 11', 'Description for product 11', 119.99, 1),
(12, 'Product 12', 'Description for product 12', 129.99, 2),
(13, 'Product 13', 'Description for product 13', 139.99, 3),
(14, 'Product 14', 'Description for product 14', 149.99, 4),
(15, 'Product 15', 'Description for product 15', 159.99, 5),
(16, 'Product 16', 'Description for product 16', 169.99, 1),
(17, 'Product 17', 'Description for product 17', 179.99, 2),
(18, 'Product 18', 'Description for product 18', 189.99, 3);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
