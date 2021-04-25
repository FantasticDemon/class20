var fixedSprite, movingSprite;


function setup() {
  createCanvas(800,400);
  fixedSprite =  createSprite(400, 200, 50, 50);
  fixedSprite.shapeColor = "blue";

  movingSprite = createSprite(700,200,50,50);
  movingSprite.shapeColor = "red";
}
function draw() {
  background(255,255,255); 
  
  movingSprite.x = mouseX;
  movingSprite.y = mouseY;
  console.log(movingSprite.x - fixedSprite.x);
// movingSprite.x - fixedSprite.x = 50;

 if(movingSprite.x - fixedSprite.x <= movingSprite.width/2 + fixedSprite.width/2 && 
  fixedSprite.x - movingSprite.x <= movingSprite.width/2 + fixedSprite.width/2 &&
  movingSprite.y - fixedSprite.y <= movingSprite.height/2 + fixedSprite.height/2 &&
  fixedSprite.y - movingSprite.y <= movingSprite.height/2 + fixedSprite.height/2 ){
  fixedSprite.shapeColor = "black"; 
  movingSprite.shapeColor = "green";
  }
   else{
   fixedSprite.shapeColor = "blue";
   movingSprite.shapeColor = "red";
   }
  drawSprites();
}