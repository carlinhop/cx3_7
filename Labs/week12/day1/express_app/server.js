var express = require('express');
var app = express();
var path = require('path');
var planets = [{name: "Mars", size: 2093}, {name: "Earth", size: 3089}];

app.use(express.static('client/build'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

//NEW
app.get('/planets/new',function(req,res){
  res.send("NEW planet routes");
});

//CREATE
app.post('/planets',function(req,res){
  res.send("CREATE planet route");
});

//SHOW
app.get('/planets/:id', function(req,res){
  res.json(planets[req.params.id]);

});

//EDIT
app.get('/planet/:id/edit',function(req,res){
  res.send("EDIT planet route");
});

//DELETE
app.delete('/planets/:id', function(req,res){
  res.send("DELETE planet route");
});
//UPDATE
app.put('/planets/:id', function(req,res){
  res.send("UPDATE planets route");
});


  app.listen('3000', function(){
    console.log("The magic is all happening on port 3000");
  });