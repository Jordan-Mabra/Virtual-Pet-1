var dog,dog1, happyDog, database, foodS, foodStock; 

function preload()
{
dog1 = loadImage("images/Dog.png");
happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
  foodStock.set(20);

  dog = createSprite(250,250,15,50);
  dog.addImage(dog1);
  dog.scale = 0.1;
  
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
if (keyWentUp(UP_ARROW)){
  dog.addImage(dog1);
}


if(foodS!== undefined){
  textSize(20);
  fill("grey");
  stroke(2);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!", 100,50);


  if(foodS === 0){
    foodS = 20;
  }
  drawSprites();

}
 function readStock(data){
   foodS = data.val();
 }

 function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
   database.ref("/").update({
     Food:x
   })
 }
 
 
 
 
 
  
}



