var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, packageIMG, helicopterIMG;
//var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(420, 650, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	//box1 = createSprite(330, 570, 20, 200);
	//fill("red");
	//box2 = createSprite(430, 665, 200, 20);
	//fill("red");
	//box3 = createSprite(530, 570, 20, 200);
	//fill("red");
  
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	packageSprite.x= packageBody.position.x;
	packageSprite.y= packageBody.position.y;
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

}

 function keyPressed() {
      if (keyCode === DOWN_ARROW) {
	    // Look at the hints in the document and understand how to make the package body fall only on
	    Matter.Body.setStatic(packageBody,false);
     }
 }