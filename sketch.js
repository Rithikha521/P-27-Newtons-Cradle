
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var ropeObject1, ropeObject2, ropeObject3, ropeObject4, ropeObject5;
var roofObject;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof(width / 2, height / 4, width / 4, 20);

	//Create the Bodies Here.
	bobDiameter = 40;
	bobStartPositionX = width / 2;
	bobStartPositionY = height / 4 + 500;

	bobObject1 = new Bob(bobStartPositionX - bobDiameter * 2, bobStartPositionY, bobDiameter);
	bobObject2 = new Bob(bobStartPositionX - bobDiameter, bobStartPositionY, bobDiameter);
	bobObject3 = new Bob(bobStartPositionX, bobStartPositionY, bobDiameter);
	bobObject4 = new Bob(bobStartPositionX + bobDiameter, bobStartPositionY, bobDiameter);
	bobObject5 = new Bob(bobStartPositionX + bobDiameter * 2, bobStartPositionY, bobDiameter);

	ropeObject1 = new Rope(bobObject1.body, roofObject.body, -bobDiameter * 2, 0);
	ropeObject2 = new Rope(bobObject2.body, roofObject.body, -bobDiameter, 0);
	ropeObject3 = new Rope(bobObject3.body, roofObject.body, 0, 0);
	ropeObject4 = new Rope(bobObject4.body, roofObject.body, +bobDiameter, 0);
	ropeObject5 = new Rope(bobObject5.body, roofObject.body, +bobDiameter * 2, 0);



	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(255);

	drawSprites();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	roofObject.display();

	ropeObject1.display();
	ropeObject2.display();
	ropeObject3.display();
	ropeObject4.display();
	ropeObject5.display();

}



