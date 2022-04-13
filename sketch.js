let ground
let lander
var lander_img
var bg_img
var chao
var arvore
var arvoreL = 1000
var arvI
var pedrao
var vx = 0
var g = 0.05
var vy = 0
var player
var terraM = []
var playerI, terraG, folhaG
var pedregulhos
var sujeira
var leave
var pedraM = []
var bird, corvo
function preload() {
  bg_img = loadImage('[.webp')
  playerI = loadImage('a.png')
  arvI = loadImage('Arv.png')
  pedrao = loadImage('pede4.png')
  sujeira = loadImage('sujo.png')
  leave = loadImage('leave.png')
  corvo = loadImage('corvo.png')
}

function setup() {
  createCanvas(1275, 575)
  frameRate(80)

  chao = createSprite(width / 2 + 180, 580, 900, 30)
  chao.visible = true
  player = createSprite(550, 50, 20, 20)
  player.addImage(playerI)
  player.scale = 0.5
  bird = createSprite(player.x, player.y - 200, 20, 20)
  //bird.addImage(corvo)
  //pedrao.addImage()
  arvore = createSprite(width / 2 + 500, 360, 70, 80)
  arvore.addImage(arvI)
  arvore.scale = 1
  arvore.debug = true
  pedregulhos = new Group()
  terraG = new Group()
  folhaG = new Group()
}

function draw() {
  background(bg_img)
  player.velocityY = player.velocityY + 3
  player.collide(chao)
  push()
  fill(255)
  text('Velocidade Vertical: ' + round(vy), 800, 75)
  pop()

  //descida
  // vy +=g;
  attack()
  attack2()
  if (keyDown('enter')) {
    console.log('tirar')
    pedregulho()
  }

  if (keyDown('left')) {
    player.x = player.x - 10
  }
  if (keyDown('right')) {
    player.x = player.x + 10
  }
  if (keyDown('up')) {
    player.y = player.y - 30
  }

  for (var i = 0; i < pedraM.lenght; i++) {
    if (pedraM[i].isTouching(arvore)) {
      pedraM[i].destroy()
      arvoreL = arvoreL - 10
      console.log(arvoreL)
    }
  }

  drawSprites()
}

function pedregulho() {
  if (frameCount % 20 === 0) {
    var pedra = createSprite(player.x, player.y, 40, 10)

    pedra.addImage(pedrao)
    pedra.scale = 0.25
    pedra.velocityX = +3

    //assign lifetime to the variable
    pedra.lifetime = 300

    //add each cloud to the group
    pedregulhos.add(pedra)
    pedraM.push(pedra)
  }
}
//obstaculos que darao dana ao player
function attack() {
  if (frameCount % 200 === 0 && arvoreL > 500) {
    var terra = createSprite(arvore.x, arvore.y + 150, 70, 10)

    terra.addImage(sujeira)
    terra.scale = 0.2
    terra.velocityX = -3

    //assign lifetime to the variable
    terra.lifetime = 300

    //add each cloud to the group
    terraG.add(terra)
    terraM.push = terra
  }
}
function attack2() {
  if (frameCount % 200 === 0 && arvoreL > 500) {
    var folha = createSprite(player.x, player.y - 500, 70, 10)

    folha.addImage(leave)
    folha.scale = -0.25
    folha.velocityY = +3

    //assign lifetime to the variable
    folha.lifetime = 300

    //add each cloud to the group
    folhaG.add(folha)
  }
}
