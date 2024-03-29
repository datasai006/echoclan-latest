-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2024 at 05:57 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecoclan-latest`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_categories`
--

CREATE TABLE `tbl_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `short_description` text DEFAULT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(150) DEFAULT NULL,
  `updated_by` varchar(150) DEFAULT NULL,
  `category_image` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_categories`
--

INSERT INTO `tbl_categories` (`id`, `name`, `short_description`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`, `category_image`) VALUES
(1, 'Apparel', 'clothing, especially outerwear; garments; attire; raiment', 'ACTIVE', '2023-05-05 06:00:23', '2023-05-05 06:00:23', NULL, NULL, '\"C:\\node new\\ECOCLAN-LATEST\\images\\Apparel.png\"'),
(2, 'Electronics', 'clocks, small DIY tools, hairdryers, kettles, phones, radios, electronic toys, mobiles, laptops and monitors.', 'ACTIVE', '2023-05-05 06:00:23', '2023-05-05 06:00:23', NULL, NULL, '\"C:\\node new\\ECOCLAN-LATEST\\images\\mobiecom.png\"'),
(3, 'Appliances', 'Rice cooker,\r\nGriddle, Pressure cooker,\r\nElectric kettle,\r\nDeep fryer,\r\nWaffle iron,\r\nBread machine,\r\nPasta maker,\r\nJuicer, oven, stoves', 'ACTIVE', '2023-05-05 06:04:05', '2023-05-05 06:04:05', NULL, NULL, '\"C:\\node new\\ECOCLAN-LATEST\\images\\smallapp.png\"'),
(4, 'Misc', 'miscellaneous items', 'ACTIVE', '2023-05-05 06:04:05', '2023-05-05 06:04:05', NULL, NULL, '\"C:\\node new\\ECOCLAN-LATEST\\images\\misc.png\"'),
(5, 'Plastic', 'PET-polyethylene terephthalate,\r\nHDPE-High-Density Polyethylene,\r\nPVC-Polyvinyl chloride,\r\nLDPE-low-density molecules,\r\nPP-Polypropylene ,\r\nPS-Polystyrene,\r\nOTHER PLASTIC\r\n', 'ACTIVE', '2023-05-05 06:04:05', '2023-05-05 06:04:05', NULL, NULL, '\"C:\\node new\\ECOCLAN-LATEST\\images\\plastic-colot.png\"'),
(6, 'Metals', 'aluminum, aluminum alloys, copper, brass, gold, nickel, silver, tin, lead, and zinc. Non-ferrous metals are used for industrial purposes like airplanes, gutters, roofing, pipes, and electrical wiring.', 'ACTIVE', '2023-05-05 06:04:05', '2023-05-05 06:04:05', NULL, NULL, '\"C:\\node new\\ECOCLAN-LATEST\\images\\metal.png\"'),
(7, 'Cars & Bikes', 'old cars & bikes', 'ACTIVE', '2023-05-05 06:04:05', '2023-05-05 06:04:05', NULL, NULL, '\"C:\\node new\\ECOCLAN-LATEST\\images\\bike (1).png\"'),
(8, 'Recyables', 'tires, jerry cans,\r\ntables,\r\nchairs,\r\ntetra packs,\r\nbatteries,\r\nrubber', 'ACTIVE', '2023-05-05 06:04:05', '2023-05-05 06:04:05', NULL, NULL, '\"C:\\node new\\ECOCLAN-LATEST\\images\\recycle-bin.png\"');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_orders`
--

CREATE TABLE `tbl_orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `total_items` varchar(200) NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `service_type` varchar(100) DEFAULT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'ACTIVE',
  `order_Status` varchar(50) NOT NULL DEFAULT 'PROCESSING',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(150) DEFAULT NULL,
  `updated_by` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_orders`
--

INSERT INTO `tbl_orders` (`id`, `user_id`, `order_date`, `total_items`, `total_amount`, `service_type`, `status`, `order_Status`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 1, '2023-05-02 05:35:50', '16', '4300.00', NULL, 'ACTIVE', 'PROCESSING', '2023-05-02 11:05:50', '2023-05-02 11:05:50', NULL, NULL),
(2, 2, '2023-05-04 00:06:19', '17', '5500.00', NULL, 'ACTIVE', 'PROCESSING', '2023-05-04 05:36:19', '2023-05-04 05:36:19', NULL, NULL),
(3, 3, '2023-05-04 04:12:45', '15', '2500.00', NULL, 'ACTIVE', 'PROCESSING', '2023-05-04 09:42:45', '2023-05-04 09:42:45', NULL, NULL),
(4, 1, '2023-05-04 04:27:01', '15', '2500.00', NULL, 'ACTIVE', 'PROCESSING', '2023-05-04 09:57:01', '2023-05-04 09:57:01', NULL, NULL),
(5, 1, '2023-05-14 22:57:53', '15', '2500.00', NULL, 'ACTIVE', 'PROCESSING', '2023-05-15 04:27:53', '2023-05-15 04:27:53', NULL, NULL),
(6, 1, '2023-05-17 06:00:33', '15', '2500.00', NULL, 'ACTIVE', 'PROCESSING', '2023-05-17 11:30:33', '2023-05-17 11:30:33', NULL, NULL),
(7, 5, '2023-05-18 01:08:27', '15', '2500.00', NULL, 'ACTIVE', 'PROCESSING', '2023-05-18 06:38:27', '2023-05-18 06:38:27', NULL, NULL),
(9, 2, '2023-05-18 01:59:32', '15', '2500.00', NULL, 'ACTIVE', 'PROCESSING', '2023-05-18 07:29:32', '2023-05-18 07:29:32', NULL, NULL),
(10, 2, '2023-05-19 09:06:43', '15', '2500.00', NULL, 'ACTIVE', 'PROCESSING', '2023-05-19 14:36:43', '2023-05-19 14:36:43', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_order_details`
--

CREATE TABLE `tbl_order_details` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(40) NOT NULL,
  `quantity` int(40) NOT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(150) DEFAULT NULL,
  `updated_by` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_order_details`
--

INSERT INTO `tbl_order_details` (`id`, `order_id`, `product_id`, `quantity`, `amount`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 1, 4, 7, '1400.00', 'ACTIVE', '2023-05-02 11:05:50', '2023-05-02 11:05:50', NULL, NULL),
(2, 1, 2, 5, '2500.00', 'ACTIVE', '2023-05-02 11:05:50', '2023-05-02 11:05:50', NULL, NULL),
(3, 1, 6, 4, '400.00', 'ACTIVE', '2023-05-02 11:05:50', '2023-05-02 11:05:50', NULL, NULL),
(4, 2, 2, 7, '3500.00', 'ACTIVE', '2023-05-04 05:36:19', '2023-05-04 05:36:19', NULL, NULL),
(5, 2, 3, 5, '1500.00', 'ACTIVE', '2023-05-04 05:36:19', '2023-05-04 05:36:19', NULL, NULL),
(6, 2, 6, 5, '500.00', 'ACTIVE', '2023-05-04 05:36:19', '2023-05-04 05:36:19', NULL, NULL),
(7, 3, 12, 5, '1000.00', 'ACTIVE', '2023-05-04 09:42:45', '2023-05-04 09:42:45', NULL, NULL),
(8, 3, 5, 5, '1000.00', 'ACTIVE', '2023-05-04 09:42:45', '2023-05-04 09:42:45', NULL, NULL),
(9, 3, 15, 5, '500.00', 'ACTIVE', '2023-05-04 09:42:45', '2023-05-04 09:42:45', NULL, NULL),
(10, 4, 12, 5, '1000.00', 'ACTIVE', '2023-05-04 09:57:01', '2023-05-04 09:57:01', NULL, NULL),
(11, 4, 5, 5, '1000.00', 'ACTIVE', '2023-05-04 09:57:01', '2023-05-04 09:57:01', NULL, NULL),
(12, 4, 15, 5, '500.00', 'ACTIVE', '2023-05-04 09:57:01', '2023-05-04 09:57:01', NULL, NULL),
(13, 5, 12, 5, '1000.00', 'ACTIVE', '2023-05-15 04:27:53', '2023-05-15 04:27:53', NULL, NULL),
(14, 5, 5, 5, '1000.00', 'ACTIVE', '2023-05-15 04:27:53', '2023-05-15 04:27:53', NULL, NULL),
(15, 5, 15, 5, '500.00', 'ACTIVE', '2023-05-15 04:27:53', '2023-05-15 04:27:53', NULL, NULL),
(16, 6, 12, 5, '1000.00', 'ACTIVE', '2023-05-17 11:30:33', '2023-05-17 11:30:33', NULL, NULL),
(17, 6, 5, 5, '1000.00', 'ACTIVE', '2023-05-17 11:30:33', '2023-05-17 11:30:33', NULL, NULL),
(18, 6, 15, 5, '500.00', 'ACTIVE', '2023-05-17 11:30:33', '2023-05-17 11:30:33', NULL, NULL),
(19, 7, 12, 5, '1000.00', 'ACTIVE', '2023-05-18 06:38:27', '2023-05-18 06:38:27', NULL, NULL),
(20, 7, 5, 5, '1000.00', 'ACTIVE', '2023-05-18 06:38:27', '2023-05-18 06:38:27', NULL, NULL),
(21, 7, 15, 5, '500.00', 'ACTIVE', '2023-05-18 06:38:27', '2023-05-18 06:38:27', NULL, NULL),
(22, 9, 12, 5, '1000.00', 'ACTIVE', '2023-05-18 07:29:32', '2023-05-18 07:29:32', NULL, NULL),
(23, 9, 5, 5, '1000.00', 'ACTIVE', '2023-05-18 07:29:32', '2023-05-18 07:29:32', NULL, NULL),
(24, 9, 15, 5, '500.00', 'ACTIVE', '2023-05-18 07:29:32', '2023-05-18 07:29:32', NULL, NULL),
(25, 10, 12, 5, '1000.00', 'ACTIVE', '2023-05-19 14:36:43', '2023-05-19 14:36:43', NULL, NULL),
(26, 10, 5, 5, '1000.00', 'ACTIVE', '2023-05-19 14:36:43', '2023-05-19 14:36:43', NULL, NULL),
(27, 10, 15, 5, '500.00', 'ACTIVE', '2023-05-19 14:36:43', '2023-05-19 14:36:43', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_products`
--

CREATE TABLE `tbl_products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `short_description` text DEFAULT NULL,
  `product_image` varchar(250) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'ACTIVE',
  `unit_type` varchar(100) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(150) DEFAULT NULL,
  `updated_by` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_products`
--

INSERT INTO `tbl_products` (`id`, `name`, `short_description`, `product_image`, `price`, `status`, `unit_type`, `category_id`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 'all clothing', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\clothes.png\"', '200.00', 'PROCESSING', 'kg', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(2, 'laptop', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\laptop.png\"', '500.00', 'PROCESSING', 'piece', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(3, 'monitor', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\monitor.png\"', '300.00', 'PROCESSING', 'piece', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(4, 'mobile', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\mobile.png\"', '200.00', 'PROCESSING', 'piece', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(5, 'tablet', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\tablet.png\"', '200.00', 'PROCESSING', 'piece', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(6, 'cpu', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\cpu.png\"', '100.00', 'PROCESSING', 'piece', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(7, 'smart watch', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\smartwatch.png\"', '100.00', 'PROCESSING', 'piece', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(8, 'mixer', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\mixer.png\"', '500.00', 'PROCESSING', 'piece', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(9, 'large', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\largeapp2.png\"', '700.00', 'PROCESSING', 'piece', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(10, 'toaster', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\toaster.png\"', '300.00', 'PROCESSING', 'piece', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(11, 'stoves', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\gas-stove.png\"', '300.00', 'PROCESSING', 'piece', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(12, 'keetles', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\electric-kettle.png\"', '200.00', 'PROCESSING', 'piece', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(13, 'others', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\othersitems.png\"', '100.00', 'PROCESSING', 'piece', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(14, 'PET', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\plastic-mix.png\"', '100.00', 'PROCESSING', 'kg', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(15, 'PP', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\plasticplates.png\"', '100.00', 'PROCESSING', 'kg', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(16, 'PVC', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\pvc pipes.png\"', '100.00', 'PROCESSING', 'kg', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(17, 'HDPE', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\milk-products.png\"', '100.00', 'PROCESSING', 'kg', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(18, 'HARD', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\gas-can.png\"', '100.00', 'PROCESSING', 'kg', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(19, 'OTHERS', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\gas-can.png\"', '100.00', 'PROCESSING', 'kg', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(20, 'iron', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\iron.png\"', '140.00', 'PROCESSING', 'kg', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(21, 'aluminium', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\aluminium.png\"', '230.00', 'PROCESSING', 'kg', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(22, 'steel', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\steel.png\"', '260.00', 'PROCESSING', 'kg', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(23, 'copper', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\copper.png\"', '300.00', 'PROCESSING', 'kg', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(24, 'zinc', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\zinc.png\"', '130.00', 'PROCESSING', 'kg', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(25, 'mixed', '', '\"C:\\node new\\ECOCLAN-LATEST\\images\\mixed.png\"', '80.00', 'PROCESSING', 'kg', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(26, 'tire', '', '', '100.00', 'PROCESSING', 'piece', 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(27, 'cars', '', '', '15000.00', 'PROCESSING', 'piece', 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(28, 'bikes', '', '', '5000.00', 'PROCESSING', 'piece', 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(29, 'drums', '', '', '1000.00', 'PROCESSING', 'piece', 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(30, 'jerry can', '', '', '500.00', 'PROCESSING', 'piece', 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(31, 'others', '', '', '100.00', 'PROCESSING', 'piece', 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(50, 'trimmer', '', 'LOAD_FILE(C:UsersshaikOneDriveDesktopfrontendsweetshopimagesaklava.jpeg', '600.00', 'PROCESSING', '', 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '[value-11]', '[value-12]'),
(52, 'remote', '', 'C:UsersshaikOneDriveDesktopfrontendsweetshopimagesaklava.jpeg', '300.00', 'PROCESSING', '12', 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '[value-11]', '[value-12]');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_wallet`
--

CREATE TABLE `tbl_wallet` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `amount_in` decimal(10,2) DEFAULT NULL,
  `amount_out` decimal(10,2) DEFAULT NULL,
  `amount_from` varchar(150) NOT NULL DEFAULT 'Ecoclan Payments',
  `amount_to` varchar(150) DEFAULT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(150) DEFAULT NULL,
  `updated_by` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_wallet`
--

INSERT INTO `tbl_wallet` (`id`, `user_id`, `amount_in`, `amount_out`, `amount_from`, `amount_to`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 1, '4000.00', NULL, 'Eco-003', 'venkatesh', 'ACTIVE', '2023-05-08 09:22:25', '2023-05-08 09:22:25', NULL, NULL),
(2, 1, NULL, '2000.00', 'Eco-003', 'venkatesh', 'ACTIVE', '2023-05-08 09:22:33', '2023-05-08 09:22:33', NULL, NULL),
(3, 1, '4000.00', NULL, 'Eco-003', 'venkatesh', 'ACTIVE', '2023-05-08 09:22:42', '2023-05-08 09:22:42', NULL, NULL),
(4, 1, '4000.00', NULL, 'Eco-003', 'venkatesh', 'ACTIVE', '2023-05-08 09:25:29', '2023-05-08 09:25:29', NULL, NULL),
(5, 2, '4000.00', NULL, 'Eco-003', 'nawaz', 'ACTIVE', '2023-05-08 09:25:38', '2023-05-08 09:25:38', NULL, NULL),
(6, 3, '4000.00', NULL, 'Eco-003', 'lokesh', 'ACTIVE', '2023-05-08 09:26:07', '2023-05-08 09:26:07', NULL, NULL),
(7, 3, NULL, '2000.00', 'Eco-003', 'lokesh', 'ACTIVE', '2023-05-08 09:26:26', '2023-05-08 09:26:26', NULL, NULL),
(8, 2, NULL, '200.00', 'Eco-003', 'nawaz', 'ACTIVE', '2023-05-08 09:30:15', '2023-05-08 09:30:15', NULL, NULL),
(9, 3, '4000.00', NULL, 'Eco-003', 'lokesh', 'ACTIVE', '2023-05-08 09:32:40', '2023-05-08 09:32:40', NULL, NULL),
(10, 1, '4000.00', NULL, 'Eco-003', 'venkatesh', 'ACTIVE', '2023-05-08 09:32:47', '2023-05-08 09:32:47', NULL, NULL),
(11, 1, '4000.00', NULL, 'Eco-003', 'venkatesh', 'ACTIVE', '2023-05-08 09:34:42', '2023-05-08 09:34:42', NULL, NULL),
(12, 1, '6000.00', NULL, 'Eco-003', 'venkatesh', 'ACTIVE', '2023-05-08 09:35:02', '2023-05-08 09:35:02', NULL, NULL),
(13, 2, NULL, '200.00', 'Eco-003', 'nawaz', 'ACTIVE', '2023-05-08 09:35:38', '2023-05-08 09:35:38', NULL, NULL),
(14, 1, NULL, '2000.00', 'Eco-003', 'venkatesh', 'ACTIVE', '2023-05-08 09:36:15', '2023-05-08 09:36:15', NULL, NULL),
(15, 1, '6000.00', NULL, 'Eco-003', 'venkatesh', 'ACTIVE', '2023-05-08 09:36:26', '2023-05-08 09:36:26', NULL, NULL),
(16, 1, '6000.00', NULL, 'Eco-003', 'venkatesh', 'ACTIVE', '2023-05-08 09:37:26', '2023-05-08 09:37:26', NULL, NULL),
(17, 1, '6000.00', NULL, 'Eco-003', 'venkatesh', 'ACTIVE', '2023-05-08 09:38:22', '2023-05-08 09:38:22', NULL, NULL),
(18, 1, NULL, '2000.00', 'Eco-003', 'venkatesh', 'ACTIVE', '2023-05-08 09:38:37', '2023-05-08 09:38:37', NULL, NULL),
(19, 1, '6000.00', NULL, 'Eco-003', 'venkatesh', 'ACTIVE', '2023-05-17 11:30:37', '2023-05-17 11:30:37', NULL, NULL),
(20, 1, NULL, '2000.00', 'Eco-003', 'venkatesh', 'ACTIVE', '2023-05-17 11:30:41', '2023-05-17 11:30:41', NULL, NULL),
(21, 1, '6000.00', NULL, 'Eco-003', 'venkatesh', 'ACTIVE', '2023-05-19 14:37:35', '2023-05-19 14:37:35', NULL, NULL),
(22, 1, NULL, '2000.00', 'Eco-003', 'venkatesh', 'ACTIVE', '2023-05-19 14:37:41', '2023-05-19 14:37:41', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `mobile` varchar(100) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `otp` varchar(25) NOT NULL DEFAULT '1111',
  `address` text DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(150) DEFAULT NULL,
  `updated_by` varchar(150) DEFAULT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'PENDING'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `mobile`, `email`, `password`, `otp`, `address`, `createdAt`, `updatedAt`, `created_by`, `updated_by`, `status`) VALUES
(1, 'venkatesh', '7093902414', NULL, '$2b$10$jnGYIHp0PkNCx1BXJF78d.JjHVV0n8nxRSgu54wZlNkSTq9i0LqSG', '1111', NULL, '2023-04-20 10:05:28', '2023-04-20 10:05:28', NULL, NULL, 'ACTIVE'),
(2, 'nawaz', '9908058246', NULL, '$2b$10$4SsjefXqarR9F95EbJeHW.hljHAUHcwM1tAVwsEFx81i.WtJRRyNG', '1111', NULL, '2023-04-20 10:25:01', '2023-04-20 10:25:01', NULL, NULL, 'ACTIVE'),
(3, 'lokesh', '9908058562', NULL, '$2b$10$gBpa0JH60aH6iHTjyQaUAeQfbRUBLRUmV5Go1QjR4Ap8ZtsgP62yu', '1111', NULL, '2023-04-21 06:14:05', '2023-04-21 06:14:05', NULL, NULL, 'ACTIVE'),
(4, 'lokesh', '9908058568', NULL, NULL, '1111', NULL, '2023-04-27 07:15:49', '2023-04-27 07:15:49', NULL, NULL, 'PENDING'),
(5, 'ddd', '9987895645', NULL, '$2b$10$v3Cb95zewZ3s15YChP9ZEuQORYpezJl.BW3BDgVNVvCI0F.oOwJ86', '1111', NULL, '2023-04-27 07:16:13', '2023-04-27 07:16:13', NULL, NULL, 'ACTIVE'),
(6, 'venkatesh', '7396023027', NULL, '$2b$10$xNia72lIUiZFuwZlcvuEd.VDXEMxiPAuC1IVPu8b2jPeswfXN5zyO', '1111', NULL, '2023-04-28 04:23:32', '2023-04-28 04:23:32', NULL, NULL, 'ACTIVE'),
(7, 'sai preethi', '7396023022', NULL, '$2b$10$TZKdZofO5OGusIqWn/jhFO1hMBK3yEHuj8AbTOSstQNMRoXSga/ci', '1111', NULL, '2023-04-28 07:35:30', '2023-04-28 07:35:30', NULL, NULL, 'ACTIVE'),
(8, 'madhu', '1111122222', NULL, NULL, '1111', NULL, '2023-05-03 12:13:57', '2023-05-03 12:13:57', NULL, NULL, 'PENDING'),
(9, 'madhu', '0088447755', NULL, NULL, '1111', NULL, '2023-05-04 05:48:45', '2023-05-04 05:48:45', NULL, NULL, 'PENDING'),
(10, 'madhu', '8554751154', NULL, NULL, '1111', NULL, '2023-05-05 06:14:27', '2023-05-05 06:14:27', NULL, NULL, 'PENDING'),
(11, 'nawaz', '9987858452', NULL, '$2b$10$bXsUCYEb69bXMoW5TM9.DebphnKupr5eMNb/eGr/AwuCxZCspuzNq', '1111', NULL, '2023-05-15 04:53:08', '2023-05-15 04:53:08', NULL, NULL, 'ACTIVE'),
(12, 'Naveen', '7396023028', NULL, '$2b$10$ToKzrfKXo5pW4l18MhIpguhHA3Bp0QXiKAKm99NzX9K8cNpTGwbM.', '1111', NULL, '2023-05-15 07:09:05', '2023-05-15 07:09:05', NULL, NULL, 'ACTIVE'),
(13, 'madhu', '6516516512', NULL, '$2b$10$mN8cdPm3EGShJdfm0hruQ.FE5jMsWH7npEQ.KxkYX4n.tAowe30CK', '1111', NULL, '2023-05-15 09:52:44', '2023-05-15 09:52:44', NULL, NULL, 'ACTIVE'),
(14, 'karan', '5855448521', NULL, NULL, '1111', NULL, '2023-05-16 04:44:39', '2023-05-16 04:44:39', NULL, NULL, 'PENDING'),
(15, 'saip', '1234567891', NULL, '$2b$10$KrPKa84Nm19Djbomcq.lDOWTakypLwIOEKf16x78hNChCDXUhrFrq', '1111', NULL, '2023-05-17 05:16:05', '2023-05-17 05:16:05', NULL, NULL, 'ACTIVE'),
(16, 'SMP NAIMUL NAWAZ', '0123456789', NULL, NULL, '1111', NULL, '2023-05-17 11:14:27', '2023-05-17 11:14:27', NULL, NULL, 'PENDING'),
(17, 'vmky', '9908058241', NULL, '$2b$10$6RRvFbcrNWBR6V70fXsLz.4y0W16dySlKPnwzE/Owlg5QYMFS/DL.', '1111', NULL, '2023-05-17 11:15:13', '2023-05-17 11:15:13', NULL, NULL, 'ACTIVE'),
(18, 'jaganmallu', '  7858251234', NULL, NULL, '1111', NULL, '2023-05-17 11:22:56', '2023-05-17 11:22:56', NULL, NULL, 'PENDING'),
(19, 'shobhabeerala', '9908023027', NULL, '$2b$10$T2ifJrZqMFGci1Vx1K7cDeN3eHwDRJ8cdaNRDAK.eJxbILcUr/hy.', '1111', NULL, '2023-05-17 11:25:15', '2023-05-17 11:25:15', NULL, NULL, 'ACTIVE'),
(20, 'Beerala ', '9876543210', NULL, '$2b$10$H0FaA95RJEfjsJpDN3.zyOz0Ms63E4hztcPDrqnh8NDALOpzyOPLe', '1111', NULL, '2023-05-17 12:00:08', '2023-05-17 12:00:08', NULL, NULL, 'ACTIVE'),
(21, 'Chotu', '1234567890', NULL, '$2b$10$zdB2Aid1h7YU665.cK8ZEO5fZrQE/af1oQt87dzCyVlrYpeXHXvE.', '1111', NULL, '2023-05-17 12:09:20', '2023-05-17 12:09:20', NULL, NULL, 'ACTIVE'),
(22, 'jaganjai', '7858658545', NULL, '$2b$10$c8Nte1ALth8f1M.bN80FZe4cf7eKi0bCpno466Ym7VGXrp4f4SbeK', '1111', NULL, '2023-05-19 14:25:39', '2023-05-19 14:25:39', NULL, NULL, 'ACTIVE'),
(23, 'venkatesh123', '785865845', NULL, NULL, '1111', NULL, '2023-05-20 18:47:12', '2023-05-20 18:47:12', NULL, NULL, 'PENDING'),
(24, 'Bhavitha Donapati', '6301173501', NULL, NULL, '1111', NULL, '2024-03-19 07:38:09', '2024-03-19 07:38:09', NULL, NULL, 'PENDING'),
(25, 'jaganmallu', '7858251234', NULL, NULL, '1111', NULL, '2024-03-19 09:41:16', '2024-03-19 09:41:16', NULL, NULL, 'PENDING');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_categories`
--
ALTER TABLE `tbl_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_orders`
--
ALTER TABLE `tbl_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `tbl_order_details`
--
ALTER TABLE `tbl_order_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `tbl_products`
--
ALTER TABLE `tbl_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `tbl_wallet`
--
ALTER TABLE `tbl_wallet`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_categories`
--
ALTER TABLE `tbl_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_orders`
--
ALTER TABLE `tbl_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_order_details`
--
ALTER TABLE `tbl_order_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `tbl_products`
--
ALTER TABLE `tbl_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `tbl_wallet`
--
ALTER TABLE `tbl_wallet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_orders`
--
ALTER TABLE `tbl_orders`
  ADD CONSTRAINT `tbl_orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `tbl_order_details`
--
ALTER TABLE `tbl_order_details`
  ADD CONSTRAINT `tbl_order_details_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `tbl_orders` (`id`),
  ADD CONSTRAINT `tbl_order_details_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `tbl_products` (`id`);

--
-- Constraints for table `tbl_products`
--
ALTER TABLE `tbl_products`
  ADD CONSTRAINT `tbl_products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `tbl_categories` (`id`);

--
-- Constraints for table `tbl_wallet`
--
ALTER TABLE `tbl_wallet`
  ADD CONSTRAINT `tbl_wallet_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
