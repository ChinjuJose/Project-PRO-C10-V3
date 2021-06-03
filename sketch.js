var ship, shipImage;
var sea;
function preload(){
  shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(400,200);
  sea.addImage(seaImage);
  sea.scale = 0.3;

  ship = createSprite(130,250,30,30);
  ship.addAnimation("ss",shipImage);
  ship.scale =0.1;

  
}

function draw() {
  background(0); 
  drawSprites();
  sea.velocityX = -2;
  if(sea.x<0){
    sea.x = sea.width/8;
  }
}