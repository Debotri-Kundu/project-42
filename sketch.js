var bgImg,ISS,ISSImg,spCraft,spCraftImg1,spCraftImg2,spCraftImg3,spCraftImg4;
var gameState="UnDocked"

function preload(){
  bgImg=loadImage("spacebg.jpg")
  ISSImg=loadImage("iss.png")
  spCraftImg1=loadAnimation("spacecraft1.png")
  spCraftImg2=loadAnimation("spacecraft2.png")
  spCraftImg3=loadAnimation("spacecraft3.png")
  spCraftImg4=loadAnimation("spacecraft4.png")
}
function setup() {
  createCanvas(800,600);
  ISS=createSprite(400,200,100,100)
  ISS.addImage(ISSImg)
  ISS.scale=0.8
  spCraft=createSprite(350,550,80,80)
  spCraft.addAnimation("spaceCraft",spCraftImg1)
  spCraft.addAnimation("spCraftLeft",spCraftImg3)
  spCraft.addAnimation("spCraftRight",spCraftImg4)
  spCraft.addAnimation("spCraftDown",spCraftImg2)
  spCraft.scale=0.25
}

function draw() {
  background(bgImg);
  if(gameState!="Docked"){
    if(keyDown(LEFT_ARROW)){
       spCraft.changeAnimation("spCraftLeft",spCraftImg3)
    }
    if(keyDown(RIGHT_ARROW)){
      spCraft.changeAnimation("spCraftRight",spCraftImg4)
    }
   if(keyDown(DOWN_ARROW)){
    spCraft.changeAnimation("spCraftDown",spCraftImg2)
    } 
   if(keyDown(UP_ARROW)){
     spCraft.velocityY=-1
   }
   if(spCraft.y<275){
    spCraft.velocityY=0;
    gameState="Docked"
  }
 } 
 if(gameState === "Docked"){
   textSize(40)
   fill("red")
   text("Docked Successfully",200,550)
 }
  
  drawSprites();
}