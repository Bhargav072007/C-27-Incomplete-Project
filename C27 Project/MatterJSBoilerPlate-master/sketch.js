var roof,bob;
var bobObject1,Bob2,Bob3,Bob4,Bob5;
var Rope1,Rope2,Rope3,Rope4;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//Create a Roof
	roof = Bodies.rectangle(width/2, 100, width, 5 , {isStatic:true} );
	 World.add(world, roof);

	 Bob1 = new Bob(300,350,35);
	 Bob2 = new Bob(310,350,35);
	 Bob3 = new Bob(320,350,35);
	 Bob4 = new Bob(330,350,35);
	 Bob5 = new Bob(340,350,35);

	 Rope1 = new Rope(bobObject1.body,roof.body, Bob1Diameter*2,0);
	 


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  rectMode(CENTER);
  rect(roof.position.x,roof.position.y,800,20);
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  drawSprites();
  
 
}



