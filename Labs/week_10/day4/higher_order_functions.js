// var myFunction = function(aFunction){
//   aFunction(99);
// };

// var anotherFunction = function(number){
//   console.log(number);
// }

// myFunction();

var thingWeWantLater = function(){
  console.log("I waited to run");
};

setTimeout(thingWeWantLater,1000);
console.log("A log at the bottom of the file");