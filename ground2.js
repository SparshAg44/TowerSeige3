class Ground2{
    constructor(x,y,width,height){
     
  var options = {
  'isStatic' : true
  }
  
  this.height = height;
  this.width = width;
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.image = loadImage("wood2.png");
  World.add(world,this.body);
  }
  
  
  display(){
  var pos = this.body.position;
  push();
  imageMode(CENTER);
  image(this.image, pos.x, pos.y, this.width, this.height);
  
  //rectMode(CENTER);
  //fill("brown");
  //stroke("black");
  //rect(pos.x,pos.y,900,20);
  pop();
  
  
  }
  
  
  }


