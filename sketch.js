
var monkey , monkey_running
var banana ,bananaImage, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(580,280)
  monkey = createSprite(80,220,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(250,270,1160,50)
  ground.shapeColor = "brown"
  console.log(ground.x)
  
  obstaclesGroup = new Group();
  bananaGroup = new Group();
}


function draw() {
background("lightgreen")
  monkey.velocityY = monkey.velocityY+0.5
  monkey.collide(ground)
  ground.velocityX = -5
  if (ground.x < 0){
  ground.x = ground.width/2  
  }
  if (keyDown("space")&&monkey.y >=210){
    monkey.velocityY = -10
  }
  if (World.frameCount%170===0){
    obstacle = createSprite(580,224,10,40);
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -6
    obstacle.scale = 0.12;
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
  
  if (World.frameCount%100===0){
    banana = createSprite(580,Math.round(random(90,130)),10,40);
    banana.addImage(bananaImage)
    banana.velocityX = -6
    banana.scale = 0.08;
    banana.lifetime = 300;
    bananaGroup.add(banana);
  }
  stroke("white")
  textSize(20)
  fill("white")
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,240,50)
  
  
 drawSprites();
}




