// here we'll create a bunch of basic shapes or "primitives"
// so many ways to play with these of course, to come.

var stretchX, stretchY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(200, 0, 155);
  stroke(200);
  strokeWeight(5);

}

function draw(){
  background(51);

  stretchX = 0;
  stretchY = 0;

  // stretchX = mouseX;
  // stretchY = mouseY;

  // stretchX = map(mouseX, 0, width, 0, 200);
  // stretchY = map(mouseY, 0, width, 0, 200);

  // ellipse;
  push();
    translate(width * 1/7, height/5);
    ellipse(0, 0, 100 + stretchX, 100 + stretchY);
  pop();

  // rectangle
  push();
    rectMode(CENTER);
    translate(width * 2/7, height/5);
    rect(0, 0, 100 + stretchX, 100 + stretchY);
  pop();

  // triangle
  push();
    translate(width * 3/7, height/5 + 50);
    triangle(-50, 20, 100, 20, 25 + stretchX, -100 + stretchY);
  pop();

  // point
  push();
    strokeWeight(10 + stretchX);
    translate(width * 4/7, height/5);
    point(0, 0);
  pop();

  // line
  push();
    strokeWeight(10);
    translate(width * 5/7, height/5);
    line(0, 0, 100 + stretchX, 0);
  pop();


}
