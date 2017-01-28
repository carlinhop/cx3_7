drop table if exists albums;
drop table if exists artists;

create table artists(
  id serial4 primary key,
  name varchar(255)


);

create table albums(
  id serial4 primary key,
  artist_id int4 references artists(id),
  name varchar(255)
);