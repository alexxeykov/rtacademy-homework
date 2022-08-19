CREATE TYPE enum AS enum ('male', 'female', 'other');

CREATE TABLE users (
                       id                serial,
                       lastname          varchar(255),
                       firstname         varchar(255),
                       birthday          date,
                       email             varchar(255),
                       phone             varchar(15),
                       gender            enum,
                       timezone          varchar(64),
                       registration_date timestamp,
                       registration_ip   inet
                   );

UPDATE users
SET registration_ip = '161.149.146.201'
WHERE id = '1';