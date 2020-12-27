 var city,cityi
 var bottompipe,bottompi;
 var toppipe,toppi;
var restart,restarti;
var play,playi;
var gameover,gameoveri;
var flappycrashedi;
var num;
var flappybird,flappybirdi;
var pipeGroup,bottompipeGroup;  
var serve=1;
var play=2;
var end=3;
var gamestate=serve
var logo,lspri,start,startb;
function preload(){
 cityi=loadImage("city.png");
  bottomi=loadImage("bottom.png");
 flappybirdi=loadImage("flappy bird (2).png"); 
 topi=loadImage("top pipe.png"); 
  logo=loadImage("flappy bird.png");
  start=loadImage("play.png");
restarti=loadImage("restart.jpg");
  gameoveri=loadImage("game over.jpg");
}
function setup() {
  
  createCanvas(600, 600);
  
city=createSprite(300,300,100,100);
 flappybird=createSprite(80,400,20,20)
   lspri=createSprite(300,100,20,20)
   lspri.addImage(logo);
  restart=createSprite(277,517,20,20);
   startb=createSprite(300,300,20,20) ;
  startb.addImage(start)
   restart.addImage(restarti);
    restart.scale=.5;
   gameover=createSprite(290,123,20,20)
  flappybird.addImage(flappybirdi)
  flappybird.scale=.2;
 city.addImage(cityi) ;
  city.scale=1;
   pipeGroup=new Group();
   bottompipeGroup=new Group();
   
}

function draw() {
background("black");
 drawSprites();
  if(gamestate===serve){
 
   
if(mousePressedOver(startb)){
  gamestate=play;
}
        restart.visible=false;
   gameover.visible=false;
  }
     if(gamestate===play){
     // console.log(gamestate)
 startb.visible=false;
        city.velocityX=-2;
      spawnbottompipes();
flappybird.velocityY=flappybird.velocityY+.5
   if(keyDown("space")) {
 flappybird.velocityY=-5;     
 }      
lspri.visible=false;  
  if(flappybird.isTouching(pipeGroup)||flappybird.isTouching(bottompipeGroup))  {
gamestate=end;
  
  }
       restart.visible=false;
   gameover.visible=false;
       if(flappybird.y>600 ||flappybird.y<1 ){
        gamestate=end; 
       }
    }
  if(gamestate===end)   {
   city.velocityX=0; 
   flappybird.velocityY=0;
    pipeGroup.setLifetimeEach(-1)
    pipeGroup.setVelocityXEach(0);
    bottompipeGroup.setLifetimeEach(-1)
    bottompipeGroup.setVelocityXEach(0);
   restart.visible=true;
   gameover.visible=true; 
   gameover.addImage(gameoveri);
   if(mousePressedOver(restart)) {
     gamestate=serve;
     pipeGroup.destroyEach();
     bottompipeGroup.destroyEach();
     flappybird.x=80;
     flappybird.y=400;
      startb.visible=true;
   }
  }
  

  
 
 if(city.x<270) {
  city.x=city.width/2;   
 }

  
  

console.log(World.mouseX+"      "+World.mouseY)
 

  
}

function spawnbottompipes(){
 if(frameCount%100===0) {
bottompipe=createSprite(600,500,20,20) 
toppipe=createSprite(600,4,20,20)
   toppipe.y=Math.round(random(1,240))
   bottompipe.y=toppipe.y+650
   // toppipe.debug=true;
   // bottompipe.debug=true;
bottompipe.addImage(bottomi) 
bottompipe.scale=.9; 
   console.log(toppipe.y)
 bottompipe.velocityX=-5  
 bottompipe.lifetime= 120
 toppipe.addImage(topi) 
toppipe.scale= 1.1; 
 toppipe.velocityX=-5  
 toppipe.lifetime= 120 
 num=Math.round(random(1,4)) 
 pipeGroup.add(toppipe);
 bottompipeGroup.add(bottompipe);  
  toppipe.depth=gameover.depth;
   gameover.depth+=1;
   bottompipe.depth=gameover.depth;
   gameover.depth+=1;
  toppipe.depth=restart.depth;
   restart.depth+=1;
  bottompipe.depth=restart.depth;
   restart.depth+=1;
}  
} 









