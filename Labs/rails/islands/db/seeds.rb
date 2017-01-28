# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Island.delete_all

Island.create({name: "Uist", population: 20000})
Island.create({name: "Benbecula", population: 1455})
Island.create({name: "Lewis", population: 434200})
Island.create({name: "Muck", population: 100})
Island.create({name: "Skye", population: 21000})
