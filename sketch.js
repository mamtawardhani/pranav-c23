//namespacing
const E=Matter.Engine
const W=Matter.World
const B=Matter.Bodies

var en, wo
var box1, box2;
function setup() {
  createCanvas(400,400);

  //creating engine
  en=E.create()

  //step 2: accessing the world from engine
  wo=en.world


box1=new Box(100,20,40,30)
 box2=new Box(200,20,70,20)
  
}

function draw() {
  background(0);  
  E.update(en)

  box1.display()
  box2.display()


 
}
