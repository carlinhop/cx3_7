var myPerson = {
  name: "Guybrush",
  age: 32,
  weapon: "cutlass"
}

console.log("my person: ", myPerson);
console.log("person name: ", myPerson["name"]);
console.log("person age", myPerson.age);
myPerson.address = {street: "Pirate Way", postcode: "EH14AL"}
console.log("my person: ", myPerson);

var caesar = {city: "Rome"};

var cleopatra = {city: "Cairo"};

var cicero = {city: "Rome"};

var historyLesson = [cesar, cleopatra, cicero];

console.log(historyLesson);