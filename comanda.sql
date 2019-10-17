-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-10-2019 a las 06:39:10
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `comanda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alimentos`
--

CREATE TABLE `alimentos` (
  `id` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `tipo` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre_alimento` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `estado` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `tiempo_comienzo` time NOT NULL,
  `tiempo_estimado` time NOT NULL,
  `tiempo_final` time NOT NULL,
  `id_empleado` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `alimentos`
--

INSERT INTO `alimentos` (`id`, `id_pedido`, `tipo`, `nombre_alimento`, `estado`, `tiempo_comienzo`, `tiempo_estimado`, `tiempo_final`, `id_empleado`, `created_at`, `updated_at`) VALUES
(1, 1, 'comida', 'milanesa con papas', 'Listo para servir', '15:14:54', '15:19:54', '15:19:19', 12, '2019-06-30', '2019-06-30'),
(2, 1, 'comida', 'pizza de muzzarela', 'Listo para servir', '15:14:54', '15:19:54', '15:19:19', 12, '2019-06-30', '2019-06-30'),
(3, 1, 'vino', 'tinto', 'Listo para servir', '15:16:13', '15:33:13', '15:18:03', 11, '2019-06-30', '2019-06-30'),
(4, 1, 'vino', 'malbec', 'Listo para servir', '15:16:13', '15:33:13', '15:18:03', 11, '2019-06-30', '2019-06-30'),
(5, 1, 'trago', 'cuba libre', 'Listo para servir', '15:16:13', '15:33:13', '15:18:03', 11, '2019-06-30', '2019-06-30'),
(6, 1, 'cerveza', 'negra', 'Listo para servir', '15:20:00', '15:22:00', '15:20:22', 14, '2019-06-30', '2019-06-30'),
(7, 1, 'postre', 'chocotorta', 'Listo para servir', '15:14:54', '15:19:54', '15:19:19', 12, '2019-06-30', '2019-06-30'),
(8, 2, 'comida', 'milanesa con papas', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-06-30', '2019-06-30'),
(9, 2, 'comida', 'pizza de muzzarela', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-06-30', '2019-06-30'),
(10, 2, 'comida', 'empanadas de jamon y queso', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-06-30', '2019-06-30'),
(11, 2, 'vino', 'tinto', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-06-30', '2019-06-30'),
(12, 2, 'vino', 'malbec', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-06-30', '2019-06-30'),
(13, 2, 'vino', 'blanco', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-06-30', '2019-06-30'),
(14, 2, 'trago', 'cuba libre', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-06-30', '2019-06-30'),
(15, 2, 'cerveza', 'negra', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-06-30', '2019-06-30'),
(16, 2, 'cerveza', 'colorada', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-06-30', '2019-06-30'),
(17, 2, 'postre', 'chocotorta', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-06-30', '2019-06-30'),
(18, 2, 'postre', 'brownie', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-06-30', '2019-06-30'),
(19, 3, 'comida', 'milanesa con papas', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-10-13', '2019-10-13'),
(20, 3, 'comida', 'pizza de muzzarela', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-10-13', '2019-10-13'),
(21, 3, 'comida', 'empanadas de jamon y queso', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-10-13', '2019-10-13'),
(22, 3, 'vino', 'tinto', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-10-13', '2019-10-13'),
(23, 3, 'vino', 'malbec', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-10-13', '2019-10-13'),
(24, 3, 'vino', 'blanco', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-10-13', '2019-10-13'),
(25, 3, 'trago', 'cuba libre', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-10-13', '2019-10-13'),
(26, 3, 'cerveza', 'negra', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-10-13', '2019-10-13'),
(27, 3, 'cerveza', 'colorada', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-10-13', '2019-10-13'),
(28, 3, 'postre', 'chocotorta', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-10-13', '2019-10-13'),
(29, 3, 'postre', 'brownie', 'Pendiente', '00:00:00', '00:00:00', '00:00:00', 0, '2019-10-13', '2019-10-13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `pass` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `tipo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `estado` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `updated_at` date NOT NULL,
  `created_at` date NOT NULL,
  `path` varchar(500) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `pass`, `tipo`, `estado`, `updated_at`, `created_at`, `path`) VALUES
(1, 'admin', 'sysadmin', 'administrador', 'Activo', '0000-00-00', '0000-00-00', NULL),
(9, 'Juan Gomez', 'Mozo123', 'mozo', 'Activo', '2019-06-20', '2019-06-20', NULL),
(11, 'Maria Rodriguez', 'Bartender123', 'bartender', 'Activo', '2019-06-20', '2019-06-20', NULL),
(12, 'Camila Gonzalez', 'Cocinero123', 'cocinero', 'Activo', '2019-06-20', '2019-06-20', NULL),
(13, 'Jose Walter', 'Socio123', 'socio', 'Activo', '2019-06-20', '2019-06-20', NULL),
(14, 'Juan Cruz', 'Cervezero123', 'cervecero', 'Activo', '2019-06-21', '2019-06-21', NULL),
(15, 'Roberto Gomez', 'Cervezero123', 'cervecero', 'Activo', '2019-06-22', '2019-06-22', NULL),
(16, 'Belen Herrera', 'Cocinero123', 'cocinero', 'Activo', '2019-06-22', '2019-06-22', NULL),
(17, 'Jose Artigas', 'Cocinero123', 'cocinero', 'Activo', '2019-06-22', '2019-06-22', NULL),
(27, 'Jose Artigasd', 'asdasd', 'cocinero', 'Activo', '0000-00-00', '0000-00-00', NULL),
(28, 'testPath', 'asdasd', 'administrador', 'Activo', '0000-00-00', '0000-00-00', './public/img/Empleado_testPath_administrador.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `importes`
--

CREATE TABLE `importes` (
  `id` int(11) NOT NULL,
  `id_mesa` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `importe` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `importes`
--

INSERT INTO `importes` (`id`, `id_mesa`, `id_pedido`, `importe`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 1150, '2019-06-30', '2019-06-30'),
(2, 4, 2, 1500, '0000-00-00', '0000-00-00'),
(3, 3, 5, 1500, '2019-06-30', '2019-06-30'),
(4, 2, 6, 500, '2019-06-30', '2019-06-30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logueos`
--

CREATE TABLE `logueos` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_ingreso` datetime NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `logueos`
--

INSERT INTO `logueos` (`id`, `id_usuario`, `nombre`, `fecha_ingreso`, `created_at`, `updated_at`) VALUES
(1, 1, 'admin', '2019-06-17 17:09:55', '2019-06-17', '2019-06-17'),
(2, 1, 'admin', '2019-06-17 17:10:46', '2019-06-17', '2019-06-17'),
(3, 1, 'admin', '2019-06-17 17:13:31', '2019-06-17', '2019-06-17'),
(4, 1, 'admin', '2019-06-17 17:14:41', '2019-06-17', '2019-06-17'),
(5, 2, 'Juan Gomez', '2019-06-17 17:15:18', '2019-06-17', '2019-06-17'),
(6, 2, 'Juan Gomez', '2019-06-17 17:15:24', '2019-06-17', '2019-06-17'),
(7, 2, 'Juan Gomez', '2019-06-17 18:37:00', '2019-06-17', '2019-06-17'),
(8, 2, 'Juan Gomez', '2019-06-17 18:38:22', '2019-06-17', '2019-06-17'),
(9, 2, 'Juan Gomez', '2019-06-17 18:39:26', '2019-06-17', '2019-06-17'),
(10, 2, 'Juan Gomez', '2019-06-17 18:40:47', '2019-06-17', '2019-06-17'),
(11, 2, 'Juan Gomez', '2019-06-17 18:43:42', '2019-06-17', '2019-06-17'),
(12, 2, 'Juan Gomez', '2019-06-17 20:05:13', '2019-06-17', '2019-06-17'),
(13, 2, 'Juan Gomez', '2019-06-17 20:18:25', '2019-06-17', '2019-06-17'),
(14, 2, 'Juan Gomez', '2019-06-17 20:19:57', '2019-06-17', '2019-06-17'),
(15, 2, 'Juan Gomez', '2019-06-17 20:28:32', '2019-06-17', '2019-06-17'),
(16, 2, 'Juan Gomez', '2019-06-17 20:40:17', '2019-06-17', '2019-06-17'),
(17, 1, 'admin', '2019-06-20 12:29:31', '2019-06-20', '2019-06-20'),
(18, 8, 'Alberto', '2019-06-20 12:32:18', '2019-06-20', '2019-06-20'),
(19, 1, 'admin', '2019-06-20 12:34:07', '2019-06-20', '2019-06-20'),
(20, 11, 'Maria Rodriguez', '2019-06-20 12:38:32', '2019-06-20', '2019-06-20'),
(21, 9, 'Juan Gomez', '2019-06-20 13:31:46', '2019-06-20', '2019-06-20'),
(22, 11, 'Maria Rodriguez', '2019-06-20 13:33:17', '2019-06-20', '2019-06-20'),
(23, 11, 'Maria Rodriguez', '2019-06-20 13:38:09', '2019-06-20', '2019-06-20'),
(24, 1, 'admin', '2019-06-20 14:13:25', '2019-06-20', '2019-06-20'),
(25, 1, 'admin', '2019-06-20 14:37:23', '2019-06-20', '2019-06-20'),
(26, 1, 'admin', '2019-06-20 17:38:59', '2019-06-20', '2019-06-20'),
(27, 13, 'Jose Walter', '2019-06-20 17:39:38', '2019-06-20', '2019-06-20'),
(28, 1, 'admin', '2019-06-20 17:46:08', '2019-06-20', '2019-06-20'),
(29, 1, 'admin', '2019-06-20 18:30:10', '2019-06-20', '2019-06-20'),
(30, 13, 'Jose Walter', '2019-06-20 18:32:40', '2019-06-20', '2019-06-20'),
(31, 13, 'Jose Walter', '2019-06-20 20:45:54', '2019-06-20', '2019-06-20'),
(32, 13, 'Jose Walter', '2019-06-20 20:46:08', '2019-06-20', '2019-06-20'),
(33, 1, 'admin', '2019-06-20 20:46:29', '2019-06-20', '2019-06-20'),
(34, 11, 'Maria Rodriguez', '2019-06-20 20:47:15', '2019-06-20', '2019-06-20'),
(35, 1, 'admin', '2019-06-20 21:37:51', '2019-06-20', '2019-06-20'),
(36, 14, 'Juan Cruz', '2019-06-20 21:39:28', '2019-06-20', '2019-06-20'),
(37, 14, 'Juan Cruz', '2019-06-20 21:53:22', '2019-06-20', '2019-06-20'),
(38, 14, 'Juan Cruz', '2019-06-20 22:03:46', '2019-06-20', '2019-06-20'),
(39, 14, 'Juan Cruz', '2019-06-21 21:25:00', '2019-06-21', '2019-06-21'),
(40, 14, 'Juan Cruz', '2019-06-21 21:38:11', '2019-06-21', '2019-06-21'),
(41, 14, 'Juan Cruz', '2019-06-21 22:04:03', '2019-06-21', '2019-06-21'),
(42, 14, 'Juan Cruz', '2019-06-21 22:13:44', '2019-06-21', '2019-06-21'),
(43, 14, 'Juan Cruz', '2019-06-21 22:21:59', '2019-06-21', '2019-06-21'),
(44, 14, 'Juan Cruz', '2019-06-22 00:59:21', '2019-06-22', '2019-06-22'),
(45, 1, 'admin', '2019-06-22 01:01:01', '2019-06-22', '2019-06-22'),
(46, 14, 'Juan Cruz', '2019-06-22 01:02:29', '2019-06-22', '2019-06-22'),
(47, 15, 'Roberto Gomez', '2019-06-22 01:07:11', '2019-06-22', '2019-06-22'),
(48, 15, 'Roberto Gomez', '2019-06-22 01:15:34', '2019-06-22', '2019-06-22'),
(49, 15, 'Roberto Gomez', '2019-06-22 01:31:15', '2019-06-22', '2019-06-22'),
(50, 14, 'Juan Cruz', '2019-06-22 01:31:48', '2019-06-22', '2019-06-22'),
(51, 15, 'Roberto Gomez', '2019-06-22 01:36:29', '2019-06-22', '2019-06-22'),
(52, 15, 'Roberto Gomez', '2019-06-22 11:25:41', '2019-06-22', '2019-06-22'),
(53, 15, 'Roberto Gomez', '2019-06-22 11:49:39', '2019-06-22', '2019-06-22'),
(54, 14, 'Juan Cruz', '2019-06-22 11:50:22', '2019-06-22', '2019-06-22'),
(55, 1, 'admin', '2019-06-22 11:52:32', '2019-06-22', '2019-06-22'),
(56, 17, 'Jose Artigas', '2019-06-22 11:54:14', '2019-06-22', '2019-06-22'),
(57, 17, 'Jose Artigas', '2019-06-22 12:04:36', '2019-06-22', '2019-06-22'),
(58, 16, 'Belen Herrera', '2019-06-22 12:05:23', '2019-06-22', '2019-06-22'),
(59, 12, 'Camila Gonzalez', '2019-06-22 12:06:33', '2019-06-22', '2019-06-22'),
(60, 12, 'Camila Gonzalez', '2019-06-22 12:20:36', '2019-06-22', '2019-06-22'),
(61, 12, 'Camila Gonzalez', '2019-06-22 12:23:50', '2019-06-22', '2019-06-22'),
(62, 17, 'Jose Artigas', '2019-06-22 12:26:41', '2019-06-22', '2019-06-22'),
(63, 12, 'Camila Gonzalez', '2019-06-22 12:27:06', '2019-06-22', '2019-06-22'),
(64, 12, 'Camila Gonzalez', '2019-06-22 12:30:22', '2019-06-22', '2019-06-22'),
(65, 12, 'Camila Gonzalez', '2019-06-22 12:37:18', '2019-06-22', '2019-06-22'),
(66, 12, 'Camila Gonzalez', '2019-06-22 12:45:10', '2019-06-22', '2019-06-22'),
(67, 12, 'Camila Gonzalez', '2019-06-22 13:00:17', '2019-06-22', '2019-06-22'),
(68, 1, 'admin', '2019-06-22 13:00:36', '2019-06-22', '2019-06-22'),
(69, 1, 'admin', '2019-06-22 13:03:54', '2019-06-22', '2019-06-22'),
(70, 1, 'admin', '2019-06-22 13:05:04', '2019-06-22', '2019-06-22'),
(71, 12, 'Camila Gonzalez', '2019-06-22 13:05:34', '2019-06-22', '2019-06-22'),
(72, 12, 'Camila Gonzalez', '2019-06-29 12:43:28', '2019-06-29', '2019-06-29'),
(73, 12, 'Camila Gonzalez', '2019-06-29 12:55:27', '2019-06-29', '2019-06-29'),
(74, 12, 'Camila Gonzalez', '2019-06-29 13:40:08', '2019-06-29', '2019-06-29'),
(75, 12, 'Camila Gonzalez', '2019-06-29 13:51:08', '2019-06-29', '2019-06-29'),
(76, 12, 'Camila Gonzalez', '2019-06-29 13:59:32', '2019-06-29', '2019-06-29'),
(77, 12, 'Camila Gonzalez', '2019-06-29 14:08:13', '2019-06-29', '2019-06-29'),
(78, 12, 'Camila Gonzalez', '2019-06-29 14:17:08', '2019-06-29', '2019-06-29'),
(79, 12, 'Camila Gonzalez', '2019-06-29 14:25:36', '2019-06-29', '2019-06-29'),
(80, 14, 'Juan Cruz', '2019-06-29 14:32:01', '2019-06-29', '2019-06-29'),
(81, 11, 'Maria Rodriguez', '2019-06-29 14:33:16', '2019-06-29', '2019-06-29'),
(82, 11, 'Maria Rodriguez', '2019-06-29 18:02:19', '2019-06-29', '2019-06-29'),
(83, 12, 'Camila Gonzalez', '2019-06-29 18:06:17', '2019-06-29', '2019-06-29'),
(84, 14, 'Juan Cruz', '2019-06-29 18:07:36', '2019-06-29', '2019-06-29'),
(85, 14, 'Juan Cruz', '2019-06-29 18:48:50', '2019-06-29', '2019-06-29'),
(86, 14, 'Juan Cruz', '2019-06-29 19:07:17', '2019-06-29', '2019-06-29'),
(87, 9, 'Juan Gomez', '2019-06-29 19:07:43', '2019-06-29', '2019-06-29'),
(88, 9, 'Juan Gomez', '2019-06-29 19:11:02', '2019-06-29', '2019-06-29'),
(89, 13, 'Jose Walter', '2019-06-29 21:51:19', '2019-06-29', '2019-06-29'),
(90, 13, 'Jose Walter', '2019-06-29 21:55:00', '2019-06-29', '2019-06-29'),
(91, 13, 'Jose Walter', '2019-06-29 22:11:06', '2019-06-29', '2019-06-29'),
(92, 9, 'Juan Gomez', '2019-06-29 22:11:57', '2019-06-29', '2019-06-29'),
(93, 9, 'Juan Gomez', '2019-06-29 22:22:16', '2019-06-29', '2019-06-29'),
(94, 9, 'Juan Gomez', '2019-06-29 22:30:41', '2019-06-29', '2019-06-29'),
(95, 9, 'Juan Gomez', '2019-06-30 00:47:31', '2019-06-30', '2019-06-30'),
(96, 12, 'Camila Gonzalez', '2019-06-30 01:15:03', '2019-06-30', '2019-06-30'),
(97, 12, 'Camila Gonzalez', '2019-06-30 01:22:31', '2019-06-30', '2019-06-30'),
(98, 12, 'Camila Gonzalez', '2019-06-30 01:37:40', '2019-06-30', '2019-06-30'),
(99, 12, 'Camila Gonzalez', '2019-06-30 02:01:37', '2019-06-30', '2019-06-30'),
(100, 13, 'Jose Walter', '2019-06-30 02:02:34', '2019-06-30', '2019-06-30'),
(101, 1, 'admin', '2019-06-30 11:53:17', '2019-06-30', '2019-06-30'),
(102, 9, 'Juan Gomez', '2019-06-30 12:22:18', '2019-06-30', '2019-06-30'),
(103, 9, 'Juan Gomez', '2019-06-30 12:34:19', '2019-06-30', '2019-06-30'),
(104, 9, 'Juan Gomez', '2019-06-30 12:39:25', '2019-06-30', '2019-06-30'),
(105, 12, 'Camila Gonzalez', '2019-06-30 12:41:51', '2019-06-30', '2019-06-30'),
(106, 17, 'Jose Artigas', '2019-06-30 12:43:27', '2019-06-30', '2019-06-30'),
(107, 14, 'Juan Cruz', '2019-06-30 12:58:27', '2019-06-30', '2019-06-30'),
(108, 12, 'Camila Gonzalez', '2019-06-30 13:03:02', '2019-06-30', '2019-06-30'),
(109, 11, 'Maria Rodriguez', '2019-06-30 13:03:51', '2019-06-30', '2019-06-30'),
(110, 9, 'Juan Gomez', '2019-06-30 13:10:40', '2019-06-30', '2019-06-30'),
(111, 9, 'Juan Gomez', '2019-06-30 15:02:27', '2019-06-30', '2019-06-30'),
(112, 1, 'admin', '2019-06-30 15:02:45', '2019-06-30', '2019-06-30'),
(113, 13, 'Jose Walter', '2019-06-30 15:05:48', '2019-06-30', '2019-06-30'),
(114, 13, 'Jose Walter', '2019-06-30 15:07:37', '2019-06-30', '2019-06-30'),
(115, 13, 'Jose Walter', '2019-06-30 15:07:55', '2019-06-30', '2019-06-30'),
(116, 9, 'Juan Gomez', '2019-06-30 15:08:45', '2019-06-30', '2019-06-30'),
(117, 12, 'Camila Gonzalez', '2019-06-30 15:13:48', '2019-06-30', '2019-06-30'),
(118, 11, 'Maria Rodriguez', '2019-06-30 15:15:50', '2019-06-30', '2019-06-30'),
(119, 11, 'Maria Rodriguez', '2019-06-30 15:17:06', '2019-06-30', '2019-06-30'),
(120, 12, 'Camila Gonzalez', '2019-06-30 15:19:10', '2019-06-30', '2019-06-30'),
(121, 14, 'Juan Cruz', '2019-06-30 15:19:46', '2019-06-30', '2019-06-30'),
(122, 9, 'Juan Gomez', '2019-06-30 15:20:49', '2019-06-30', '2019-06-30'),
(123, 12, 'Camila Gonzalez', '2019-06-30 15:30:55', '2019-06-30', '2019-06-30'),
(124, 9, 'Juan Gomez', '2019-06-30 15:31:26', '2019-06-30', '2019-06-30'),
(125, 9, 'Juan Gomez', '2019-06-30 18:03:38', '2019-06-30', '2019-06-30'),
(126, 1, 'admin', '2019-06-30 18:04:26', '2019-06-30', '2019-06-30'),
(127, 13, 'Jose Walter', '2019-06-30 18:05:26', '2019-06-30', '2019-06-30'),
(128, 9, 'Juan Gomez', '2019-06-30 18:07:06', '2019-06-30', '2019-06-30'),
(129, 9, 'Juan Gomez', '2019-06-30 20:54:06', '2019-06-30', '2019-06-30'),
(130, 1, 'admin', '2019-06-30 20:54:39', '2019-06-30', '2019-06-30'),
(131, 1, 'admin', '2019-09-24 22:02:41', '2019-09-24', '2019-09-24'),
(132, 1, 'admin', '2019-09-24 22:02:49', '2019-09-24', '2019-09-24'),
(133, 1, 'admin', '2019-09-24 22:03:08', '2019-09-24', '2019-09-24'),
(134, 1, 'admin', '2019-09-24 22:05:31', '2019-09-24', '2019-09-24'),
(135, 1, 'admin', '2019-09-24 22:30:27', '2019-09-24', '2019-09-24'),
(136, 1, 'admin', '2019-09-24 22:31:10', '2019-09-24', '2019-09-24'),
(137, 1, 'admin', '2019-09-24 22:32:55', '2019-09-24', '2019-09-24'),
(138, 1, 'admin', '2019-09-24 22:34:53', '2019-09-24', '2019-09-24'),
(139, 1, 'admin', '2019-09-25 01:12:52', '2019-09-25', '2019-09-25'),
(140, 1, 'admin', '2019-09-25 01:25:52', '2019-09-25', '2019-09-25'),
(141, 1, 'admin', '2019-10-13 16:38:08', '0000-00-00', '0000-00-00'),
(142, 1, 'admin', '2019-10-13 16:46:03', '0000-00-00', '0000-00-00'),
(143, 1, 'admin', '2019-10-13 17:39:22', '0000-00-00', '0000-00-00'),
(144, 1, 'admin', '2019-10-13 17:41:51', '0000-00-00', '0000-00-00'),
(145, 1, 'admin', '2019-10-13 17:41:56', '0000-00-00', '0000-00-00'),
(146, 1, 'admin', '2019-10-13 17:43:43', '0000-00-00', '0000-00-00'),
(147, 1, 'admin', '2019-10-13 17:44:05', '0000-00-00', '0000-00-00'),
(148, 1, 'admin', '2019-10-13 17:48:10', '0000-00-00', '0000-00-00'),
(149, 1, 'admin', '2019-10-13 17:48:26', '0000-00-00', '0000-00-00'),
(150, 1, 'admin', '2019-10-13 17:48:39', '0000-00-00', '0000-00-00'),
(151, 1, 'admin', '2019-10-13 17:49:04', '0000-00-00', '0000-00-00'),
(152, 1, 'admin', '2019-10-13 17:49:12', '0000-00-00', '0000-00-00'),
(153, 1, 'admin', '2019-10-13 17:49:15', '0000-00-00', '0000-00-00'),
(154, 1, 'admin', '2019-10-13 17:49:50', '0000-00-00', '0000-00-00'),
(155, 1, 'admin', '2019-10-13 17:50:05', '0000-00-00', '0000-00-00'),
(156, 1, 'admin', '2019-10-13 18:10:58', '0000-00-00', '0000-00-00'),
(157, 13, 'Jose Walter', '2019-10-13 18:14:31', '0000-00-00', '0000-00-00'),
(158, 13, 'Jose Walter', '2019-10-13 18:19:16', '0000-00-00', '0000-00-00'),
(159, 13, 'Jose Walter', '2019-10-13 18:27:48', '0000-00-00', '0000-00-00'),
(160, 1, 'admin', '2019-10-13 18:50:12', '0000-00-00', '0000-00-00'),
(161, 13, 'Jose Walter', '2019-10-13 18:53:01', '0000-00-00', '0000-00-00'),
(162, 13, 'Jose Walter', '2019-10-13 18:53:10', '0000-00-00', '0000-00-00'),
(163, 1, 'admin', '2019-10-13 18:53:29', '0000-00-00', '0000-00-00'),
(164, 13, 'Jose Walter', '2019-10-13 19:13:36', '0000-00-00', '0000-00-00'),
(165, 1, 'admin', '2019-10-13 19:13:44', '0000-00-00', '0000-00-00'),
(166, 1, 'admin', '2019-10-13 21:49:01', '0000-00-00', '0000-00-00'),
(167, 1, 'admin', '2019-10-13 21:56:24', '0000-00-00', '0000-00-00'),
(168, 9, 'Juan Gomez', '2019-10-13 21:56:58', '0000-00-00', '0000-00-00'),
(169, 9, 'Juan Gomez', '2019-10-14 16:32:21', '0000-00-00', '0000-00-00'),
(170, 1, 'admin', '2019-10-14 16:35:42', '0000-00-00', '0000-00-00'),
(171, 1, 'admin', '2019-10-14 16:39:53', '0000-00-00', '0000-00-00'),
(172, 1, 'admin', '2019-10-14 16:40:50', '0000-00-00', '0000-00-00'),
(173, 1, 'admin', '2019-10-14 16:46:03', '0000-00-00', '0000-00-00'),
(174, 1, 'admin', '2019-10-14 16:46:46', '0000-00-00', '0000-00-00'),
(175, 1, 'admin', '2019-10-14 16:52:25', '0000-00-00', '0000-00-00'),
(176, 1, 'admin', '2019-10-14 16:52:36', '0000-00-00', '0000-00-00'),
(177, 1, 'admin', '2019-10-14 17:08:38', '0000-00-00', '0000-00-00'),
(178, 1, 'admin', '2019-10-14 17:18:24', '0000-00-00', '0000-00-00'),
(179, 1, 'admin', '2019-10-14 17:24:03', '0000-00-00', '0000-00-00'),
(180, 1, 'admin', '2019-10-14 17:35:33', '0000-00-00', '0000-00-00'),
(181, 1, 'admin', '2019-10-14 17:40:55', '0000-00-00', '0000-00-00'),
(182, 1, 'admin', '2019-10-14 18:00:29', '0000-00-00', '0000-00-00'),
(183, 1, 'admin', '2019-10-14 18:00:49', '0000-00-00', '0000-00-00'),
(184, 1, 'admin', '2019-10-14 18:01:45', '0000-00-00', '0000-00-00'),
(185, 1, 'admin', '2019-10-14 18:03:12', '0000-00-00', '0000-00-00'),
(186, 1, 'admin', '2019-10-14 18:04:48', '0000-00-00', '0000-00-00'),
(187, 1, 'admin', '2019-10-14 18:07:08', '0000-00-00', '0000-00-00'),
(188, 1, 'admin', '2019-10-14 18:08:08', '0000-00-00', '0000-00-00'),
(189, 1, 'admin', '2019-10-14 18:08:23', '0000-00-00', '0000-00-00'),
(190, 1, 'admin', '2019-10-14 18:08:28', '0000-00-00', '0000-00-00'),
(191, 1, 'admin', '2019-10-14 18:14:03', '0000-00-00', '0000-00-00'),
(192, 1, 'admin', '2019-10-14 18:14:46', '0000-00-00', '0000-00-00'),
(193, 1, 'admin', '2019-10-14 18:18:34', '0000-00-00', '0000-00-00'),
(194, 1, 'admin', '2019-10-14 18:19:20', '0000-00-00', '0000-00-00'),
(195, 1, 'admin', '2019-10-14 18:21:15', '0000-00-00', '0000-00-00'),
(196, 1, 'admin', '2019-10-14 18:21:38', '0000-00-00', '0000-00-00'),
(197, 1, 'admin', '2019-10-14 18:22:38', '0000-00-00', '0000-00-00'),
(198, 1, 'admin', '2019-10-14 18:22:52', '0000-00-00', '0000-00-00'),
(199, 1, 'admin', '2019-10-14 18:25:40', '0000-00-00', '0000-00-00'),
(200, 1, 'admin', '2019-10-14 18:29:04', '0000-00-00', '0000-00-00'),
(201, 1, 'admin', '2019-10-14 18:52:35', '0000-00-00', '0000-00-00'),
(202, 1, 'admin', '2019-10-14 19:03:14', '0000-00-00', '0000-00-00'),
(203, 1, 'admin', '2019-10-14 19:05:51', '0000-00-00', '0000-00-00'),
(204, 1, 'admin', '2019-10-14 19:06:58', '0000-00-00', '0000-00-00'),
(205, 1, 'admin', '2019-10-14 19:07:33', '0000-00-00', '0000-00-00'),
(206, 1, 'admin', '2019-10-14 19:07:59', '0000-00-00', '0000-00-00'),
(207, 1, 'admin', '2019-10-14 19:08:13', '0000-00-00', '0000-00-00'),
(208, 1, 'admin', '2019-10-14 19:10:00', '0000-00-00', '0000-00-00'),
(209, 1, 'admin', '2019-10-14 19:10:56', '0000-00-00', '0000-00-00'),
(210, 1, 'admin', '2019-10-14 19:11:34', '0000-00-00', '0000-00-00'),
(211, 1, 'admin', '2019-10-14 19:21:37', '0000-00-00', '0000-00-00'),
(212, 1, 'admin', '2019-10-14 19:21:47', '0000-00-00', '0000-00-00'),
(213, 1, 'admin', '2019-10-14 19:22:22', '0000-00-00', '0000-00-00'),
(214, 1, 'admin', '2019-10-14 19:24:58', '0000-00-00', '0000-00-00'),
(215, 1, 'admin', '2019-10-14 19:25:52', '0000-00-00', '0000-00-00'),
(216, 1, 'admin', '2019-10-14 19:25:55', '0000-00-00', '0000-00-00'),
(217, 1, 'admin', '2019-10-14 19:26:12', '0000-00-00', '0000-00-00'),
(218, 1, 'admin', '2019-10-14 19:26:40', '0000-00-00', '0000-00-00'),
(219, 1, 'admin', '2019-10-14 19:26:44', '0000-00-00', '0000-00-00'),
(220, 1, 'admin', '2019-10-15 01:15:11', '0000-00-00', '0000-00-00'),
(221, 1, 'admin', '2019-10-15 01:16:20', '0000-00-00', '0000-00-00'),
(222, 9, 'Juan Gomez', '2019-10-15 22:43:59', '0000-00-00', '0000-00-00'),
(223, 1, 'admin', '2019-10-15 22:54:20', '0000-00-00', '0000-00-00'),
(224, 26, 'asd', '2019-10-16 21:21:31', '0000-00-00', '0000-00-00'),
(225, 26, 'asd', '2019-10-16 22:11:19', '0000-00-00', '0000-00-00'),
(226, 28, 'testPath', '2019-10-16 23:00:06', '0000-00-00', '0000-00-00'),
(227, 28, 'testPath', '2019-10-16 23:00:31', '0000-00-00', '0000-00-00'),
(228, 28, 'testPath', '2019-10-17 00:44:10', '0000-00-00', '0000-00-00'),
(229, 28, 'testPath', '2019-10-17 00:50:03', '0000-00-00', '0000-00-00'),
(230, 13, 'Jose Walter', '2019-10-17 01:02:09', '0000-00-00', '0000-00-00'),
(231, 13, 'Jose Walter', '2019-10-17 01:02:48', '0000-00-00', '0000-00-00'),
(232, 13, 'Jose Walter', '2019-10-17 01:05:03', '0000-00-00', '0000-00-00'),
(233, 13, 'Jose Walter', '2019-10-17 01:12:22', '0000-00-00', '0000-00-00'),
(234, 13, 'Jose Walter', '2019-10-17 01:13:57', '0000-00-00', '0000-00-00'),
(235, 13, 'Jose Walter', '2019-10-17 01:15:17', '0000-00-00', '0000-00-00'),
(236, 13, 'Jose Walter', '2019-10-17 01:15:52', '0000-00-00', '0000-00-00'),
(237, 13, 'Jose Walter', '2019-10-17 01:16:35', '0000-00-00', '0000-00-00'),
(238, 13, 'Jose Walter', '2019-10-17 01:17:04', '0000-00-00', '0000-00-00'),
(239, 13, 'Jose Walter', '2019-10-17 01:17:42', '0000-00-00', '0000-00-00'),
(240, 13, 'Jose Walter', '2019-10-17 01:18:02', '0000-00-00', '0000-00-00'),
(241, 13, 'Jose Walter', '2019-10-17 01:22:29', '0000-00-00', '0000-00-00'),
(242, 13, 'Jose Walter', '2019-10-17 01:24:17', '0000-00-00', '0000-00-00'),
(243, 13, 'Jose Walter', '2019-10-17 01:26:40', '0000-00-00', '0000-00-00'),
(244, 13, 'Jose Walter', '2019-10-17 01:26:55', '0000-00-00', '0000-00-00'),
(245, 13, 'Jose Walter', '2019-10-17 01:27:44', '0000-00-00', '0000-00-00'),
(246, 13, 'Jose Walter', '2019-10-17 01:28:52', '0000-00-00', '0000-00-00'),
(247, 13, 'Jose Walter', '2019-10-17 01:29:08', '0000-00-00', '0000-00-00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menus`
--

CREATE TABLE `menus` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `tipo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `menus`
--

INSERT INTO `menus` (`id`, `nombre`, `tipo`, `precio`, `created_at`, `updated_at`) VALUES
(2, 'milanesa con papas', 'comida', 150, '2019-06-30', '2019-06-30'),
(3, 'colorada', 'cerveza', 150, '2019-06-30', '2019-06-30'),
(4, 'cuba libre', 'trago', 150, '2019-06-30', '2019-06-30'),
(5, 'daikiri', 'trago', 70, '2019-06-30', '2019-06-30'),
(6, 'flan con dulce de leche', 'postre', 100, '2019-06-30', '2019-06-30'),
(7, 'chocotorta', 'postre', 100, '2019-06-30', '2019-06-30'),
(8, 'ensalada', 'comida', 120, '2019-06-30', '2019-06-30'),
(9, 'rubia', 'cerveza', 120, '2019-06-30', '2019-06-30'),
(10, 'tinto', 'vino', 200, '2019-06-30', '2019-06-30'),
(11, 'blanco', 'vino', 250, '2019-06-30', '2019-06-30'),
(12, 'malbec', 'vino', 250, '2019-06-30', '2019-06-30'),
(13, 'negra', 'cerveza', 130, '2019-06-30', '2019-06-30'),
(14, 'brownie', 'postre', 95, '2019-06-30', '2019-06-30'),
(15, 'pizza de muzzarela', 'comida', 170, '2019-06-30', '2019-06-30'),
(16, 'pizza de anana', 'comida', 30, '2019-06-30', '2019-06-30'),
(17, 'empanadas de carne', 'comida', 35, '2019-06-30', '2019-06-30'),
(18, 'empanadas de jamon y queso', 'comida', 35, '2019-06-30', '2019-06-30'),
(19, 'empanadas de pollo', 'comida', 35, '2019-06-30', '2019-06-30'),
(20, 'empanadas de pi??a', 'comida', 35, '2019-06-30', '2019-06-30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mesas`
--

CREATE TABLE `mesas` (
  `id` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `estado` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `codigo_identificacion` varchar(7) COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `mesas`
--

INSERT INTO `mesas` (`id`, `id_pedido`, `estado`, `codigo_identificacion`, `created_at`, `updated_at`) VALUES
(1, 0, 'cerrada', 'ztpRS', '2019-06-30', '2019-06-30'),
(2, 2, 'con cliente esperando pedido', 'd0rJ5', '2019-06-30', '2019-06-30'),
(3, 0, 'cerrada', 'jFBz7', '2019-06-30', '2019-06-30'),
(4, 0, 'cerrada', 'SB9se', '2019-06-30', '2019-06-30'),
(5, 3, 'con cliente esperando pedido', 'iIwlY', '2019-06-30', '2019-10-13'),
(6, 0, 'cerrada', 'PjNXd', '2019-06-30', '2019-06-30'),
(7, 0, 'cerrada', 'LNqYp', '2019-06-30', '2019-06-30'),
(8, 0, 'cerrada', '3vm8N', '2019-06-30', '2019-06-30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `n_mesa` int(11) NOT NULL,
  `estado` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `foto` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `codigo_pedido` varchar(7) COLLATE utf8_spanish2_ci NOT NULL,
  `id_empleado` int(11) NOT NULL,
  `importe` int(11) NOT NULL,
  `pedido_realizado` time NOT NULL,
  `pedido_en_preparacion` time NOT NULL,
  `pedido_listo_para_servir` time NOT NULL,
  `pedido_entregado` time NOT NULL,
  `tiempo_estimado` time NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `n_mesa`, `estado`, `foto`, `codigo_pedido`, `id_empleado`, `importe`, `pedido_realizado`, `pedido_en_preparacion`, `pedido_listo_para_servir`, `pedido_entregado`, `tiempo_estimado`, `created_at`, `updated_at`) VALUES
(1, 2, 'Entregado', '../files/fotos/Mesa_2_Pedido_VFlr2.PNG', 'VFlr2', 9, 1150, '15:10:25', '15:14:54', '15:20:22', '15:21:17', '15:33:13', '2019-06-30', '2019-06-30'),
(2, 2, 'Pendiente', '../files/fotos/Mesa_2_Pedido_KekAa.PNG', 'KekAa', 9, 1680, '18:09:26', '00:00:00', '00:00:00', '18:43:00', '18:18:00', '2019-06-30', '2019-06-30'),
(3, 5, 'Pendiente', '../files/fotos/Mesa_5_Pedido_hGvi1.PNG', 'hGvi1', 9, 1680, '21:57:18', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '2019-10-13', '2019-10-13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rates`
--

CREATE TABLE `rates` (
  `id` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `id_mesa` int(11) NOT NULL,
  `rate_mesa` int(11) NOT NULL,
  `rate_mozo` int(11) NOT NULL,
  `rate_cocinero` int(11) NOT NULL,
  `rate_restaurant` int(11) NOT NULL,
  `comentario` varchar(66) COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `rates`
--

INSERT INTO `rates` (`id`, `id_pedido`, `id_mesa`, `rate_mesa`, `rate_mozo`, `rate_cocinero`, `rate_restaurant`, `comentario`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 5, 9, 10, 8, 'Muy bueno todo. Se podria mejorar la presentacion de la mesa.', '2019-06-30', '2019-06-30');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alimentos`
--
ALTER TABLE `alimentos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `importes`
--
ALTER TABLE `importes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `logueos`
--
ALTER TABLE `logueos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mesas`
--
ALTER TABLE `mesas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rates`
--
ALTER TABLE `rates`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alimentos`
--
ALTER TABLE `alimentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `importes`
--
ALTER TABLE `importes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `logueos`
--
ALTER TABLE `logueos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=248;

--
-- AUTO_INCREMENT de la tabla `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `mesas`
--
ALTER TABLE `mesas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `rates`
--
ALTER TABLE `rates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
