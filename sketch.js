
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,ball2,ball3,ball4,ball5;
var roof;
var rope1, rope2, rope3, rope4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

    engine = Engine.create();
	world = engine.world;
 
	ballObject1= new Balls (200,350,40,40);
	ballObject2= new Balls (240,350,40,40);
	ballObject3= new Balls (280,350,40,40);
	ballObject4= new Balls (320,350,40,40);
	ballObject5= new Balls (360,350,40,40);

    roof= new Roof (280,150,200,20)
	rope1= new Chain (ballObject1.body,roof.body,ballDiameter*2,0);
	
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ballObject1.display();
  ballObject2.display();
  ballObject3.display();
  ballObject4.display();
  ballObject5.display();
  
  roof.display();
  rope1.display();
  

  drawSprites();
}