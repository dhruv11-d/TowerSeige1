const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var a;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var engine, world;
var ground, ground1;
var polygonImage;
/*
function preload(){
  polygonImage = loadImage("polygon.png")
}
*/
function setup() {
  engine = Engine.create()
  world = engine.world;
  Engine.run(engine)
  createCanvas(1200,800);
  box1 = new Box(400,480,30,40)
  box2 = new Box(430,480,30,40)
  box3 = new Box(460,480,30,40)
  box4 = new Box(490,480,30,40)
  box5 = new Box(520,480,30,40)
  box6 = new Box(550,480,30,40)
  box7 = new Box(580,480,30,40)
  box8 = new Box(430,440,30,40)
  box9 = new Box(460,440,30,40)
  box10 = new Box(490,440,30,40)
  box11 = new Box(520,440,30,40)
  box12 = new Box(550,440,30,40)
  box13 = new Box(460,400,30,40)
  box14 = new Box(490,400,30,40)
  box15 = new Box(520,400,30,40)
  box16 = new Box(490,360,30,40)
  box17 = new Box(800,280,30,40)
  box18 = new Box(830,280,30,40)
  box19 = new Box(860,280,30,40)
  box20 = new Box(890,280,30,40)
  box21 = new Box(920,280,30,40)
  box22 = new Box(830,240,30,40)
  box23 = new Box(860,240,30,40)
  box24 = new Box(890,240,30,40)
  box25 = new Box(860,200,30,40)

  ground = new Ground(500,500,350,20)
  ground1 = new Ground(900,300,250,20);

}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  ground.display();
  ground1.display();
}

