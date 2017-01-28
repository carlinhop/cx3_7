var testArray = [1,2,3,4];


var time = Date.now();
for(var item of testArray){
  console.log(item);
}
var newTime = Date.now()
console.log("Time: ", newTime - time);



var time = Date.now();
testArray.forEach(function(item){
  console.log(item);
});
var newTime = Date.now()
console.log("Time: ", newTime - time);

//Our forEach
var ourForEach = function(array , callOnItem){
  for(var item of array){
    callOnItem(item);
  }
};

var time = Date.now();
ourForEach(testArray, console.log);
var newTime = Date.now()
console.log("Time: ", newTime - time);

