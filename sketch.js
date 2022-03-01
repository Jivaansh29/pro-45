var playerpaddle, comppaddle
var ball, bg, ball
var playerimg, compimg, bgimg, heartimg, ballimg
var edges
function preload() {
  playerimg = loadImage("./assets/playerpaddle.png")
  compimg = loadImage("./assets/comppaddle.png")
  bgimg = loadImage("./assets/bg.png")
  heartimg = loadImage("./assets/life.png")
  ballimg = loadImage("./assets/ball.png")
}

function setup() {
  createCanvas(400,800)
  bg = createSprite(200,400);
  bg.addImage(bgimg);
  bg.scale = 1.15;

  playerpaddle = createSprite(500, 700)
  playerpaddle.addImage(playerimg);
  playerpaddle.scale = .2;

  comppaddle = createSprite(250, 80)
  comppaddle.addImage(compimg);
  comppaddle.scale = .2;

  ball=createSprite(200,200,50,50);
  ball.addImage(ballimg);
  ball.scale=0.4;
 ball.velocityX=3

 edges=createEdgeSprites()
 ball.velocityY=-3

ball.debug=true
playerpaddle.debug=true;
ball.setCollider("rectangle",0,0,50,50)
playerpaddle.setCollider("rectangle",0,0,50,50)
}
function draw() {
  background("white")

  playerpaddle.x = mouseX


playerpaddle.bounceOff(edges)
comppaddle.bounceOff(edges)
ball.bounceOff(edges)
ball.bounceOff(playerpaddle)
ball.bounceOff(comppaddle)



  drawSprites()
}