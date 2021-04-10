var PLAY = 1;
var END = 0;
var gameState=1;
var knife;
var score,fruit,fruit2,fruit3,fruit4,fruitGroup,monster,enemyGroup;

function preload(){
 knifeimg = loadImage("sword.png") ;
   fruit1 = loadImage("fruit1.png")
   fruit2 = loadImage("fruit2.png");
   fruit3 = loadImage("fruit3.png");
   fruit4 = loadImage("fruit4.png");
   monsterImage = loadImage("alien1.png","alien2.png");
gameOverImage=loadImage("gameover.png");
}


function setup(){
  
  createCanvas(500,500);

   knife = createSprite(40,200,20,20);
  knife.addImage("image",knifeimg);
  knife.scale = 0.7;
  fruitGroup = new Group();
  enemyGroup = new Group();
 score=0
}                         


function draw(){
  
    background("lightblue");
        text("Score: "+ score, 300,50);

Enemy();
  
knife.addImage("image",knifeimg);
  knife.y = mouseY
knife.x = mouseX
  if (gameState === PLAY ){
    
    
     
  

  fruits();  
    
    knife.y = mouseY
knife.x = mouseX
    
    
      
    

  
  if(knife.isTouching(fruitGroup)){
     fruitGroup.destroyEach()
    score=score+10
     }
   
   else
     
   if(knife.isTouching(enemyGroup)){
     enemyGroup.destroyEach()
     fruitGroup.destroyEach()
     enemyGroup.setVelocityXEach(0)
     fruitGroup.setVelocityXEach(0)
     knife.addImage(gameOverImage)
   knife.x= 200
   knife.y= 200
 gameState=END
     
     }
  
  
  
  
  
  }
  
  if(gameState == END) {
    knife.addImage(gameOverImage)
    
    
    
    
  }
  

  drawSprites();

}

function fruits(){
if (World. frameCount%80===0){
fruit=createSprite(400, 200, 20, 20);
fruit. scale=0.2;
//fruit. debug=true;
r=Math.round(random(1, 4) ) ;
if (r == 1) {

fruit. addImage("1",fruit1);
} else if (r == 2) {
fruit. addImage("2",fruit2);
} else if (r == 3) {
fruit . addImage ("3",fruit3);
} else {
fruit. addImage("4",fruit4);
}
fruit. y=Math. round(random(50, 340) ) ;
fruit. velocityX=-7;
fruit. setLifetime=100;
fruitGroup.add(fruit);
}
}


function Enemy (){
 if (World. frameCount%200===0){
monster=createSprite (400, 200, 20, 20) ;
monster . addAnimation( "moving", monsterImage);

monster.y=Math. round(random(100, 300)) ;
monster.velocityX=-8;
monster.setLifetime=50;
enemyGroup.add (monster) ;
  
  
  
  
  
  
}

}