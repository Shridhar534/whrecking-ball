class box{
 
  constructor(x,y,width,height){
    var box_options ={
        restitution : 1.3,
        friction : 3
    }
      this.body=Bodies.rectangle(x,y,width,height,box_options)
      this.width=width
      this.height=height
      World.add(world,this.body)
  }
    display(){
        var angle=this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate (angle)
        
    rectMode(CENTER);
     fill("brown")
     rect(0,0,this.width,this.height);  
     pop()
    }

}