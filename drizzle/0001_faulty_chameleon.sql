CREATE TABLE `quote_requests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(160) NOT NULL,
	`company` varchar(220),
	`email` varchar(320) NOT NULL,
	`phone` varchar(80),
	`projectType` varchar(180) NOT NULL,
	`projectLocation` varchar(220),
	`requiredService` varchar(180) NOT NULL,
	`details` text NOT NULL,
	`deadline` varchar(180),
	`attachmentName` varchar(255),
	`attachmentKey` varchar(500),
	`attachmentUrl` varchar(700),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `quote_requests_id` PRIMARY KEY(`id`)
);
