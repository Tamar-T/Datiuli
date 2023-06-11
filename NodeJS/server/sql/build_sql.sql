CREATE SCHEMA IF NOT EXISTS `project` DEFAULT CHARACTER SET ucs2 ;

-- Services
CREATE TABLE IF NOT EXISTS `project`.`Services` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `typeOfService` INT NOT NULL,
  `phone` VARCHAR(45) NULL,
  `address` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- TypeOfService
CREATE TABLE IF NOT EXISTS `project`.`TypeOfService` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `serviceName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- Times
CREATE TABLE IF NOT EXISTS `project`.`Times` (
  `id` INT NOT NULL AUTO_INCREMENT, 
  `beginTime` TIME NULL,
  `endTime` TIME NULL,
`service` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- Extends services ---------------------------------
-- Hotels
CREATE TABLE IF NOT EXISTS `project`.`Hotels` (
  `id` INT NOT NULL,
  `manager` VARCHAR(45) NULL,
  `stars` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- Restaurants
CREATE TABLE IF NOT EXISTS `project`.`Restaurants` (
  `id` INT NOT NULL,
  `cosher` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- Sites
CREATE TABLE IF NOT EXISTS `project`.`Sites` (
  `id` INT NOT NULL,
  `typeOfActivity` VARCHAR(45) NULL,
  `ages` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- Tours
CREATE TABLE IF NOT EXISTS `project`.`Tours` (
  `id` INT NOT NULL,
  `guide` VARCHAR(45) NULL,
  `phoneGuide` VARCHAR(10) NULL,
  `placeOfDeparture` VARCHAR(45) NULL,
  `duration` float NULL,
  `track` VARCHAR(100) NULL,
  `ages` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- Synagogues
CREATE TABLE IF NOT EXISTS `project`.`Synagogues` (
  `id` INT NOT NULL,
  `rabbi` VARCHAR(45) NULL,
  `nusach` VARCHAR(45) NULL,
  `community` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- Lectures - (Synagogues)
CREATE TABLE IF NOT EXISTS `project`.`Lectures` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lecturer` VARCHAR(45) NULL,
  `subject` VARCHAR(45) NULL,
  `date` DATE NULL,
  `time` TIME NULL,
  `duration` VARCHAR(45) NULL,
  `synagogue` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- MemorialDays - (Cemeteries)
CREATE TABLE IF NOT EXISTS `project`.`MemorialDays` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `subject` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `cemetery` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- Users
CREATE TABLE IF NOT EXISTS `project`.`Users` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `userName` VARCHAR(45) NULL,
  `country` VARCHAR(45) NULL,
  `language` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `permission` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- Permission
CREATE TABLE IF NOT EXISTS `project`.`Permission` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `permissionLevel` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- Extends users ---------------------------------
-- Administration
CREATE TABLE IF NOT EXISTS `project`.`Administration` (
  `id` INT NOT NULL ,
  `community` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;



--   Foreign Keys
 ALTER TABLE `project`.`services` 
 ADD INDEX `typeOfService _idx` (`typeOfService` ASC) VISIBLE;
 ;
ALTER TABLE `project`.`services` 
ADD CONSTRAINT `typeOfService `
  FOREIGN KEY (`typeOfService`)
  REFERENCES `project`.`typeofservice` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
  ALTER TABLE `project`.`times` 
 ADD INDEX `service _idx` (`service` ASC) VISIBLE;
;
ALTER TABLE `project`.`times` 
ADD CONSTRAINT `service `
  FOREIGN KEY (`service`)
  REFERENCES `project`.`services` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

  --  services inhertence
  ALTER TABLE `project`.`hotels` 
ADD CONSTRAINT `id_hotels`
  FOREIGN KEY (`id`)
  REFERENCES `project`.`services` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

  ALTER TABLE `project`.`restaurants` 
ADD CONSTRAINT `id_restaurants`
  FOREIGN KEY (`id`)
  REFERENCES `project`.`services` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
  ALTER TABLE `project`.`sites` 
ADD CONSTRAINT `id_sites`
  FOREIGN KEY (`id`)
  REFERENCES `project`.`services` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `project`.`tours` 
ADD CONSTRAINT `id_tours`
  FOREIGN KEY (`id`)
  REFERENCES `project`.`services` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `project`.`synagogues` 
ADD CONSTRAINT `id_synagogue `
  FOREIGN KEY (`id`)
  REFERENCES `project`.`services` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
--   Foreigservicesn Keys End --

 ALTER TABLE `project`.`lectures` 
  ADD INDEX `lecture_synagogue _idx` (`synagogue` ASC) VISIBLE;
 ;
ALTER TABLE `project`.`lectures` 
ADD CONSTRAINT `lecture_synagogue `
  FOREIGN KEY (`synagogue`)
  REFERENCES `project`.`synagogues` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

 ALTER TABLE `project`.`memorialdays` 
 ADD INDEX `cemetery_services_idx` (`cemetery` ASC) VISIBLE;
 ;
ALTER TABLE `project`.`memorialdays` 
ADD CONSTRAINT `cemetery_services`
  FOREIGN KEY (`cemetery`)
  REFERENCES `project`.`services` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

 ALTER TABLE `project`.`users` 
 ADD INDEX `user_permission_idx` (`permission` ASC) VISIBLE;
  ;
ALTER TABLE `project`.`users` 
ADD CONSTRAINT `user_permission`
  FOREIGN KEY (`permission`)
  REFERENCES `project`.`permission` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

--   Foreign Keys End --



