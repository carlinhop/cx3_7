drop table lightsabers;

drop table jedi;

create table jedi(
  id serial8 primary key,
  name varchar(255),
  darkside boolean,
  age int2

);

create table lightsabers(
  id serial8 primary key,
  hilt_metal varchar(255) not null,
  colour varchar(255) not null,
  owner_id int8 not null references jedi(id)
);

insert into jedi(name,darkside,age) values ('luke', false, 21);
insert into jedi(name,darkside,age) values ('vader', true, 100);
insert into jedi(name, age) values ('obiwan', 33);

-- select name from jedi;
-- select count(*) from jedi;

-- update jedi set darkside = true;


-- update jedi set darkside = false where name = 'Luke';
-- update jedi set darkside = false where name = 'obiwan' and age = 33;

insert into jedi(name, darkside, age) values ('anakin', false, 12);

update jedi set age = 22 where name = 'anakin';
update jedi set darkside = true where name = 'anakin';

delete from jedi where name = 'anakin';

insert into jedi(name, darkside, age) values ('yoda', false , 1000);
insert into jedi(name, darkside, age) values ('leia', false , 30);

delete from jedi where name = 'yoda';

insert into lightsabers(colour, hilt_metal,owner_id)
  values('green','palladium',1);
insert into lightsabers(colour, hilt_metal,owner_id)
  values('green', 'gold',2);
--insert into lightsabers(colour) values ('red');

-- select * from lightsabers;
-- select * from jedi;

--select * from jedi, lightsabers;
select * from jedi
inner join lightsabers on (jedi.id = lightsabers.owner_id);

select * from jedi
left outer join lightsabers on (jedi.id = lightsabers.owner_id);
