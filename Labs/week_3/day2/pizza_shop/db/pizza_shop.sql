drop table if exists pizza_orders;

create table pizza_orders(
  id serial4 primary key,
  first_name varchar(255),
  last_name varchar(255),
  topping varchar(255),
  quantity int2
);
