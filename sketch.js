var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;

function preload(){
   dogImg=loadImage("Dog.png");
   dogImg1=loadImage("happy dog.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(500,500);

//create a sprite called dog,add image and give scale 
dog = new Dog(700,320,70,70);
dog.addImage("happy dog.png");
scale = 0.5;




  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 

}

// function to display UI
function draw() {
  background(46,139,87);
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  fill(255,255,254);
  stroke("black");
  //display text FOOD REMAINING AND PRESS UP ARROW TO FEED 
  if(keyWENTDown(UP_ARROW)){
    writeStock(foodS);

  }



}

//Function to read values from DB
function readStock(data){
  foodS=data.val()
}


//Function to write values in DB
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/')-update({
    Food:x
  })
}