// okay, well, that worked, but it's a little "jumpy"
// so let's find a way to smooth out the cycle a bit

var bgColor = 100;
var colorDirection = "UP";

function setup() {

}

function draw(){
  createCanvas(800, 500);
  background(bgColor, bgColor + 30, bgColor - 30);


// So, one way to do this is a bit crude, but it's helpful to consider
// since it allows us to look at some standard "program flow controls"

// up top, we set a global variable to initialize the direction that we're going
// to increment the color variable. We initially set it to "UP".

  if (colorDirection == "UP"){ // here we say, if it's "UP", then
    bgColor++; // increment in the positive direction
  } else { // OTHERWISE! ...
    bgColor--; /// decrement (go in the negative direction)
  }

  if (bgColor > 200){ // here we check if we've hit a "max" value arbitrarily set to 200
    colorDirection = "DOWN"; // and BOOM, we now switch the direction something not "UP"
  } else if (bgColor == 100){ // However, once we hit this "min" value,
    colorDirection = "UP"; // we need to reset the direction to UP, so that it goes back in the other direction
  }
}
