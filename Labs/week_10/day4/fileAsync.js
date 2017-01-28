var fs = require("fs");

fs.readFile("animals.txt", function(err, data){
  if(err){
    console.log("Error: ", err);
  }
  else{
    var bufferString = data.toString();
    console.log(bufferString);
  }
});


