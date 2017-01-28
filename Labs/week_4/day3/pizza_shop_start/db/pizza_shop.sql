DROP TABLE pizzas;

CREATE TABLE pizzas (
  id serial4 primary key,
  first_name varchar(255) not null check (first_name!=''),
  last_name varchar(255) not null check (last_name!=''),
  topping varchar(255) not null check (topping!=''),
  quantity int2
);