
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;
var boy,ground,stone,tree;
var M1,M2,M3,M4,M5,M6,M7,chain;

function preload(){
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(320,225);
	chain = new Chain(stone.body,{x:320 , y:225});
	M1 = new Mango(900,150,8);
	M2 = new Mango(950,120,10);
	M3 = new Mango(1000,100,7);
	M4 = new Mango(950,60,9);
	M5 = new Mango(1050,60,6);
	M6 = new Mango(1100,120,10);
	ground = new Ground(700,600,1500,40)
	//tree = new Tree(1000,300,20,20);
	World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  imageMode(CENTER)
  image(boy,400,300,250,250)
  image(tree,1000,180,400,400)
  
  drawSprites();

  M1.display();
  M2.display();
  M3.display();
  M4.display();
  M5.display(); 
  M6.display();
  //tree.display();
  ground.display();
  stone.display();
  chain.display();
 
}



