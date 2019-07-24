var ballArr = []; // here we define an empty array variable

function setup() {
  createCanvas(windowWidth, windowHeight);
  // not much to do in setup, because all of the objects will
  // only show up based on a user action
}

function draw(){
  background(0);

  // this entire loop runs on every frame, 60FPS.
  for (let i = 0; i < ballArr.length; i++){ // while the array starts as empty
                                            // every time the mouse is clicked, a new object is added to
    ballArr[i].make();                      // so on each frame, we are making (or "re"-making) all of the objects that have been stored in the array
    ballArr[i].move();                      // and for each, we're calling the move function which makes the balls pulse in size
  }

}

function keyPressed() { // this is a built in P5 function that responds to any keypress.

  if (keyCode === UP_ARROW){ // this condition ensure that only the up arrow will trigger what follows
    for (let i = 0; i < ballArr.length; i++){ // on each up arrow keypress, we loop through all elements of the array,
      ballArr[i].colorize();                  // and call the colorize function
    }
  }

}

function mousePressed() { // this is a built in P5 function that responds to a mouse click

  var ballInstance = new Ball(mouseX, mouseY); // when the mouse is pressed, we create a new Ball "object" at the x/y location of the mouse
  ballInstance.make();                         // and then with this ball, we call the "make" function that is a method of the object
  ballInstance.colorize();                     // calls a function to set a random color per ball
  ballArr.push(ballInstance);                  // and lastly, store this object in the global array so we can access it later

}

function Ball(x, y){   // this is one way to define an "object" in JavaScript, i.e. as a "function"
                      // the object or function requires two parameters, an x and a y (these were passed based on the mouse position)
  this.xPos = x;       // we then pass in the x position and set this as a property of the ball "instance"
  this.yPos = y;      // same for y
  this.size = random(10, 200);     // then we set the size to be random within a range
  this.angle = 0;     // and set the initial angle (this will get updated during draw)
  this.clr = color(150, 100, 150); // each ball has an initial color (before the up arrow key is clicked, which changes the color)

  this.move = function(){  // the move function, when called, sets the balls into pulsing motion
    this.size = (sin(this.angle) + this.size); // the size is updated on every frame by a sine function
    this.xPos = (sin(this.angle)*5 + this.xPos); // same with the x position
    this.yPos = (cos(this.angle)*10 + this.yPos); // same with the y position
    this.angle += .05;                            // the change in the angle determines the
  }

  this.colorize = function(){
      this.clr = color(random(0,255), random(0,100), 100); // set a random color per ball
  }

  this.make = function (){
      fill(this.clr, 95);
      stroke(150);
      strokeWeight(2);
      ellipse(this.xPos, this.yPos, this.size);
  }
}
