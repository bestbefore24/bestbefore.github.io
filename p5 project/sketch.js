let boatX = 275;
let triangleX = 200; // custom variable to control triangle position

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150,100,200);
  stroke(0,255,0);
  noStroke();
  fill(255,255,0);
  ellipse(300,100,75,75);
  fill(0,0,160);
  rect(0,340,400,60);
  fill(245,245,200);
  ellipse(0,400,500,150);
  
  fill(92, 64, 51);
  arc(boatX,330,50,25,0, PI);
  boatX += 1;
  
  // Add some text to the canvas
  fill(255);
  textSize(20);
  text("Welcome to my sketch!", 50, 50);
  
  // Update triangle position based on mouse position
  triangleX = mouseX;
  
  // Add a simple shape that follows the mouse cursor
  fill(255, 0, 0);
  triangle(triangleX, mouseY, triangleX + 50, mouseY + 50, triangleX, mouseY + 100);
}