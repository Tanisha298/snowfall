const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var drops=[]
var maxdrop=100

function preload() {
  // create getBackgroundImg( ) here
  backgroundImg=loadImage("snow3.jpg")
}


function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
  world = engine.world;
  
  if(frameCount%500===0){
    for(var i=0;i<maxdrop;i++){
      drops.push(new Snowfall(random(0,400),random(0,400)))
    }

  }
}


function draw() {
  if(backgroundImg)
background(backgroundImg)

    Engine.update(engine);
    for(var i=0;i<maxdrop;i++){
      drops[i].display()
      drops[i].updateY()
    }
    

}