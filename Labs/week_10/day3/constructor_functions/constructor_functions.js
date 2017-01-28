// var house1 = {
//   sqFeet: 2000,
//   bathrooms: 2,
//   bedrooms: 3,
  
// };

var House = function(sqFeet, bathrooms, bedrooms){
  this.sqFeet = sqFeet;
  this.bathrooms = bathrooms;
  this.bedrooms;
}

var house1 = new House(2000,2,3);
console.log( house1);

var Office = function(desks, meetingRooms){
  this.desks = desks;
  this.meetingRooms = meetingRooms;
  this.avgDeskPerMeetingRoom = function(){
    return (this.desks/this.meetingRooms).toFixed(1);
  };
}

var office1 = new Office(2,3);
console.log(office1.avgDeskPerMeetingRoom());