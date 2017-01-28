var guitars = ["fender", "gibson", "gretsch"];
console.log("guitars: "+ guitars);

var drums = new Array();

drums.push("sonor");
drums.push("premier");

console.log("drums: ", drums);

console.log(guitars[0]);
console.log(drums[1]);
drums[10] = "zildjan";
console.log(drums.length);
drums.pop();
drums.shift();
console.log(drums);