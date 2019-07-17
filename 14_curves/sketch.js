// there are number of ways to make curves with P5
// let's start with the "bezier"
// we'll set the "control point" positions as functions of mouse position
// so we can see how the bezier curve is controlled visually

var cp1x = 1;
var cp1y = 1;

var cp2x = 1;
var cp2y = 1;

var i = 2;

function setup() {

  createCanvas(windowWidth, windowHeight);
  fill(100, 100);
  // noFill();
  angleMode(DEGREES);
}

function draw(){
  background(50);

  // set the control points
  // let cp1x = 250;
  // let cp1y = 100;
  // let cp2x = 600;
  // let cp2y = 100;

  // set the control points to be determined by mouse position
  let cp1x = mouseX - 150;
  let cp1y = mouseY;
  let cp2x = mouseX + 150;
  let cp2y = mouseY;

  // these lines are like the "handles" for the bezier curve
  stroke(100);
  line(250, 250, cp1x, cp1y);
  line(cp2x, cp2y, 600, 250);

  push();
  stroke(200, 0, 155);
  strokeWeight(10);
  bezier(250, 250, cp1x, cp1y, cp2x, cp2y, 600, 250);
  pop();




}
