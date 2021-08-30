class Tree {
    constructor(x,y,w,h){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        this.image = loadImage("Images/tree.jpeg")
        World.add(world,this.body)
    }
   display (){
       imageMode(CENTER)
       image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)

   }
}