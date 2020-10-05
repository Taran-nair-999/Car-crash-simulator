var car,wall;
var speed,weight;

function setup() {
  createCanvas(1500,400);
  
  speed=random(55,90);
  weight=random(400,1500);
  
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor=color(80,80,80);

  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor=color(80,80,80);
}
function draw() {
  background(255,255,255);

  var deformation = 0.5 * weight * speed * speed/22509;

  text("Speed = "+speed,50,50); 
  text("Weight = "+weight,300,50);
  text("Deformation = "+deformation,550,50); 

  if(car.isTouching(wall))
  {
    if(deformation > 180)
    {
      car.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100)
    {
      car.shapeColor = color(230,230,0);
    }
    if(deformation < 100)
    {
      car.shapeColor = color(0,255,0);
    }
    car.collide(wall);
  }
  drawSprites();
}