class Ground{
    constructor(x,y,width,height){
     
  var options = {
  'isStatic' : true
  }
  
  this.height = height;
  this.width = width;
  this.body = Bodies.rectangle(450,390,900,10,options);
  this.image = loadImage("wood2.png");
  World.add(world,this.body);
  }
  
  
  display(){
  var pos = this.body.position;
  push();
  imageMode(CENTER);
  image(this.image, pos.x, pos.y, 900, 10);
  
  //rectMode(CENTER);
  //fill("brown");
  //stroke("black");
  //rect(pos.x,pos.y,900,20);
  pop();
  
  
  }
  
  
  }