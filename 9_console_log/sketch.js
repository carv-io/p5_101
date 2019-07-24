// alright, we're getting somewhere maybe, but a few more basic "gotta know" stuff
// here we're going to see how to display data in the browser console.
// why? mostly for debugging and testing ideas

var x = 100;
function setup() {

  createCanvas(windowWidth, windowHeight);
  background(50);
  //console.log(x); // here we display the output of the initial value of x in the console

}

function draw(){
    x = x + 100;
    console.log(x); // here we display the ever-changing value
}
