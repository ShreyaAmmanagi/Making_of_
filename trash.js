class paper{
constructor(x,y,radius){
    var properties = {restitution: 0.3,
                       density: 0.04,
                       friction: 0.5,
                       
                       

                       
    }
    //Pimage = loadImage("paper.png")
  this.body = Bodies.circle(x,y,radius,properties)
  this.radius = radius;
  this.image = loadImage("paper.png")
  
  World.add(world,this.body);
}
display(){
    
    imageMode(RADIUS);
    image(this.image,this.body.position.x,this.body.position.y,this.radius);
    


}

}