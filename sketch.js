const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine;
var myWorld;
var ground;
var crumpledPaperBall;
var dustbinLeft, dustbinRight, dustbinBottom;

function setup() 
{
	createCanvas(1600, 700);
	
	myEngine = Engine.create();
	myWorld = myEngine.world;

	ground = new Ground(800, 690, 1600, 20);

	crumpledPaperBall = new Paperball(200, 685, 40);


	dustbinLeft = new Dustbin(1020, 600, 20, 120);
	dustbinBottom = new Dustbin(1120, 670, 200, 20);
	dustbinRight = new Dustbin(1220, 600, 20, 120);
}


function draw() 
{
  background("black");

  Engine.update(myEngine);

  ground.display();
  crumpledPaperBall.display();
  dustbinLeft.display();
  dustbinBottom.display();
  dustbinRight.display();
}

function keyPressed() 
{
	if (keyCode === UP_ARROW) 
	{
	  Matter.Body.applyForce(crumpledPaperBall.body, {x: crumpledPaperBall.body.position.x, y: crumpledPaperBall.body.position.y}, {x:85,y:-85});
	}
}
