class Box{
    constructor(x,y,width,height){
      //super(x,y,10,10);
      this.image = loadImage("box.png");
  var options = {
    
  'friction' : 1.0,
  //'density' : 0.3,
  'restitution' : 0.4
  }
  
  this.height = height;
  this.width = width;
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.Visiblity = 255;
  World.add(world,this.body);
  }
  
  
  display(){
    if(this.body.speed < 10){
     // super.display();
     var pos = this.body.position;
    var angle = this.body.angle;
    
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
   imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 30, 40);
       pop();
     }
    
  }
  score(){
    if (this.Visiblity < 0 && this.Visiblity >-105){
      score++;
    }
  }
}
  
 