var car,wall;
var speed,weight;
var car2;
var car3;
var car4;
var wall1;
var wall2;
var wall3;
var wall4;
function setup() {
  createCanvas(1600,600);
  car=createSprite(150, 100, 50, 50);
  car2=createSprite(150,200,50,50);
  car3=createSprite(150,300,50,50);
  car4=createSprite(150,400,50,50);
  wall1=createSprite(100,100,20,50)
  wall2=createSprite(100,200,20,50);
  wall3=createSprite(100,300,20,50);
  wall4=createSprite(100,400,20,50);
  
  
  
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX = 1;
  car2.velocityX = 3;
  car3.velocityX = 2;
  car4.velocityX = 5;
  deformation = 0.5*weight*speed*speed/22500;
}

function draw() {
  background("black");  
  deformation = 0.5*weight*speed*speed/22500;

  if (deformation<100){
  car.shapeColor="green";
  car2.shapeColor="yellow";
  car3.shapeColor="blue"; 
  car4.shapeColor="red"; 
  }
  if(deformation===100-180){
    car.shapeColor="yellow";
    car2.shapeColor="red";
    car3.shapeColor="red";
    car4.shapeColor="green";
  }
  if (deformation>180){
   car.shapeColor="red"; 
   car2.shapeColor="green"; 
   car3.shapeColor="blue"; 
   car4.shapeColor="yellow"; 
  }
  drawSprites();
}