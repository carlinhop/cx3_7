var myPerson= {
  name: "Guybrush",
  age: 32,
  weapon: "cutlass",
  talk: function(){
    console.log("I'm alive!, my name is: " + this.name);
  }
};

console.log("My Person: ", myPerson);
myPerson.talk();

myPerson.walk = function(){
  console.log("Walking");
}

myPerson.walk();