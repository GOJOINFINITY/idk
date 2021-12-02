class Slingshot{
    constructor(b1,p2){

    this.sling=Matter.Constraint.create({bodyA: b1,
        pointB:p2,
        stiffness:0.0469,
        length:0.69})
    World.add(world,this.sling)
    this.pointB=p2
    }

    display(){
push()
        strokeWeight(4)
        //line(x1,y1,x2,y2)
        if(this.sling.bodyA){
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
        pop() 
    }
    fly(){
        this.sling.bodyA=null 
    }
}