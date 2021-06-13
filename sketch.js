const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var engine, world;
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var gameState=0;
var count=0;
function setup(){
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  text("Score:"+score, 30, 40);
  text("500", 420, 520);
  text("500", 345, 520);
  text("500", 270, 520);
  text("500", 495, 520);
  text("100", 185, 520);
  text("200", 580, 520);
  text("100", 105, 520);
  text("200", 665, 520);
  text("100", 10, 520);
  text("200", 740, 520);
  text("Count: "+count, 150, 40);
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(particle != null){
      particle.display();
      if(particle.body.position.y>760){
        if(particle.body.position.x>250 && particle.body.position.x<560){
          score=score+500;
          particle=null;
        } else if(particle.body.position.x>17 && particle.body.position.x<242){
          score=score+100;
          particle=null;
        } else if(particle.body.position.x>570 && particle.body.position.x<800){
          score=score+200;
          particle=null;
        } 
      }
      if(count>=5){
        gameState=1;
        textSize(50);
        fill("pink");
        stroke("yellow");
        text("YOU HAVE REACHED THE END", 100, 400);
        text("YOUR SCORE" + score, 200, 450);
      }
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
}
function mouseClicked(){
  if(gameState !== 1){
    particle = new Particle(mouseX, 10, 10);
    console.log(particle.body.position.x);
    count++;
  }
}