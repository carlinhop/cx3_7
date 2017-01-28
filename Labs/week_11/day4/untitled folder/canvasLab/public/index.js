var app = function(){

  var canvas = document.getElementById("main-canvas");
  console.log("canvas", canvas);
  var context = canvas.getContext("2d");
  var x = 10;
  var y = 10;
  var width = canvas.width;
  var height = canvas.height;

  function test(event){
 
    context.beginPath();
    context.moveTo(x,y);
    console.log(event);
    if (event.key == "ArrowDown" && (y < height || y > 0)) {
       y += 10;
    }
    else if(event.key == "ArrowRight" && (x < width || x > 0)){
      x+=10;
    }
    else if(event.key == "ArrowUp" && (y <= height || y > 0)) {
      y-=10;
    }
    else if(event.key == "ArrowLeft" && (x <= width || x > 0)){
      x-=10;
    }
    context.lineTo(x,y);
    context.stroke();
    context.moveTo(x,y);

  }
  window.addEventListener("keydown", test, true);




  // console.log(context);
  // context.fillStyle ="tomato";
  // context.fillRect(10,10,50,50);

  // context.beginPath();
  // context.moveTo(200,200);
  // context.lineTo(200,300);
  // context.lineTo(100,300);
  // context.closePath();
  // context.fillStyle= "dodgerblue";
  // context.fill();




  // var drawCircle = function(x,y){
  //   context.beginPath();
  //   context.arc(x,y,10,0,Math.PI*2,true);
  //   context.stroke();
  // };

  // var img = document.createElement("img");
  // img.src = "http://www.codebearsoftware.com/BearCoding.jpg";

  // var drawBear = function(){
  //   context.drawImage(img, 300, 300, 100, 100);
  // };

  // img.onload = drawBear;

  // var changeColor = function(){
  //   context.strokeStyle= this.value;
  //   console.log(this.value);
  // };
  // var colorPicker = document.querySelector("#input-color");

  // colorPicker.onchange = changeColor;

  // canvas.onmousemove = function(event){
  //   drawCircle(event.layerX,event.layerY);
  // }



};

window.onload = app;



