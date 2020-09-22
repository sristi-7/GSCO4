var car,wall1;
var speed,weight;

function setup() {
  createCanvas(1600,600);

  car=createSprite(150, height/2, 50, 50);
  wall1=createSprite(1300,height/2,20,height/2)
  
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX = speed;
}

function draw() {
  background("black");  
  if(car.isTouching(wall1)){
    car.velocityX=0;
    deformation = 0.5*weight*speed*speed/22500;
    if (deformation<100){
      car.shapeColor="green";
    }
    if(deformation>=100 && deformation<=180){
      car.shapeColor="yellow";
    }
    if (deformation>180){
      car.shapeColor="red"; 
    }
  }
  drawSprites();
}