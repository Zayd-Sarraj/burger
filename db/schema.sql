drop database if exists burgers_db;

create database burgers_db;

use burgers_db;

create table burgers (
    id integer(11) auto_increment not NULL,
    burger_name varchar(255) not null,
    devoured boolean,
    primary key(id)
)
