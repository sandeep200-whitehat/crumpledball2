class Dustbin{
    constructor(x,y,width,height){
        var options={
           // restitution:0.8,
           // friction:0.3,
           // density:1.0
            isStatic:true
    
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
       this.width=width;
        this.height=height;
      //  this.image = loadImage("sprites/dustbin.png");
        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        var ang =this.body.angle;
        push();
        translate(pos.x,pos.y)
       rotate(ang)
        rectMode(CENTER);
      //  imageMode(CENTER);
       // image(this.image, 0, 0, this.width, this.height);
        fill("green");
       rect(0,0,this.width,this.height)
        pop()
    
    }
    
    }

    
    
    