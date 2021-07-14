const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var bgImg;
var bg;
var sound;
var bg1;
var engine, world;
var snow = [];
var gameState = 1;

function preload() {
  //snowflakeImg = loadImage("snow4.webp");
  bg= loadImage("snow2.jpg");
  //boyImg = loadImage("boy.jpg");
  bgImg = loadImage("snow3.jpg");
  sound = loadSound("Jingle Bells.mp3");
}
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);
 
}

function draw() {
  background(bg);

 if(gameState === 1){
 fill(255);
 textSize(15);
 text("Press Space To Start The Music And Change The Image", 50, 50);

 }

if (gameState === 2)
 {
   background(bgImg);
   sound.play();
   if(frameCount% 5 === 0){
    snow.push(new Snow(random(0,800),50,50));
  }
  for (var j = 0; j < snow.length; j++) {
     
    snow[j].display();
  }

 }

 if(frameCount% 5 === 0){
  snow.push(new Snow(random(0,800),50,50));
}
for (var j = 0; j < snow.length; j++) {
   
  snow[j].display();
}



drawSprites();

}

function keyPressed(){
  if(keyCode === 32 && gameState === 1){
    gameState = 2;
    
 }
}
