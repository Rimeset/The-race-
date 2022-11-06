var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

var b, bImg;
var c, cImg;
var ed, edImg;
var po, poImg;
var bo, boImg;

function preload(){
  pathImg=loadImage("path.png");
  boyImg=loadAnimation("Runner-1.png","Runner-2.png");
 
  bImg=loadImage("bomb.png");
  cImg=loadImage("coin.png");
  edImg=loadImage("energyDrink.png");
  poImg=loadImage("power.png");
  boImg=loadImage("b.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.scale=0.9;

//creating boy running
boy=createSprite(180,340,30,30);
boy.scale=0.05;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;

//bomb
b=createSprite(308,200,30,30);
b.addImage(bImg);
b.scale=0.08;

//bomb sticker
bo=createSprite(304,204,30,30);
bo.addImage(boImg);
bo.scale=0.06;

//coin
c=createSprite(75,250,30,30);
c.addImage(cImg);
c.scale=0.4;

//energy drink
ed=createSprite(175,120,30,30);
ed.addImage(edImg);
ed.scale=0.15;

//power sticker
po=createSprite(175,125,30,30);
  po.addImage(poImg);
  po.scale=0.07;

}

function draw() {
  background(rgb(207, 10, 10));
  path.velocityY=4;

  boy.x=World.mouseX;
  
  edges=createEdgeSprites();
  boy.bounceOff(edges);

  b.bounceOff(edges);
  bo.bounceOff(edges);

  c.bounceOff(edges);
  
  ed.bounceOff(edges);
  po.bounceOff(edges);
  
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  

  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }

  if(keyDown("space")){
    b.velocityY=-10;
    bo.velocityY=-10;

    c.velocityY=15;

      ed.velocityY=-10;
      po.velocityY=-10;
  }

  drawSprites();
}

