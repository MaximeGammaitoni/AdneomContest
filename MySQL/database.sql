CREATE TABLE `avatar` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `picture` varchar(32) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `mail` varchar(32) NOT NULL DEFAULT '',
  `name` varchar(32) NOT NULL DEFAULT '',
  `points` INT NOT NULL DEFAULT 0,
  `fk_avatar` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`fk_avatar`) REFERENCES avatar (`id`)
);

CREATE TABLE `games` (
  `id` INT NULL AUTO_INCREMENT,
  `name` INT NOT NULL,
  `difficuty` INT NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `games_history` (
  `id` INT NULL AUTO_INCREMENT,
  `fk_game` INT NOT NULL,
  `fk_user_1` INT NOT NULL,
  `fk_user_2` INT NOT NULL,
  `fk_user_3` INT DEFAULT 0,
  `fk_user_4` INT DEFAULT 0,
  `winners` varchar(32) NOT NULL,
  `amount_of_points` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`fk_user_1`) REFERENCES users (`id`),
  FOREIGN KEY (`fk_user_2`) REFERENCES users (`id`),
  FOREIGN KEY (`fk_user_3`) REFERENCES users (`id`),
  FOREIGN KEY (`fk_user_4`) REFERENCES users (`id`)
);