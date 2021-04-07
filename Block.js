class Block {
 constructor(x,y,width,height) {
   var options = {
       friction : 0.0,
       restitution : 0.4
   }
   this.visibility = 255;
   this.body = Bodies.rectangle(x,y,width,height,options)
   this.width = width;
   this.height = height;
   World.add(world,this.body)
}
   
   display(){
    var angle = this.body.angle
    push();
    if (this.body.speed < 3) {
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
   }
   else {
    push();
    World.remove(world, this.body);
    this.visibility = this.visibility - 1;
    tint(255, this.visibility);
    pop();
}

 }
}