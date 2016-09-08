-- from the hosted folder in terminal, start postgres
psql
-- then type the following:
CREATE DATABASE pokedex;
-- 'CREATE DATABASE' is returned
-- connect to this new database
\c pokedex
-- create the table
CREATE TABLE pokemon (
id SERIAL4 PRIMARY KEY,
nickname VARCHAR(50),
level INTEGER,
species VARCHAR(15)
);
-- now check table is made and what it looks like
\dt
-- now make some entries to test it out:
INSERT INTO pokemon (nickname, level, species) VALUES ('Pik', 3, 'Pikachu');
INSERT INTO pokemon (nickname, level, species) VALUES ('Jig', 15, 'JigglyPuff');
