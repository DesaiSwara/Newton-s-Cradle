
var ball1,ball2,ball3,ball4,ball5;
var ballDiameter; 
var roof;
var rope1, rope2, rope3, rope4,rope5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 800);

    engine = Engine.create();
	world = engine.world;
 
	ballObject1= new Balls (200,350,40,40);
	ballObject2= new Balls (240,350,40,40);
	ballObject3= new Balls (280,350,40,40);
	ballObject4= new Balls (320,350,40,40);
	ballObject5= new Balls (360,350,40,40);

    roof= new Roof (280,150,200,20);

  rope1 = new Chain(ballObject1.body,roof.body,-90,0);
  rope2 = new Chain(ballObject2.body,roof.body,-40,0);
  rope3 = new Chain(ballObject3.body,roof.body,+10,0);
  rope4 = new Chain(ballObject4.body,roof.body,+50,0);
  rope5 = new Chain(ballObject5.body,roof.body,+90,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);


  ballObject1.display();
  ballObject2.display();
  ballObject3.display();
  ballObject4.display();
  ballObject5.display();
  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  

  drawSprites();
}

    function keyPressed() {
        if (keyCode === UP_ARROW) {
  
          Matter.Body.applyForce(ballObject1.body,ballObject1.body.position,{x:-730,y:0});
      
        }
  }
