CREATE TABLE `decks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `owner` VARCHAR(30) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `faction` ENUM(
    'chapter',
    'darkness',
    'demons',
    'dvergar',
    'faceless',
    'rha-zack',
    'reborn'
  ) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC)
);