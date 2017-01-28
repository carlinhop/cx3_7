// function hello(){
//   console.log("hello everyone!");
// }

// hello();

// function add(a,b){
//  return a + b;
// }

// console.log("the return value is " + add(1,2,3));

// function mood(name, mood){
//   console.log(name + "you are: " + mood);
// }

// mood("Alan", "chilled");

// function sum(){
//   var i = 0;
//   var total = 0;
//   for ( i; i < arguments.length; i++){
//       total += arguments[i];
//   }
//   return total;
// }

// console.log(sum(1,2,3,4));


// var hello = function(){
//   console.log("hello!");
// }

// console.log(hello);

// var add = function(a,b){
//   return a + b;
// }

// console.log("the return value is: " + add(1,2));

// function(){console.log("hello");}

 
// var greater = function(a,b){
//   return a > b ? a: b;
// }

// console.log(greater(1,2));

// var add = function (a,b){
//   return a + b;
// }

// var wow = function(functionToInvoke){
//   console.log(functionToInvoke(2,1));
// }

// wow(add);


function speaks(name, surname){
  return "Howdy, I'm "+ name + " " + surname;
}

console.log(speaks("Rick", "Henry"));

function multiply(){
  var result = 1;
  for(number of arguments){
    result *= number;
  }
  return result;
}

console.log(multiply(1,2,3));

function firstElem(array){
  return array[0];
}
console.log(firstElem([0,1,2]));

function printNames(){
  var result = "";
  for(name of arguments){
    result += name + " ";
  }
  return result;
}

console.log(printNames(["carlos", "xumpi", "luna"]));

var animals = ["cow", "donkey", "bat"];

var farm = [];
function toTheFarm(animal_array){
  for(animal of animal_array){
    farm.push(animal);
    console.log(animal);
  }
}

console.log(farm);
toTheFarm(animals);
console.log(farm);


