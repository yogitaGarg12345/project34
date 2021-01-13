const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function setup(){
 canvas = createCanvas(windowWidth/2,windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;

   let canvasmouse = Mouse.create(canvas.elt)
   canvasmouse.pixelRatio = pixelDensity();
   let options = {
       mouse : canvasmouse
   };
   mConstraint = MouseConstraint.create(engine,options)
   World.add(world,mConstraint)

   pendulum1 = new Pendulum (100,500,60,60)
   pendulum2 = new Pendulum (160,500,60,60)
   pendulum3 = new Pendulum (220,500,60,60)
   pendulum4 = new Pendulum (280,500,60,60)
   pendulum5 = new Pendulum (340,500,60,60)

   sling1 = new Slingshot(pendulum1.body,{x:400,y:500})
   sling2 = new Slingshot(pendulum2.body,{x:460,y:500})
   sling3 = new Slingshot(pendulum3.body,{x:520,y:500})
   sling4 = new Slingshot(pendulum4.body,{x:580,y:500})
   sling5 = new Slingshot(pendulum5.body,{x:640,y:500})
}

function draw(){
Engine.update(engine);

pendulum1.display();
pendulum2.display();
pendulum3.display();
pendulum4.display();
pendulum5.display();
 
sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();

}

function MouseDragged(){
    Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY})
}

function MouseDragged(){
    Matter.Body.setPosition(pendulum2.body,{x:mouseX,y:mouseY})
}

function MouseDragged(){
    Matter.Body.setPosition(pendulum3.body,{x:mouseX,y:mouseY})
}

function MouseDragged(){
    Matter.Body.setPosition(pendulum4.body,{x:mouseX,y:mouseY})
}

function MouseDragged(){
    Matter.Body.setPosition(pendulum5.body,{x:mouseX,y:mouseY})
}

