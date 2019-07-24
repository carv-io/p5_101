
// now we'll take the same program, and rotate the output using P5's basic rotate function

var x = 100;
var angle = 90; // the rotate function will require an angle, which we'll set to 90 degrees

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(200, 0, 155);
  textSize(250);
  angleMode(DEGREES);
}

function draw(){
    background(51);
    x++;
    // angle++; // if we want create continuous rotation, we can increment the angle by an amount
    // angle = mouseX / 5; // or if we want to rotate as a function of mouse position.
    translate(width/2, height/2); // we need to translate the frame of reference to a specific spot within the canvas
                                  // otherwise, rotation will occur from 0, 0 (upper left)
                                  // coordinates, which is a weird place to rotate!
    rotate(angle); // this is the rotate function - which takes an angle as input.
    text(x, 0, 0); // here's the text function, drawing the x value to the screen.
                   // note, because we've translated everything, the x/y coordinates are just 0, 0.
}
