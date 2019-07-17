// very well, printing info to the console is neat
// but sometimes it's also nice to just print values to the screen itself
// here we'll take the previous console log program, and instead of outputing values
// the console, we'll display them right on the screen
// this is also often helpful for debugging visual programs

var x = 100;

function setup() {

  createCanvas(windowWidth, windowHeight);

}

function draw(){
    background(50); // note, in order for the text to display "clean"
                    // we need to redraw the background on every frame
    x++;

    // fill(200, 0, 155); // sets the color of the font to pink (PRETTY COOL)
    fill(200, 0, x/2); // here the color shifts (WHOA)

    // textSize(250); // sets the text size to a specific size (GOOD ENOUGH)
    textSize(x); // here the font size changes over time!

    // text(x, 100, 400); // fixes the position of the text (BORING)
    text(x, x, 400); // sets the text in motion (COOL)

}
