// so, we did it, we made a nice smooth cycling of color.
// but, let's see if we can get the same result with less code.
// instead of using this directional variable and all of this min / max up logic
// let's try using a sine function, which is great and common way to cycle up and down through values

var bgColor = 100;
var i = 2;

function setup() {

  angleMode(DEGREES);

}

function draw(){
  createCanvas(800, 500);
  background(bgColor, bgColor /2, bgColor);

  // bgColor++;
  bgColor = bgColor + (100 * sin(i)/100);

  i++;

}
