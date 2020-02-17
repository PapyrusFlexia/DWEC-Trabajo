-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-02-2020 a las 20:47:24
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `juegosrol`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegosrol`
--

CREATE TABLE `juegosrol` (
  `id` int(11) NOT NULL,
  `creador` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `genero` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `editorial` varchar(255) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `juegosrol`
--

INSERT INTO `juegosrol` (`id`, `creador`, `genero`, `editorial`) VALUES
(1, 'Mike', 'Fantasia', 'Pipo'),
(2, 'Pepe', 'Sci-fi', 'ElCapo'),
(3, 'Wazowski', 'IRL', 'LMD');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `juegosrol`
--
ALTER TABLE `juegosrol`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `juegosrol`
--
ALTER TABLE `juegosrol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
