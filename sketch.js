const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var ground, ball;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20
var ball1,rope1

function setup(){
  
  
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,600,1200,20);
  //  ground1=new Ground(200,30,400,80);
  //  ground2=new Ground(390,200,20,400);
  //  ground3=new Ground(20,200,20,400)
    box1 = new box (900,100,70,70);
    box2 = new box (900,100,70,70)
    box3 = new box (900,100,70,70);
    box4 = new box (900,100,70,70);
    box5 = new box (900,100,70,70);
   
    box6 = new box (800,100,70,70);
    box7 = new box (800,100,70,70);
    box8 = new box (800,100,70,70);
    box9 = new box (800,100,70,70);
    box10 = new box (800,100,70,70);
   
    box11 = new box (700,100,70,70);
    box12 = new box (700,100,70,70);
    box13 = new box (700,100,70,70)
    box14 = new box (700,100,70,70)
    box15 = new box (700,100,70,70)

    ball1 = new Ball (200,500,80,80)

    rope1 = new Rope (ball1.body,{x:550,y:50})

 }

function draw(){
    background("skyblue");
    Engine.update(engine);
    
    ground.display();
    //ground1.display();
    //ground2.display();
    //ground3.display();
    box1.display();
    
    box2.display(); 
    box3.display(); 
    box4.display();
    box5.display(); 
    box6.display();
    box7.display();
    box8.display();
    box9.display(); 
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display(); 

    ball1.display();

    rope1.display();
}


function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}