// okay! let's now try something a bit fancy
// instead of just using the built-in shape functions
// let's try to make some shapes using the underlying math
// and use the results to "plot" the shapes on the screen
// something like a math calculator

var origin;
function setup() {

  createCanvas(windowWidth, windowHeight);
  noStroke();
  // getting clear on what the Origin, or [0,0] position using a vector.
  origin = createVector(400, 500);

}

function draw(){
  background(50);
  // drawAxes();
  drawTicks();

  drawLine();
  sineWave();
  drawCircle();
  // drawParabola();

}

function drawParabola(){
  fill(200, 0, 155);

  // https://www.desmos.com/calculator/zukjgk9iry

  let x;
  let y;
  let a = map(mouseX, 0, width, -10, 10);
  let b = 90;
  let c = 800;

  for (x = -50; x < 50; x = x + .1){
    y = a * (x * x) + (b * x) + c;
    ellipse(x + 250, y, 5);
  }
}


function drawCircle(){
  // set the line style
  fill(200, 0, 155);

  // http://mathworld.wolfram.com/ParametricEquations.html
  let y;
  let x;
  let t;
  let r = mouseX;

  for (t = 0; t < 1000; t++){
    x = r * cos(t) + origin.x;
    y = r * sin(t) + origin.y;
    ellipse(x, y, 2);
  }
}

function sineWave(){
  // set the line style
  fill(200, 0, 155);

  // formula for sine curve is described nicely here, http://mathonweb.com/help_ebook/html/trigonometry.htm#sinusoidal

  let y;
  let t; // time (substitutes for "x" or values along the x axis)
  let a = mouseY; // amplitude >> controlled by mouse position
  let w = map(mouseX, 0, width, 0, .01); // angular velocity (relates to frequency) >> controlled by mouse X, scaled down
  let phi = origin.x; // phi - phase shift

  for (t = 0; t < width; t = t + 20){
    y = a * sin(w * t + phi) + origin.y;
    ellipse(t, y, 10);
  }
}

function drawLine(){
  // set the line style
  fill(200, 0, 155);
  let x; // this value will be incremented in the loop logic.
  let y; // this value is the "output" of the graphing function.
  let b = 0;
  let m = 1;
  let plotSpacing = 10; // this variable controls the "resolution" of the line lot

  b = origin.x + origin.y - b; // corrects for the arbirtary positioning of the origin in the axis graphing
                              // and reveres the value of the intercept to accoun for P5 coordinate logic
  m = -m; // again, addresses that the origin and directionality in P5 is opposite to traditional math graphing

  for (x = 0; x < 2000; x = x + plotSpacing){
    // function for a line: y = mx + b --> translates to y = slope * x + "y intercept"
    y = (m * x) + b; // we've already set up the variables to work with the standard formula, which now just works directly as code
    ellipse(x, y, plotSpacing * .75); // drawing circles for each point
  }

  // same plot, only draws the clear "line" instead of the dots
  for (x = 0; x < 500; x++){
    y = (m * x) + b;
    ellipse(x, y, 1);
  }


}

function drawAxes(){

  // line styles


  // horizontal axis
  line(0, origin.y, width, origin.y);
  // vertical axis
  line(origin.x, 0, origin.x, height);
}

function drawTicks(){

  // tick styles
  noStroke();
  fill(255);

  // spacing variables
  let tickWidth = 8;
  let tickSpacing = 50;

  // vertical axis ticks
  for (let i = 0; i < 100; i++){
    ellipse(origin.x, i * tickSpacing, tickWidth);
  }

  // vertical tick labels
  // for (let i = -10; i < 100; i++){
  //   textAlign(RIGHT);
  //   textSize(11);
  //   text(((i * tickSpacing) - origin.y) * -1, origin.x - 7, i * tickSpacing + 4);
  // }

  // horizontal axis ticks
  for (let i = 0; i < 100; i++){
    ellipse(i * tickSpacing, origin.y, tickWidth);
  }

  // horizontal tick labels
  // for (let i = -10; i < 100; i++){
  //   textAlign(CENTER);
  //   textSize(11);
  //   text((i * tickSpacing) - origin.x, i * tickSpacing - 1, origin.y + 18);
  // }


}
