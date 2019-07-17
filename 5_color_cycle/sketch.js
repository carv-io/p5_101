// That was cool, but now we're going to make the color change a bit more interesting
// with some logic that cycles the value so that it doesn't simply bleed to white


var bgColor = 140;

// Note - we don't need a setup here, since we're creating the canvas in the draw function.
// this is a bit unusual, but hey.

function draw(){
  createCanvas(800, 500);
  background(bgColor, bgColor + 30, bgColor -30);

  bgColor++;

// here we add some logic which says, if the value of bgColor hits 255,
// then reset it to something
  if (bgColor > 255){
    bgColor = 140; // setting to the original value
  }

}
