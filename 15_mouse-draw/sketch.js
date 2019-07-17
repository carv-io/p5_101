// we've seen how to use the mouse to control various things
// let's now use the mouse to just DRAW stuff on the screen

let col = 100;
let i = 0;
function setup() {

  createCanvas(windowWidth, windowHeight);
  background(200); // because we want the draw results to stay on the screen
                  // we do;n't want to redraw the background on every frame in draw

  angleMode(DEGREES); // needed to work nicely for the trig function below
}

function draw(){

    let xPos = mouseX; // using variables allows to separate the position logic from the shape function
    let yPos = mouseY;

    // styles
    stroke(100); // sets the border around the cirles
    strokeWeight(.5); // makes the border really thin
    fill(col, 0, 255, 50); // sets the color with the R value as dynamic

    ellipse(xPos, yPos, col/10); // here we vary the size of the ellipse using the mouse position variables
    // ellipse(mouseX, mouseY, col/10); // we could also have done this without the variables - same result


    col = col + (col * sin(i)/50); // here we're using the same kind of trig function we used in "7_color_cycle_more_improved"

    i++; // increments the value use to generate the sin values

}
