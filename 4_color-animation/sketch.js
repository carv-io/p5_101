// Here we're going to take our dynamically colored background
// and get fancy by "animating" the color with P5's built-in draw function

var bgColor = 140;

function setup() {

}

function draw(){
  // so at first, it seems like there is no difference
  createCanvas(800, 500);
  background(bgColor, bgColor + 30, bgColor -30);
  // what's actually happening here is that the canvas
  // and the background color are being set "anew" on literally every frame,
  // 60 frames per second
  // you just can't see it, because there's no change

  // however, because we're setting this in the draw function,
  // we can now vary the value of our global variable on every frame
  // incrementing by 1 each frame

  // bgColor = bgColor + 1;

  // which can be written in a slightly tidier way with this notation:
  // bgColor++;

}
