class Monster{
    constructor(x,y,r){
        var options={
            isStatic: true,
            density:1,
            
        };
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("Monster-01.png");
        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)
        World.add(world,this.body)
            }
            display(){
                var pos= this.body.position;
                push()
                translate(pos.x ,pos.y);
                //rotate(angle);
            image(this.image,this.body.position.x,this.body.position.y,300,300);
               //ellispe(radius);
            pop()
            }
        }