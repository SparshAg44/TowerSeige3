const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


var  engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var polygon, rope ,polygonImage,backgroundImg
var score = 0;
var bg = "light.jpg";

//var bg1,bg2

function preload(){
  getBackgroundImg();
  polygonImage=loadImage("polygon.png");
  
}
/*var bg = "download.jpg" ;
function preload(){
  getBackgroundImg();
polygonImage = loadImage("polygon.png");
//bg1 = loadImage("download.jpg");
//bg2 = loadImage("download2.png");
}
*/

function setup(){
createCanvas(900,400);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
 //rectMode(CENTER);
 ground1 = new Ground(700,200,200,20);
 ground2 = new Ground2(380,350,270,10);
 //ground = new Ground(200,200,5,15);
  box1 = new Box(300, 275, 30, 40);
  box2 = new Box(330, 275, 30, 40);
  box3 = new Box(360, 275, 30, 40);
  box4 = new Box(390, 275, 30, 40);
  box5 = new Box(420, 275, 30, 40);
  box6 = new Box(450, 275, 30, 40);
  box7 = new Box(480, 275, 30, 40);
  box8 = new Box(330, 235, 30, 40);
  box9 = new Box(360, 235, 30, 40);
  box10 = new Box(390, 235, 30, 40);
  box11 = new Box(420, 235, 30, 40);
  box12 = new Box(450, 235, 30, 40);
  box13 = new Box(360, 195, 30, 40);
  box14 = new Box(390, 195, 30, 40);
  box15 = new Box(420, 195, 30, 40);
  box16 = new Box(390, 155, 30, 40);
  /*box17 = new Box(700, 155, 30, 40);
  box18 = new Box(700, 155, 30, 40);
  box19 = new Box(700, 235, 30, 40);
  box20 = new Box(700, 235, 30, 40);
*/


var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1200,
    height: 700,
    wireframes: false
  }
});

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);
rope = new Rope(this.polygon,{x:100,y:200});
}

function draw(){
  if(backgroundImg)
  background(backgroundImg);

  //Engine.update(engine);
  noStroke();
  textSize(35)
  fill("white")
  text("SCORE : " +score,750,40);
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
 
  ground1.display();
 

imageMode(CENTER);
image(polygonImage,polygon.position.x,polygon.position.y,40,40);
rope.display();
//drawSprites();
box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();
box16.score();
}


function mouseDragged(){
Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }


function mouseReleased(){
  rope.fly();
 }
 function keyPressed(){
  if(keyCode === 32){
//Matter.Body.setPosition(polygon.body,{x:200,y:50});
 rope.attach(this.polygon);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
    bg = "light.jpg";
      
  }
  else{
      bg = "dark.jpg";
     
    
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
