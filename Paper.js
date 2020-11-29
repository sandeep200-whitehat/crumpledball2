class Paper{
    constructor(x,y,r){
        var options={
            restitution:0.3,
            isStatic:false,
            friction:0.5,
            density:1.2
            
        }

this.x=x
this.y=y
this.r=r
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body)
this.image = loadImage("sprites/paper.png");
this.radius=90



    }
    display(){
        var pos = this.body.position
var angle=this.body.angle;
push()
translate(pos.x,pos.y)
rotate(angle)
rectMode(CENTER)
imageMode(RADIUS);
image(this.image,100,120,this.radius,this.radius);
pop()
    }
}