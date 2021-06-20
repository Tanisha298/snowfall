class Snowfall{
    constructor(x,y){
        var op={
        friction:0.6,
        restitution:0.4
    }
    this.body=Bodies.circle(x,y,40,op)
    this.radius=40
    this.image=loadImage("snow5.webp")
    this.lifetime=100;
    World.add(world,this.body)
}
display(){
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
}
updateY(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,1400),y:random(0,50)})
    }
}
}