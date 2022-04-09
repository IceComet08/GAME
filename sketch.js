let ground;
let lander;
var lander_img;
var bg_img;
var chao 
var arvore
var arvoreL = 100
var arvI
var pedrao 
var vx = 0;
var g = 0.05;
var vy = 0;
var player;
var playerI
var pedregulhos;
function preload()
{
 
  bg_img = loadImage("[.webp");
  playerI = loadImage("a.png")
  arvI = loadImage("Arv.png")
  pedrao = loadImage("pede4.png")
}

function setup() {
  createCanvas(1275,575);
  frameRate(80);

  chao = createSprite(width/2,560,width,30)
  chao.visible = true;
  player = createSprite(550,50,20,20)
  player.addImage(playerI)
  player.scale = 0.5
  //pedrao.addImage()
  arvore = createSprite(width/2+500,360,70,80)
  arvore.addImage(arvI)
  arvore.scale = 1
  pedregulhos = new Group()
 

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(bg_img);
  player.velocityY = player.velocityY + 3
  player.collide(chao)
  push()
  fill(255);
  text("Velocidade Vertical: "+round(vy),800,75);
  pop();

  //descida
 // vy +=g;
 
  
  drawSprites();
}

function keyPressed(){


  if (keyDown("enter")){
    console.log("atirar")
    pedregulho()
  }
  



  if(keyDown("left")){

player.x = player.x - 70

  }
  if(keyDown("right")){

    player.x = player.x + 70
    
  }
  if(keyDown("up")){

    player.y = player.y - 70
    
  }


}
function pedregulho(){ 
if (frameCount % 10 === 0) {
  var pedra = createSprite(player.x,player.y,40,10);

  pedra.addImage(pedrao);
 pedra.scale = 1;
  pedra.velocityX = +3;
  
   //assign lifetime to the variable
  pedra.lifetime = 100;
  

  
  //add each cloud to the group
  pedraGroup.add(pedra);
}
}
