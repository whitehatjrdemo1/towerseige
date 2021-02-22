
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var ground1, ground2;
var stone;
boxes1, boxes2, box11,box12,box13,box21,bo22,box23;

var canvas, mouse, mconstraint;
function preload() {
	
}

function setup() {
	canvas = createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
	// mouse = Mouse.create(canvas.elt);
	// mouse.pixelRatio = pixelDensity();
	// var options = {
	// 	mouse:mouse
	// }
	// mconstraint = MouseConstraint.create(engine, options);
	// World.add(world, mconstraint)
	for (i=0;i,6,i++){
		box11=new Box()
	}
	stone = new Ball(50, 50, 20);
	ground1 = new Ground(width / 2, height / 2, width / 4, 20);
	ground2 = new Ground(width *3/4, height / 3, width / 4, 20);
	sling = new Chain(stone.body, { x: 65, y: 50 });


}


function draw() {
	rectMode(CENTER);

	background(150);

	Engine.update(engine);
	imageMode(CENTER);

	ground1.display();
	ground2.display();


	//sling.display();
	stone.display();;

}
function keyPressed() {
	if (keyCode === 32) {
		Body.setPosition(stone.body, { x: 65, y: height - 85 });
		sling.attach(stone.body);
	}
}

function mouseDragged() {
	Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
	sling.fly();
}

