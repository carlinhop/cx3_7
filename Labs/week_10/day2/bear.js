var bear = {
  type: "tiny",
  name: "oo",
  belly: [],
  eat: function(food){
    this.belly.push(food);
  }
};

bear.eat("sugar");
console.log(bear.belly);