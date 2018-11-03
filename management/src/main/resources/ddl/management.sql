
DROP TABLE IF EXISTS account;

CREATE TABLE account(
    id int(20) NOT NULL auto_increment,
    username varchar(64) NOT NULL,
    password varchar(64) NOT NULL,
    PRIMARY KEY(id),
    UNIQUE(id)
);