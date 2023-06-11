
-- permission

INSERT INTO `project`.`permission` (`permissionLevel`) VALUES ('administrator');
INSERT INTO `project`.`permission` (`permissionLevel`) VALUES ('rabbi');
INSERT INTO `project`.`permission` (`permissionLevel`) VALUES ('user');

-- users 

INSERT INTO `project`.`users` (`userName`, `country`, `language`, `email`, `password`, `permission`) VALUES ('Tamar', 'USA', 'English', 't@gmail.com', '1234', '3');
INSERT INTO `project`.`users` (`userName`, `country`, `language`, `email`, `password`, `permission`) VALUES ('Moshe', 'USA', 'english', 'mo@gmail.com', '2345', '2');
INSERT INTO `project`.`users` (`userName`, `country`, `language`, `email`, `password`, `permission`) VALUES ('Tehila', 'Israel', 'Hebrow', 'te@gmail.com', '3456', '3');
UPDATE `project`.`users` SET `language` = 'English' WHERE (`id` = '2');
INSERT INTO `project`.`users` (`userName`, `country`, `language`, `email`, `password`, `permission`) VALUES ('Sari', 'Israel', 'Hebrow', 's@gmail.com', '4567', '3');
INSERT INTO `project`.`users` (`userName`, `country`, `language`, `email`, `password`, `permission`) VALUES ('David', 'Italy', 'Italian', 'd@gmail.com', '5678', '2');
UPDATE `project`.`users` SET `country` = 'UK' WHERE (`id` = '1');
UPDATE `project`.`users` SET `country` = 'UK' WHERE (`id` = '2');
UPDATE `project`.`users` SET `country` = 'France', `language` = 'English' WHERE (`id` = '5');
UPDATE `project`.`users` SET `language` = 'Hebrow' WHERE (`id` = '5');
UPDATE `project`.`users` SET `language` = 'English' WHERE (`id` = '5');
UPDATE `project`.`users` SET `userName` = 'Shoshi', `country` = 'France', `language` = 'French', `email` = 'sh@gmail.com', `password` = '7890', `permission` = '3' WHERE (`id` = '6');
INSERT INTO `project`.`users` (`userName`, `country`, `email`, `password`, `permission`) VALUES ('Avraam', 'Israel', 'a@gmail.com', '6789', '1');
UPDATE `project`.`users` SET `language` = 'Hebrow' WHERE (`id` = '7');
INSERT INTO `project`.`users` (`userName`, `country`, `language`, `email`, `password`, `permission`) VALUES ('Yaakov', 'United Kingdom', 'English', 'y@gmail.com', '1470', '1');
INSERT INTO `project`.`users` (`userName`, `country`, `language`, `email`, `password`, `permission`) VALUES ('Shmuel', 'France', 'French', 'shmu@gmail.com', '2580', '1');
UPDATE `project`.`users` SET `country` = 'United Kingdom' WHERE (`id` = '2');
UPDATE `project`.`users` SET `country` = 'United Kingdom' WHERE (`id` = '1');

-- administration
INSERT INTO `project`.`administration` (`id`, `community`, `phone`) VALUES ('2', 'Mantisyer', '0502212244');
INSERT INTO `project`.`administration` (`id`, `community`, `phone`) VALUES ('5', 'Netzch Israel', '0523363399');
ALTER TABLE `project`.`administration` 
CHANGE COLUMN `community` `community` VARCHAR(45) NULL ;
INSERT INTO `project`.`administration` (`id`, `phone`) VALUES ('7', '0523331122');
INSERT INTO `project`.`administration` (`id`, `phone`) VALUES ('8', '0547778899');
INSERT INTO `project`.`administration` (`id`, `phone`) VALUES ('9', '0569666631');

-- typeofservice
INSERT INTO `project`.`typeofservice` (`serviceName`) VALUES ('Hotels');
INSERT INTO `project`.`typeofservice` (`serviceName`) VALUES ('Restaurants');
INSERT INTO `project`.`typeofservice` (`serviceName`) VALUES ('Sites');
INSERT INTO `project`.`typeofservice` (`serviceName`) VALUES ('Tours');
INSERT INTO `project`.`typeofservice` (`serviceName`) VALUES ('Synagogues');
INSERT INTO `project`.`typeofservice` (`serviceName`) VALUES ('Cemeteries');

-- services
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Ramada', '1', '0523666874', 'Ze\'ev Vilnay 6', 'Jerusalem', 'Israel');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Hilton', '1', '0548963377', 'Leof. Vasilissis Sofias 46', 'Athina', 'Greece');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Greg', '2', '0533269988', 'Menachem Begin 30', 'Givat Shmuel', 'Israel');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Reubens ', '2', '0523311648', '79 Baker Street', 'London', 'UK');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Federal Plaza', '5', '0536669852', '10278 New York 26', 'New York', 'USA');
UPDATE `project`.`services` SET `name` = 'Ramada', `address` = '6 Ze\'ev Vilnay St' WHERE (`id` = '1');
UPDATE `project`.`services` SET `name` = 'Greg', `address` = ' 30 Menachem Begin St' WHERE (`id` = '3');
UPDATE `project`.`services` SET `address` = '205 HaYarkon St', `city` = 'Tel Aviv', `country` = 'Israel' WHERE (`id` = '2');
UPDATE `project`.`services` SET `name` = 'Beresheet ', `typeOfService` = '1', `address` = '1 Beresheet St', `city` = 'Mitzpe Ramon', `country` = 'Israel' WHERE (`id` = '5');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Dan Accadia', '1', '0526669988', 'Ramat Yam 122 St', 'Herzliya ', 'Israell');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Crowne Plaza', '1', '0536621478', '136 Menahem Begin Rd ', 'Tel Aviv', 'Israel');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Alfredo', '2', '0523669910', ' 94 Shlomo Shmeltzer Rd ', 'Petach Tiqwa', 'Israel');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Rimon Cafe', '2', '0547789630', 'Sderot Mamilla', 'Jerusalem', 'Israel');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Cafe Cafe', '2', '0501444256', '1 Yordei Hasira', 'Tel Aviv', 'Israel');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Park Avenue', '1', '0523330018', '146 Clapton Common', 'London', 'United Kingdom');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('The Pillar', '1', '0596663320', '19 Brent Street, Brent Cross', 'London', 'United Kingdom');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Croft Court', '1', '0514440023', '44 Ravenscroft Avenue', 'London', 'United Kingdom');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('King Solomon', '1', '0512203369', '155 Golders Green Rd, Golders Green', 'London', 'United Kingdom');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Hummus Bar', '2', '0589996632', '82 Golders Green Road', 'London', 'United Kingdom');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('White Fish', '2', '0514444795', '10-12 Bell Lane Hendon', 'London', 'United Kingdom');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('  Pizaza', '2', '0579996688', '100 Golders Green Road Golders Green', 'London', 'United Kingdom');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Sami\'s Kosher', '2', '0596656658', '157 Brent Street', 'London', 'United Kingdom');
UPDATE `project`.`services` SET `country` = 'United Kingdom' WHERE (`id` = '4');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Netzach Yisrael', '5', '0523333369', 'Ibn Ezra St 22', 'Jerusalem', 'Israel');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Itzkovitch', '5', '0598887789', 'Rav Shach street', ' Bnei Brak', 'Israel');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Aida Opera', '1', '0512222235', '11 rue Richer', 'Paris', 'France');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Millennium Hotel Paris Opera', '1', '0581442233', '12 Boulevard Haussmann', 'Paris', 'France');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Hotel Lebron', '1', '0596663325', '4 Rue Lamartine', 'Paris', 'France');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Maison FL', '1', '0521114444', '6 Rue De La Tour', 'Paris', 'France');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Babait Vegan Friendly', '2', '0521111147', '202 Boulevard Voltaire', 'Paris', 'France');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('‎BarBack Paris', '2', '0589966632', '35 Rue Copernic', 'Paris', 'France');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('‎Bassar', '2', '0536666697', '122 Avenue de Villiers', 'Paris', 'France');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('‎Benson Kfe', '2', '0523331146', '261, boulevard Pereire', 'Paris', 'France');
DELETE FROM `project`.`services` WHERE (`id` = '28');
DELETE FROM `project`.`services` WHERE (`id` = '29');
DELETE FROM `project`.`services` WHERE (`id` = '30');
DELETE FROM `project`.`services` WHERE (`id` = '31');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Great Synagogue', '5', '0556722288', '47 Hertzel', 'Ramat Gan', 'Israel');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('The United Synagogue', '5', '0555555478', '305 Ballards Lane', 'North Finchley,London', 'United Kingdom');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('The Federation of Synagogues', '5', '0544414411', '65 Watford Way', 'Hendon, London', 'United Kingdom');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Masorti Judaism', '5', '0558885858', 'Alexander House, 3 Shakespeare Road', 'London', 'United Kingdom');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('‎Adath Israel', '5', '0521110101', '36 Rue Basfroi', 'Paris', 'France');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('‎ACIP Salomon Israel', '5', '0558885858', '66T Rue Saint-Didier', 'Paris', 'France');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('‎Adath shalom', '5', '0552525226', '8 rue george bernard shaw', 'Paris', 'France');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Bloomfield Science Museum', '3', '0556669696', 'Sderot HaMuze\'onim 3,Givat Raam', 'Jerusalem', 'Israel');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Mount Hermon', '3', '0552223322', 'Hermon site lower parking lot', 'Mount Hermon', 'Israel');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('Yad Vashem', '3', '0552223300', 'Har Hazikaron', 'Jerusalem', 'Israel');
INSERT INTO `project`.`services` (`name`, `typeOfService`, `phone`, `address`, `city`, `country`) VALUES ('City of David', '4', '0554448899', 'Ma’alot Ir David Street', 'Jerusalem', 'Israel');



-- restaurants

INSERT INTO `project`.`restaurants` (`id`, `cosher`) VALUES ('4', 'KF');
INSERT INTO `project`.`restaurants` (`id`, `cosher`) VALUES ('3', 'Badatz');
INSERT INTO `project`.`restaurants` (`id`, `cosher`) VALUES ('18', 'KF');
INSERT INTO `project`.`restaurants` (`id`, `cosher`) VALUES ('19', 'KF');
INSERT INTO `project`.`restaurants` (`id`, `cosher`) VALUES ('20', 'KF');
INSERT INTO `project`.`restaurants` (`id`, `cosher`) VALUES ('21', 'KF');
UPDATE `project`.`restaurants` SET `cosher` = 'KF' WHERE (`id` = '4');
INSERT INTO `project`.`restaurants` (`id`, `cosher`) VALUES ('8', 'Meadrin');
INSERT INTO `project`.`restaurants` (`id`, `cosher`) VALUES ('9', 'Badatz');
INSERT INTO `project`.`restaurants` (`id`, `cosher`) VALUES ('10', 'Machpud');
INSERT INTO `project`.`restaurants` (`id`, `cosher`) VALUES ('32', 'Marseille Court');
INSERT INTO `project`.`restaurants` (`id`, `cosher`) VALUES ('33', 'Marseille Court');
INSERT INTO `project`.`restaurants` (`id`, `cosher`) VALUES ('34', 'Marseille Court');
INSERT INTO `project`.`restaurants` (`id`, `cosher`) VALUES ('35', 'Marseille Court');
UPDATE `project`.`restaurants` SET `cosher` = 'KLBD' WHERE (`id` = '19');
UPDATE `project`.`restaurants` SET `cosher` = 'KLBD' WHERE (`id` = '21');

-- hotels

UPDATE `project`.`hotels` SET `id` = '1', `manager` = 'David', `stars` = '5' WHERE (`id` = '1');
UPDATE `project`.`hotels` SET `id` = '2', `manager` = 'Avi', `stars` = '4' WHERE (`id` = '2');
INSERT INTO `project`.`hotels` (`id`, `manager`, `stars`) VALUES ('5', 'Natan', '5');
INSERT INTO `project`.`hotels` (`id`, `manager`, `stars`) VALUES ('6', 'Shalom', '5');
INSERT INTO `project`.`hotels` (`id`, `manager`, `stars`) VALUES ('7', 'Dan', '5');
UPDATE `project`.`hotels` SET `stars` = '4' WHERE (`id` = '1');
UPDATE `project`.`hotels` SET `stars` = '5' WHERE (`id` = '2');
INSERT INTO `project`.`hotels` (`id`, `manager`, `stars`) VALUES ('11', 'Moshe', '3');
INSERT INTO `project`.`hotels` (`id`, `manager`, `stars`) VALUES ('12', 'Nadav', '4');
INSERT INTO `project`.`hotels` (`id`, `manager`, `stars`) VALUES ('13', 'Yosef', '5');
INSERT INTO `project`.`hotels` (`id`, `manager`, `stars`) VALUES ('14', 'Avi', '3');
INSERT INTO `project`.`hotels` (`id`, `manager`, `stars`) VALUES ('24', 'Yosi', '4');
INSERT INTO `project`.`hotels` (`id`, `manager`, `stars`) VALUES ('25', 'Natan', '3');
INSERT INTO `project`.`hotels` (`id`, `manager`, `stars`) VALUES ('26', 'Shmuel', '5');
INSERT INTO `project`.`hotels` (`id`, `manager`, `stars`) VALUES ('27', 'Yonatan', '4');

-- times

INSERT INTO `project`.`times` (`beginTime`, `endTime`, `service`) VALUES ('9:00', '22:30', '3');
INSERT INTO `project`.`times` (`beginTime`, `endTime`, `service`) VALUES ('10:00', '00:00', '4');
INSERT INTO `project`.`times` (`beginTime`, `endTime`, `service`) VALUES ('11:00', '21:00', '8');
INSERT INTO `project`.`times` (`beginTime`, `endTime`, `service`) VALUES ('10:30', '22:30', '9');
INSERT INTO `project`.`times` (`beginTime`, `endTime`, `service`) VALUES ('9:00', '23:00', '10');
INSERT INTO `project`.`times` (`beginTime`, `endTime`, `service`) VALUES ('10:30', '1:00', '18');
INSERT INTO `project`.`times` (`beginTime`, `endTime`, `service`) VALUES ('11:00', '21:30', '19');
INSERT INTO `project`.`times` (`beginTime`, `endTime`, `service`) VALUES ('9', '23', '20');
INSERT INTO `project`.`times` (`service`) VALUES ('21');
UPDATE `project`.`times` SET `beginTime` = '09:30', `endTime` = '22:30' WHERE (`id` = '8');
UPDATE `project`.`times` SET `beginTime` = '10:30', `endTime` = '23:30' WHERE (`id` = '9');
INSERT INTO `project`.`times` (`beginTime`, `endTime`, `service`) VALUES ('9:00', '23:30', '32');
INSERT INTO `project`.`times` (`beginTime`, `endTime`, `service`) VALUES ('11:00', '22:00', '33');
INSERT INTO `project`.`times` (`beginTime`, `endTime`, `service`) VALUES ('10:30', '01:00', '34');
INSERT INTO `project`.`times` (`beginTime`, `endTime`, `service`) VALUES ('12:00', '00:00', '35');
INSERT INTO `project`.`times` (`beginTime`, `endTime`, `service`) VALUES ('06:00', '01:00', '36');
INSERT INTO `project`.`times` (`beginTime`, `endTime`, `service`) VALUES ('05:00', '00:00', '22');
INSERT INTO `project`.`times` (`beginTime`, `endTime`, `service`) VALUES ('06:00', '02:00', '39');
INSERT INTO `project`.`times` (`beginTime`, `endTime`, `service`) VALUES ('05:00', '01:00', '41');
INSERT INTO `project`.`times` (`beginTime`, `endTime`, `service`) VALUES ('06:00', '00:00', '42');

-- synagogues

INSERT INTO `project`.`synagogues` (`id`, `rabbi`) VALUES ('22','Michel Berniker');
UPDATE `project`.`synagogues` SET `rabbi` = 'David' WHERE (`id` = '23');
INSERT INTO `project`.`synagogues` (`id`, `rabbi`, `nusach`) VALUES ('36', 'Asher', 'Ashcenaz');
INSERT INTO `project`.`synagogues` (`id`, `rabbi`, `nusach`, `community`) VALUES ('37', 'Natan', 'Ashkanazi', 'Orthodox');
UPDATE `project`.`synagogues` SET `nusach` = 'Ashkanazi', `community` = ' Orthodox' WHERE (`id` = '36');
UPDATE `project`.`synagogues` SET `community` = 'Orthodox' WHERE (`id` = '38');
UPDATE `project`.`synagogues` SET `nusach` = 'Masorti', `community` = 'Conservative Judaism' WHERE (`id` = '39');
INSERT INTO `project`.`synagogues` (`id`, `rabbi`, `nusach`, `community`) VALUES ('40', 'David', 'Sefard', 'Orthodox ');
INSERT INTO `project`.`synagogues` (`id`, `rabbi`, `nusach`, `community`) VALUES ('41', 'Yosef', 'Sfaradi', 'Orthodox ');
INSERT INTO `project`.`synagogues` (`id`, `rabbi`, `nusach`, `community`) VALUES ('42', 'Mordechai', 'Ashkenaz', 'Conservative');
UPDATE `project`.`synagogues` SET `rabbi` = 'Naftaly', `nusach` = 'Ashkenaz' WHERE (`id` = '38');
UPDATE `project`.`synagogues` SET `nusach` = 'Ashkenaz' WHERE (`id` = '37');
UPDATE `project`.`synagogues` SET `nusach` = 'Masorti', `community` = 'Orthodox' WHERE (`id` = '36');
UPDATE `project`.`synagogues` SET `nusach` = 'Ashkenaz', `community` = 'Orthodox' WHERE (`id` = '22');
UPDATE `project`.`synagogues` SET `nusach` = 'Ashkenaz', `community` = 'Orthodox' WHERE (`id` = '23');
UPDATE `project`.`synagogues` SET `rabbi` = 'Itzachk' WHERE (`id` = '39');

-- lectures

INSERT INTO `project`.`lectures` (`lecturer`, `subject`, `date`, `time`, `duration`, `synagogue`) VALUES ('Natan', 'Parashat Shavua', '22.10.2020', '20:00', '1 hour', '22');
INSERT INTO `project`.`lectures` (`lecturer`, `subject`, `date`, `time`, `duration`, `synagogue`) VALUES ('David', 'Musar', '12.03.2021', '19:00', '0.5 hour', '23');
INSERT INTO `project`.`lectures` (`id`, `lecturer`, `subject`, `date`, `time`, `duration`, `synagogue`) VALUES ('3', 'Gad', 'Parashat Shavua', '24.5.2022', '20:00', '1 hour', '36');
INSERT INTO `project`.`lectures` (`lecturer`, `subject`, `date`, `time`, `duration`, `synagogue`) VALUES ('Netanel', 'Musar', '02.03.2022', '13:00', '1 hour', '38');
INSERT INTO `project`.`lectures` (`lecturer`, `subject`, `date`, `time`, `duration`, `synagogue`) VALUES ('Nadav', 'Hakacha', '22.05.2022', '18:00', '0.5 hour', '41');
INSERT INTO `project`.`lectures` (`lecturer`, `subject`, `date`, `time`, `duration`, `synagogue`) VALUES ('Yaakov', 'Hakacha', '03.08.2021', '19:00', '1.5', '42');

-- sites

ALTER TABLE `project`.`sites` 
CHANGE COLUMN `typeOfActivity` `typeOfActivity` VARCHAR(100) NULL DEFAULT NULL ,
CHANGE COLUMN `ages` `ages` VARCHAR(100) NOT NULL ;
INSERT INTO `project`.`sites` (`id`, `typeOfActivity`, `ages`) VALUES ('43', 'Family fun', 'Pre School School Age Teens Adults Grandparents Family');
INSERT INTO `project`.`sites` (`id`, `ages`) VALUES ('44', 'all age from 5 years');
INSERT INTO `project`.`sites` (`id`, `ages`) VALUES ('45', 'Teens Adults Grandparents');







