var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstacle1;
var obstacleImage1;
var obstacleImage2;
var obstacleImage3;
var obstacleImage4;
var obstacleImage5;
var obstacleImage6;
var s = 3;

switch(s){
  case 1: 
    console.log("hi");
    break;
  case 2:
    console.log("bye");
    break;
  case 3: 
    console.log("See you soon");
    break;
  default: 
    console.log("welcome");
}

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
 obstacleImage1 =  loadImage("obstacle1.png");
  obstacleImage2 =  loadImage("obstacle2.png");
  obstacleImage3 =  loadImage("obstacle3.png");
  obstacleImage4 =  loadImage("obstacle4.png");
  obstacleImage5 =  loadImage("obstacle5.png");
  obstacleImage6 =  loadImage("obstacle6.png");
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(100);
   
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  if (frameCount%64===0){
  obstacle1=createSprite(600,165);
    
    var rand = Math.round(random(1,6));
    
    switch(rand){
     case 1:
        obstacle1.addImage("obstacle1", obstacleImage1);
        break;
    case 2:
        obstacle1.addImage("obstacle2", obstacleImage2);
        break;
    case 3:
        obstacle1.addImage("obstacle3", obstacleImage3);
        break;
    case 4:
        obstacle1.addImage("obstacle4", obstacleImage4);
        break;
    case 5:
        obstacle1.addImage("obstacle5", obstacleImage5);
        break;
    case 6:
        obstacle1.addImage("obstacle6", obstacleImage6);
        break;
    
            
    }
    
  
  obstacle1.scale=0.5;
  obstacle1.velocityX=-5;
                        
  }
  trex.collide(invisibleGround);
  drawSprites();
}