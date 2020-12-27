class Box{
    constructor(x,y,width,height){

      this.a=B.rectangle(x,y,width,height)
      this.w=width
      this.h=height
      W.add(wo, this.a)
    }

    display(){
        var pos=this.a.position
        rectMode(CENTER)
        rect(pos.x,pos.y,this.w,this.h)
    }
}