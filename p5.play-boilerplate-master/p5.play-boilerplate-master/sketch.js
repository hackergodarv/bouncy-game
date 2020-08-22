var rectangle1,rectangle2

function setup() {
  createCanvas(800,800);
 rectangle1= createSprite(400, 100, 50, 50);
 rectangle2= createSprite(400, 800, 50, 50); 
 rectangle1.shapeColor="blue"
 rectangle2.shapeColor="blue"
 rectangle2.velocityY=-2 
 rectangle1.velocityY=2 
}

function draw() {
  background(0,0,0);  
  drawSprites();
//  rectangle1.x=World.mouseX
 // rectangle1.y=World.mouseY

 // if(rectangle1.x-rectangle2.x<rectangle2.width/2+rectangle1.width/2
  // && rectangle2.x-rectangle1.x<rectangle2.width/2+rectangle1.width/2
 //  && rectangle1.y-rectangle2.y<rectangle2.height/2+rectangle1.height/2
 //  && rectangle2.y-rectangle1.y<rectangle2.height/2+rectangle1.height/2 )
//
 //   {
 //     rectangle1.shapeColor="red"
// rectangle2.shapeColor="red"  
 //   }
  //  else{
//      rectangle1.shapeColor="blue"
 //     rectangle2.shapeColor="blue" 
 //   }
   if(rectangle1.x-rectangle2.x<rectangle2.width/2+rectangle1.width/2
   && rectangle2.x-rectangle1.x<rectangle2.width/2+rectangle1.width/2
)
   {
     rectangle1.velocityX=rectangle1.velocityX*(-1)
     rectangle2.velocityX=rectangle2.velocityX*(-1)
   }
     if  ( rectangle1.y-rectangle2.y<rectangle2.height/2+rectangle1.height/2
   && rectangle2.y-rectangle1.y<rectangle2.height/2+rectangle1.height/2 )
   {
    rectangle1.velocityY=rectangle1.velocityY*(-1)
    rectangle2.velocityY=rectangle2.velocityY*(-1) 
   }
   
}

