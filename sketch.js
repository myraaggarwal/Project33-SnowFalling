var girl;
var girlImg,girlImg2;
var girljumping;
var snowflakes;

function preload(){
  backgroundImg=loadImage("snow2.jpg");
  girlImg=loadImage("girl.png");
  girlImg2=loadImage("girljumping.png");
  girlJumping=loadAnimation("girljumping.png");
  girlStanding=loadImage("girl.png");
  snowflakeImg=loadImage("snow5.webp");
}
function setup() {
  createCanvas(800,400);
  girl =createSprite(700, 335);
  girl.addImage(girlImg);
  girl.scale=0.3;
}

function draw() {
  background(backgroundImg); 
  fill("white");
  textSize(30);
  text("Press up arrow and down arrow to make girl jump",50,50);

  if(keyWentDown(UP_ARROW)){
    girl.addAnimation("girljumping",girlJumping);
    girl.changeAnimation("girljumping");
  }
  if(keyWentDown(DOWN_ARROW)){
    girl.addAnimation("girlstanding",girlStanding);
    girl.changeAnimation("girlstanding");
  }
  snowflake();
  drawSprites();
}

function snowflake(){
  var rand=round(random(1,10));
  if( rand === 2){
    snowflakes=createSprite(random(50,750),10);
    snowflakes.addImage(snowflakeImg);
    snowflakes.velocityY=5;
    snowflakes.scale=0.07;
    console.log(rand);
  }
}