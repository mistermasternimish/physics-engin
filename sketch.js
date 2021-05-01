
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  object1 = Bodies.rectangle(400,100,100,100);
    console.log(object1);
    World.add(world,object1);             
}
function draw()
{
  background(0);
    rect(object1.position.x,object1.position.y,50,50);
Engine.update(engine);
rectMode(CENTER);
  rect(object1.position.x,object1.position.y,50,50);
  
}
