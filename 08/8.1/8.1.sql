CREATE TABLE users (
                       id                int UNSIGNED,
                       lastname          varchar(255),
                       firstname         varchar(255),
                       birthday          date,
                       email             varchar(255),
                       phone             varchar(15),
                       gender            enum ('male', 'female', 'other'),
                       timezone          varchar(64),
                       registration_date timestamp,
                       registration_ip   varchar(15)
                   );