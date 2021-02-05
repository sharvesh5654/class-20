var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect =  createSprite(400, 200, 50, 50);
 fixedRect.shapeColor = "red"
 movingRect =  createSprite(200, 100, 50, 50);
 movingRect.shapeColor = "red"

//movingRect.x - fixedRect.x === fixedRect.width/2 +movingRect.width/2
// ___450_____-400===25+25
// 50===50
//movingRect.x - fixedRect.x > fixedRect.width/2 +movingRect.width/2
//420-400<50
20<50
}

function draw() {
  background("cyan");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY

  if(movingRect.x - fixedRect.x < fixedRect.width/2 +movingRect.width/2&&
    fixedRect.x-movingRect.x  < fixedRect.width/2 +movingRect.width/2&&
    movingRect.y - fixedRect.y < fixedRect.height/2 +movingRect.height/2&&
    fixedRect.y-movingRect.y  < fixedRect.height/2 +movingRect.height/2
    ) {

    fixedRect.shapeColor = "blue"
    movingRect.shapeColor = "blue"

  }

  else{
    fixedRect.shapeColor = "red"
    movingRect.shapeColor = "red"
  }

  drawSprites();
}