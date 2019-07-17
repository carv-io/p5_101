// Now we're going to introduce our first VARIABLE.
// A variable is generally a word or a letter that can have any value assigned to it
// P5 keeps the variable business pretty basic.

// by declaring a variable outside of any of the functions at the top of the program
// any function within the program can access or update its value
// so here we declare our first variable, a value that will control the background color

var bgColor = 140;

function setup() {
  createCanvas(800, 500);
  background(bgColor);

  // here we'll set the various RGB values by manipulating the variables value:
  background(bgColor, bgColor + 30, bgColor -30);

  // this corresponds to
  // background(140, 170, 110); which has highest "G" value so looks green.

}
