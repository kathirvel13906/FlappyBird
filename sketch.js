const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var start = 0;
var PLAY = 1;
var END = 2;
var gameState = 0;

var engine, world;

var ground;
var form;
var bg;
var bird;

function preload() {
  bg = loadImage("bg.png");
  birdEnd = loadImage("birdEnd.jpg");
}

function setup() {
	var canvas = createCanvas(1000, 500);

	engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(500,485,50000,15);
  form = new Form();
  bird = new Bird(200,200);

	Engine.run(engine);
}

function draw() {
  //background(0,0,255);
  background(bg);

  console.log(gameState);

  Engine.update(engine);

  drawSprites();

  ground.display();
  bird.display();

  if(gameState === 0) {
    form.display();
  } else 
  if(gameState === 1) {
    birdFly();

    form.hide();

    camera.position.x = bird.body.x;
  } else
  if(gameState === 2) {

  }
}

function birdFly() {
  if(keyCode === 32 && gameState === 1) {
    Matter.Body.setStatic(bird.body, false);
  }
}



