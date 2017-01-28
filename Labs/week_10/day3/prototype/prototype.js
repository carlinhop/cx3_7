// var wisePerson = {
//   wisdom: function(){
//     console.log("commit often");
//   }
// }

// var myPerson= Object.create(wisePerson);
// myPerson.walk = function(){console.log("left rigth left right")};
// myPerson.walk();
// myPerson.wisdom();

var Fish = function(name, colour){
  this.name = name;
  this.colour = colour;
  
};

Fish.prototype = {
  swim: function(){
    console.log("splash splash " + this.name);
  }
};
var myFish = new Fish("nemo", "orange");

myFish.swim();