
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground;
var dustbinImg,side1,side2,side3


function preload()
{
 dustbinImg= loadImage("sprites/dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	
	//Create the Bodies Here.


	Engine.run(engine);
	paper=new Paper(100,550,40)
	side1 = new Dustbin(550, 620, 20, 100);
side2 = new Dustbin(600, 660, 150, 20);
side3 = new Dustbin(660, 620, 20, 100);
 
  ground=new Ground(400,700,800,20)
 
  
     
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  paper.display();
  side1.display()
side2.display()
 side3.display()
 
 ground.display();

 image(dustbinImg,505,460,200,238);
  
}
function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position,{x:25,y:-75} )
	
	}

  }



