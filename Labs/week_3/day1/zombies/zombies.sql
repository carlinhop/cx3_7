drop table victims cascade;
drop table bitings;
drop table zombies;


create table zombies(
  id serial8 primary key,
  name varchar(255) not null,
  type varchar(255)

);

create table victims(
  id serial8 primary key,
  name varchar(255) not null,
  run_speed int2
);

create table bitings(
  id serial8 primary key,
  infected_on date ,
  zombie_id int8 references zombies(id),
  victim_id int8 references victims(id)

);

insert into victims (name,run_speed) values('Bertie', 120), ('Claudia', 85);

  insert into victims (name,run_speed) values('Jo', 703);
    insert into victims (name,run_speed) values('Cyrus', 10);
    insert into zombies (name,type) values('Craig', 'Crawler');
    insert into zombies (name,type) values('Keith', 'Runner');
    insert into zombies (name,type) values('Sandy', 'Feral');
    insert into zombies (name,type) values('Zsolt', 'Tank');

insert into bitings (zombie_id,victim_id, infected_on) values (1,1,'Jan 12 2016');
insert into bitings (zombie_id,victim_id, infected_on) values (2,2,'Jan 14 2016');
insert into bitings (zombie_id,victim_id, infected_on) values (3,3,'Jan 24 2016');
insert into bitings (zombie_id,victim_id, infected_on) values (1,2,'Jan 26 2016');

-- select * from zombies where name = 'Craig';
-- select victim_id from bitings where zombie_id = 1;

-- select name from victims where id in (1,2);
-- select victims.name from victims inner join bitings on (bitings.victim_id = victims.id)
-- where bitings.zombie_id = 1;

select victims.name from victims inner join bitings on (bitings.victim_id = victims.id)
  join zombies on (bitings.zombie_id = zombies.id) where zombies.name = 'Craig'

select count(bitings.victim_id) from bitings join (bitings.zombie_id = zombies.id) where zombies.name = 'Craig'



