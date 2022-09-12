var oceano;
var barco;
var ground;



function preload(){
barco = loadAnimation("ship-1.png");
oceano = loadImage("sea.png");


}

function setup(){
  createCanvas(400,400);
  oceano = createSprite(400,400);
  oceano = addImage("sea.png");
  oceano.x = oceano.width/3;

  barco = createSprite(80, 80, 120, 240);
  barco = addAnimation("ship-1.png");
}

function draw() {
  background("blue");
  if (oceano.x <0) {
      oceano.x=oceano.withd/2;
  }
 drawSprites
}