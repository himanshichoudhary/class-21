var fixedRect, movingRect;
var cube1,cube2,cube3,cube4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  cube1=createSprite(100,100,50,50);
  cube1.shapeColor="green";
  cube1.velocityY=1;

  cube2=createSprite(100,200,50,50);
  cube2.shapeColor="green";
  cube2.velocityY=-1;
  cube3=createSprite(100,300,50,50);
  cube3.shapeColor="green";
  cube4=createSprite(100,400,50,50);
  cube4.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


 if(isTouching(movingRect,cube1)){
  movingRect.shapeColor = "blue";
  cube1.shapeColor = "blue";
 }
 else{
  movingRect.shapeColor = "green";
  cube1.shapeColor = "green";
 }
  
 if(isTouching(movingRect,cube2)){
  movingRect.shapeColor = "blue";
  cube2.shapeColor = "blue";
 }
 else{
  movingRect.shapeColor = "green";
  cube2.shapeColor = "green";
 }

 if(isTouching(movingRect,cube3)){
  movingRect.shapeColor = "blue";
  cube3.shapeColor = "blue";
 }
 else{
  movingRect.shapeColor = "green";
  cube3.shapeColor = "green";
 }

 bounceOff(cube1,cube2)

  drawSprites();
}

 