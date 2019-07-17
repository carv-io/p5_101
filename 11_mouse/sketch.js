// let's now see how we can use the mouse to control the position of an object on the screen

var x = 100;

function setup() {

  createCanvas(windowWidth, windowHeight);

}

function draw(){
    background(50);

    x++;

    fill(200, 0, 155);
    textSize(250);
    text(x, mouseX, mouseY); // same code as before, just replacing "hard-coded" values with
                            // the P5 terms "mouseX" for the position of the mouse in the X direction
                            // and "mouseY" for the Y
}
