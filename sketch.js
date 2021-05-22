var movingRect,fixedRect;
var car;
var wall;
function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect =  createSprite(500,300, 30,50);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  fixedRect.debug = true;
  movingRect.debug = true;
  
  car = createSprite( 500,200,30,50);
  car.velocityX = 2;
  car.shapeColor = "blue";
  wall = createSprite(1000,200,80,90);
  wall.shapeColor = "yellow";

}

function draw() {
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;  

   if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
   }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
 bounceOff(car,wall);

  drawSprites();
}
