const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, ground, BGImg, tower, towerImg;
var canon;



function preload() {
  BGImg = loadImage("assets/background.gif");
  towerImg = loadImage("assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width*2, 1, ground_options);
  World.add(world, ground);

  tower = Bodies.rectangle(150, 350, 160, 310, ground_options);
  World.add(world, tower);

  canon = new Canon(160, 110, 130, 100, 0);
 
}

function draw() {
  
  image(BGImg, 0, 0, 1200, 600);
 
  Engine.update(engine);
  
  rect(ground.position.x, ground.position.y, width*2, 1);

  push();

  imageMode(CENTER);
  image(towerImg, tower.position.x, tower.position.y, 160, 310);

  pop();

  canon.display();
   
}
