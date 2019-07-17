// Here we get SOMETHING to happen using our first "FUNCTION"
// the standard one used in P5 is called "setup"
// In this little program, we paint the background of the canvas in BLACK

function setup() {
  createCanvas(800, 500); // first we need to create a canvas
  background(0); // then we need to give make it visible with a background

  // or RED!
  // background('red');

  // or RED using RGB values:
  // background(255, 0, 0);

  // or some randomized colors
  // background(random(0, 255), random(0, 255), random(0, 255));

}
