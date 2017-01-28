# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Artist.delete_all

a1 = Artist.create({name: 'The PLaylist'})
a2 = Artist.create({name: 'Prince'})
a3 = Artist.create({name: 'Justin Bieber'})

Album.delete_all

Album.create({artist_id: a1.id, name: 'Live in The Chanter'})
Album.create({artist_id: a3.id, name: 'Purpose'})
Album.create({artist_id: a3.id, name: 'Beliebe'})

Gig.delete_all
Venue.delete_all

v1 = Venue.create({name: 'The Chanter', location: 'Bread Street'})
v2 = Venue.create({name: 'Silk', location: 'King Stables Rd'})

Gig.create({price: 15, date: '2017-01-17', artist_id: a1.id, venue_id: v1.id})
Gig.create({price: 1000, date: '2020-02-25', artist_id: a2.id, venue_id: v2.id})




