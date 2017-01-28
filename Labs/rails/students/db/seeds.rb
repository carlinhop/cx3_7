# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first

Subject.destroy_all



 user_one = User.create!({
   email: 'keith@codeclan.com',
   password: 'crack on',
   password_confirmation: 'crack on'
   })

 user_one.subjects.create({name: "Javascript"})