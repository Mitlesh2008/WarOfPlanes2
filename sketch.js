var warGround
var fighterPlane;
var enemyPlane1,enemyPlane2,enemyPlane3;
var bomberPlane1,bomberPlane2;
var frendlyPlane;
var missle,enemyMissle;

var warGroundImg
var fighterPlaneImg;
var enemyPlane1Img,enemyPlane2Img,enemyPlane3Img;
var bomberPlane1Img,bomberPlane2Img;
var frendlyPlaneImg;
var missleImg,enemyMissleImg;
var explosionImg;

function preload(){
 fighterPlaneImg = loadImage("Assets/PlayablePlanes/FighterPlane.png");
 enemyPlane1Img = loadImage("Assets/EnemyPlanes/EnemyPlane1.png");
 enemyPlane2Img = loadImage("Assets/EnemyPlanes/EnemyPlane2.png");
 enemyPlane3Img = loadImage("Assets/EnemyPlanes/EnemyPlane3.png");
 warGroundImg = loadImage("Assets/Background.png");
 missleImg = loadImage("Assets/PlayablePlanes/PlayerMissle.png");
 explosionImg = loadImage("Assets/Explosion.png");
}

function setup(){
 createCanvas(700,940);

 warGround = createSprite(350,100);
 warGround.addImage(warGroundImg);
 warGround.scale = 1
 warGround.velocityY = 3

 fighterPlane = createSprite(400,700,50,50);
 fighterPlane.addImage(fighterPlaneImg);
 fighterPlane.shapeColor = "blue"
 fighterPlane.scale = 1

 enemyPlane1 = createSprite(400,300,50,50);
 enemyPlane1.addImage(enemyPlane1Img);
 enemyPlane1.shapeColor = "red";
 enemyPlane1.scale = 1

 enemyPlane2 = createSprite(100,300,50,50);
 enemyPlane2.addImage(enemyPlane2Img);
 enemyPlane2.shapeColor = "red";
 enemyPlane2.scale = 1

 enemyPlane3 = createSprite(300,200,50,50);
 enemyPlane3.addImage(enemyPlane3Img);
 enemyPlane3.shapeColor = "red";
 enemyPlane3.scale = 1

 missle = createSprite(400,700,50,50);
 missle.addImage(missleImg);
 missle.visible = false
 missle.scale = 0.2
 

}

function draw(){
background("grey")

if(warGround.y > 900){
 warGround.y = warGround.height/50;
}

if(keyDown(RIGHT_ARROW)){
 fighterPlane.x += 2
}


if(keyDown(LEFT_ARROW)){
 fighterPlane.x -= 2
}

 if (keyCode === 32){
  missle.velocity.y -= 1 
  missle.visible = true
 }


 if (missle.isTouching(enemyPlane1)){
   missle.destroy()
   enemyPlane1.destroy()
 }

drawSprites();
}