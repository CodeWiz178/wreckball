
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    background(0,0,0);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 700,width,20);
	weight1 = new Weight(200,600,50);
	weight2 = new Weight(300,600,50);
	weight3 = new Weight(400,600,50);
	weight4 = new Weight(500,600,50);
	weight5 = new Weight(600,600,50);

	string1 = new String(weight1, {x:200, y:50});
	string2 = new String(weight2, {x:200, y:50});
	string3 = new String(weight3, {x:200, y:50});
	string4 = new String(weight4, {x:200, y:50});
	string5 = new String(weight5, {x:200, y:50});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  weight1.display();
  weight2.display();
  weight3.display();
  weight4.display();
  weight5.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  drawSprites();
 
}



