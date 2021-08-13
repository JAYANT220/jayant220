
var player;
var target;
var edges;


function preload(){
  obs7Image = loadImage("snake.png");
  obs6Image = loadImage("snake.png");
  obs5Image = loadImage("snake.png");
  bgImage = loadImage("bg.png");
  playerImage = loadImage("bunnyImg.png");
  targetImage = loadImage("carrot.png");

}

function setup() {
  createCanvas(600,600);

bg = createSprite(300,300);
bg.addImage(bgImage);
bg.scale = 0.5;

edges=createEdgeSprites();

player = createSprite(40,550,15,15);
player.addImage(playerImage);
player.scale = 0.4;

target = createSprite(560,40,30,30);
target.addImage(targetImage);
target.scale = 0.8;


obs1 = createSprite(300,120,100,20);
obs1.velocityX = 5;
obs2 = createSprite(300,420,100,20);
obs2.velocityX = -5;
obs3 = createSprite(300,220,100,20);
obs3.velocityX = 6;
obs4 = createSprite(300,320,100,20);
obs4.velocityX = -6;

obs5 = createSprite(300,70,100,10);
obs5.addImage(obs5Image);
obs5.scale = random(0.1,0.4);
obs5.velocityX = -8;


obs6 = createSprite(600,random(70,520),random(30,120),5);
obs6.addImage(obs6Image);
obs6.scale = random(0.1,0.4)
obs6.velocityX = -8;




obs7 = createSprite(600,random(50,500),random(50,100),8);
obs7.addImage(obs7Image);
obs7.scale = random(0.1,0.4);
obs7.velocityX = -8;


target.shapeColor = "blue"


obs2.shapeColor = "red"
obs1.shapeColor = "red"
obs3.shapeColor = "red"
obs4.shapeColor = "red"

}

function draw() {

  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);
  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);
  obs3.bounceOff(edges[0]);
  obs3.bounceOff(edges[1]);
  obs4.bounceOff(edges[0]);
  obs4.bounceOff(edges[1]);
  obs5.bounceOff(edges[0]);
  obs5.bounceOff(edges[1]);
  obs6.bounceOff(edges[0]);
  obs6.bounceOff(edges[1]);
  obs7.bounceOff(edges[0]);
  obs7.bounceOff(edges[1]);
   
   



  if (keyDown("up")) {
    player.y=player.y-3;
  }
  if (keyDown("down")) {
    player.y=player.y+3;
  }
  if (keyDown("left")) {
    player.x=player.x-3;
  }
  if (keyDown("right")) {
    player.x=player.x+3;
  }
  if (player.isTouching(target)) {
    text("YOU WIN",200,200);
  }
  if (player.isTouching(obs1)) {
    player.x=40;
    player.y=550;
    text("YOU LOSE",200,200);
  }
  if (player.isTouching(obs2)) {
    player.x=40;
    player.y=550;
    text("YOU LOSE",200,200);
  }
  if (player.isTouching(obs3)) {
    player.x=40;
    player.y=550;
    text("YOU LOSE",200,200);
  }
  if (player.isTouching(obs4)) {
    player.x=40;
    player.y=550;
    text("YOU LOSE",200,200);
  }
    if (player.isTouching(obs5)) {
    player.x=40;
    player.y=550;
    text("YOU LOSE",200,200);
  }
  if (player.isTouching(obs6)) {
    player.x=40;
    player.y=550;
    text("YOU LOSE",200,200);

    if (player.isTouching(obs7)) {
    player.x=40;
    player.y=550;
    text("YOU LOSE",200,200);

  }

  


  drawSprites();
}
