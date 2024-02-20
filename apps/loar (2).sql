-- Adminer 4.8.1 MySQL 8.3.0 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `thumb` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `countries`;
CREATE TABLE `countries` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `code` char(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel` char(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `py` char(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `countries_py_tel_name_key` (`py`,`tel`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `member_details`;
CREATE TABLE `member_details` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `after` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `before` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `market` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` int NOT NULL,
  `remark` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `member_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `member_details_member_id_fkey` (`member_id`),
  CONSTRAINT `member_details_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `member_recharges`;
CREATE TABLE `member_recharges` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `money` decimal(10,5) NOT NULL,
  `screen` json NOT NULL,
  `memberId` bigint NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  `status` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `member_recharges_memberId_fkey` (`memberId`),
  CONSTRAINT `member_recharges_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `members` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `member_recharges` (`id`, `money`, `screen`, `memberId`, `created_at`, `updated_at`, `status`) VALUES
(1,	1000.00000,	'[\"aaa.jpg\"]',	1,	'2024-02-19 07:49:04.254',	NULL,	0),
(2,	1000.00000,	'[\"aaa.jpg\"]',	1,	'2024-02-19 07:49:26.582',	NULL,	0),
(3,	1000.00000,	'[\"aaa.jpg\"]',	1,	'2024-02-19 07:58:45.091',	NULL,	0),
(4,	1000.00000,	'[\"aaa.jpg\"]',	1,	'2024-02-19 08:06:35.855',	NULL,	0);

DROP TABLE IF EXISTS `member_subscribes`;
CREATE TABLE `member_subscribes` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `market` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int NOT NULL,
  `money` decimal(10,5) NOT NULL,
  `no` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `winning_amount` int DEFAULT NULL,
  `winning_price` decimal(10,5) DEFAULT NULL,
  `total_winning_price` decimal(10,5) DEFAULT NULL,
  `actual_amount` decimal(10,5) DEFAULT NULL,
  `status` int NOT NULL DEFAULT '1',
  `type` int NOT NULL DEFAULT '0',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  `stock_subscribe_id` bigint NOT NULL,
  `member_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `member_subscribes_member_id_fkey` (`member_id`),
  CONSTRAINT `member_subscribes_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `member_withdraws`;
CREATE TABLE `member_withdraws` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `money` decimal(10,5) NOT NULL,
  `memberId` bigint NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  `remark` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `member_withdraws_memberId_fkey` (`memberId`),
  CONSTRAINT `member_withdraws_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `members` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `members`;
CREATE TABLE `members` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` enum('UNKNOWN','MAN','WOMAN') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'UNKNOWN',
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `accountBalance` json DEFAULT NULL,
  `status` int NOT NULL DEFAULT '0',
  `type` int NOT NULL DEFAULT '0',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  `balance` decimal(10,5) NOT NULL DEFAULT '0.00000',
  `un_balance` decimal(10,5) NOT NULL DEFAULT '0.00000',
  `lock_balance` decimal(10,5) NOT NULL DEFAULT '0.00000',
  PRIMARY KEY (`id`),
  UNIQUE KEY `members_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `members` (`id`, `email`, `name`, `avatar`, `password`, `gender`, `address`, `accountBalance`, `status`, `type`, `created_at`, `updated_at`, `balance`, `un_balance`, `lock_balance`) VALUES
(1,	'123@gmail.com',	NULL,	NULL,	'$2b$10$OGayrv1KB.rMhIBlAioC1.WBvuYrT/y5Fgy0sPB80nMsHg8VKvzxe',	'UNKNOWN',	NULL,	'{}',	1,	1,	'2024-02-19 07:48:09.538',	NULL,	0.00000,	0.00000,	0.00000);

DROP TABLE IF EXISTS `settings`;
CREATE TABLE `settings` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `settings` (`id`, `key`, `value`, `created_at`, `updated_at`) VALUES
(1,	'exchange_rate',	'{\"HKEX\":0.1279}',	'2024-02-19 07:14:49.765',	NULL);

DROP TABLE IF EXISTS `stock_favorites`;
CREATE TABLE `stock_favorites` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `new_price` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `open` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `close` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `high` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `low` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `volume` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extra` json DEFAULT NULL,
  `member_id` bigint NOT NULL,
  `stock_symbol_id` bigint NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `stock_markets`;
CREATE TABLE `stock_markets` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `max_withdrawal` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `min_withdrawal` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fee_rate` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `min_fee` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lever` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mmr` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `allocation_rate` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `frequency` int DEFAULT NULL,
  `binding_hours` int DEFAULT NULL,
  `head_symbols` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sort` int DEFAULT '0',
  `online` int DEFAULT '1',
  `conline` int DEFAULT '1',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `stock_positions`;
CREATE TABLE `stock_positions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `amount` int NOT NULL,
  `blast` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mode` int NOT NULL,
  `status` int NOT NULL,
  `bond` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `identifier` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lever` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '1',
  `stopLoss` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `takeProfit` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `market` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pl` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `rate` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `current_price` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `member_id` bigint NOT NULL,
  `stock_symbol_id` bigint NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `stock_positions_member_id_fkey` (`member_id`),
  KEY `stock_positions_stock_symbol_id_fkey` (`stock_symbol_id`),
  CONSTRAINT `stock_positions_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `stock_positions_stock_symbol_id_fkey` FOREIGN KEY (`stock_symbol_id`) REFERENCES `stock_symbols` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `stock_records`;
CREATE TABLE `stock_records` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `new_price` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `open` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `close` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `high` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `low` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `volume` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `extra` json NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `stock_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `stock_records_stock_id_fkey` (`stock_id`),
  CONSTRAINT `stock_records_stock_id_fkey` FOREIGN KEY (`stock_id`) REFERENCES `stocks` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `stock_resource_records`;
CREATE TABLE `stock_resource_records` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `open` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `high` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `close` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `low` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `time` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stock_resource_id` bigint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `stock_resources`;
CREATE TABLE `stock_resources` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `amount_scope` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `frequency_scope` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `market` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `spread_scope` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `end_at` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_at` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `symbol` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` int NOT NULL DEFAULT '1',
  `status` int NOT NULL DEFAULT '1',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `stock_subscribes`;
CREATE TABLE `stock_subscribes` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `market` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_at` datetime(3) DEFAULT NULL,
  `end_at` datetime(3) DEFAULT NULL,
  `up_at` datetime(3) DEFAULT NULL,
  `circulation` int DEFAULT NULL,
  `remain_circulation` int DEFAULT NULL,
  `ipo_price` decimal(10,5) NOT NULL,
  `issue_price` decimal(10,5) NOT NULL,
  `result_at` datetime(3) DEFAULT NULL,
  `sub_amount` json DEFAULT NULL,
  `status` int NOT NULL DEFAULT '1',
  `type` int NOT NULL DEFAULT '0',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `stock_symbols`;
CREATE TABLE `stock_symbols` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `market` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `online` int NOT NULL DEFAULT '1',
  `symbol` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `showName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `symbol_show_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `trade` int NOT NULL DEFAULT '0',
  `type` int NOT NULL DEFAULT '0',
  `new_price` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `open` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '0.000',
  `close` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '0.000',
  `high` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '0.000',
  `low` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '0.000',
  `amount` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '0.000',
  `volume` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '0.000',
  `change` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `changePercent` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `date` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sync` json DEFAULT NULL,
  `sync_market` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `stock_symbols_symbol_market_key` (`symbol`,`market`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `stocks`;
CREATE TABLE `stocks` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `code` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `symbol` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cname` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sok` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `optional` tinyint(1) NOT NULL DEFAULT '0',
  `new_price` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `open` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `close` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `high` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `low` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `amount` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `volume` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `status` enum('NORMAL','DISABLE','DOWN') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'NORMAL',
  `change` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `changePercent` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '0%',
  `date` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extra` json DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `stocks_code_symbol_type_key` (`code`,`symbol`,`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` enum('UNKNOWN','MAN','WOMAN') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'UNKNOWN',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `users` (`id`, `email`, `name`, `avatar`, `password`, `gender`, `createdAt`, `updatedAt`) VALUES
(1,	'123@gmail.com',	NULL,	NULL,	'$2b$10$3myc3xL21gvYJEyvusANhOW.QpViHsHliUqJ2prXEf1RBSLl7J06y',	'UNKNOWN',	'2024-02-19 07:10:42.186',	NULL);

-- 2024-02-19 11:22:49
