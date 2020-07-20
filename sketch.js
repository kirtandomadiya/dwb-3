var form ;
var title ; 
var gameState=0;
var brick1 ;
var brick=[];
var paddle , ball ;
var wall1 ,wall2 , wall2;
var brick4Group; 

function preload(){
paddleimage = loadImage ('IMAGES/paddle.png');
ballimage = loadImage('IMAGES/ball.png');
brick1 = loadImage('IMAGES/brick1.png');
brick2 = loadImage('IMAGES/brick2.png');
brick3 = loadImage('IMAGES/brick3.png');
brick4 = loadImage('IMAGES/brick4.png');
brick5 = loadImage('IMAGES/brick5.png');
brick6 = loadImage('IMAGES/brick6.png');
brick7 = loadImage('IMAGES/brick7.png');
brick8 = loadImage('IMAGES/brick8.png');
brick9 = loadImage('IMAGES/brick9.png');
brick10 = loadImage('IMAGES/brick10.png');
}
function setup() {
  createCanvas(displayWidth-25,displayHeight-25);
  for (var i=1;i<=10;i=i+1){
    brick [i]= new Brick(i*100,200)
    //brick [i].addImage('redbrick',brick4);
  }
  for (var i=1;i<=100;i=i+1){
    brick [i]= new Brick(i*100,250)
  }
  for (var i=1;i<=100;i=i+1){
    brick [i]= new Brick(i*100,100)
  }
  for (var i=1;i<=100;i=i+1){
    brick [i]= new Brick(i*100,150)
  }
  for (var i=1;i<=100;i=i+1){
    brick [i]= new Brick(i*100,300)
  }
  brick1 = new Brick(100,225);

 paddle=createSprite(displayWidth/2,displayHeight-150,50,10);
 paddle.addImage('paddle',paddleimage);
 paddle.scale = 0.8;
 paddle.debug=true;
 paddle.setCollider('rectangle',0,0,225,40);
 ball = createSprite(displayWidth/2,displayHeight-200,20,20);
ball.addImage('ball',ballimage);
ball.scale = 0.5;
ball.debug=true;
wall1 = createSprite(0,displayHeight/2,2,displayHeight);
wall2 = createSprite(displayWidth/2,0,displayWidth,2);
wall3 = createSprite(displayWidth-27,displayHeight/2,2,displayHeight);

ball.velocityX = -2;
ball.velocityY = -3;
 

 
form=new Form();
}

function draw() {
  
  background("red");
  paddle.x = mouseX;
  
  if (gameState===0){
    form.display();
  }
  if (gameState===1){
    textSize(20);
    fill("black");
 text("press space to start",displayWidth/2,displayHeight-125);
 if (keyDown('space')){
  gameState=2;
 }
 
  }
  if (gameState===2){
    
    ball.bounceOff(wall1);
  ball.bounceOff(wall2);
  ball.bounceOff(wall3);
  ball.bounceOff(paddle);
  
  for (var i=1;i<=100;i=i+1){
    brick [i].display();
  }
   drawSprites();
  }
 
 
}