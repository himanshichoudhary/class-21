function isTouching(object1,object2){

    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true; 
  }
  else {
    return false;
  }
   }
  
   function bounceOff(upasana,himanshi){
    if (upasana.x - himanshi.x < himanshi.width/2 + upasana.width/2
      && himanshi.x - upasana.x < himanshi.width/2 + upasana.width/2) {
        upasana.velocityX = upasana.velocityX * (-1);
        himanshi.velocityX = himanshi.velocityX * (-1);
  }
  if (upasana.y - himanshi.y < himanshi.height/2 + upasana.height/2
    && himanshi.y - upasana.y < himanshi.height/2 + upasana.height/2){
      upasana.velocityY = upasana.velocityY * (-1);
      himanshi.velocityY = himanshi.velocityY * (-1);
  }
   }