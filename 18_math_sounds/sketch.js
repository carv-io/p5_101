// here we're going to combine the mathy functions with the sound / pitch control

var origin;
var wave;
var pitch;

function setup() {

  createCanvas(windowWidth, windowHeight);
  noStroke();
  origin = createVector(400, 500);

  // create a sound object, assign it to wave var.
  wave = new p5.TriOsc();

}

function draw(){
  background(50);
  sineWave();
  drawCircle();
  playSound();

}

function playSound(){
  pitch = map(mouseX, 0, width, 220, 2200);
  wave.start();
  wave.amp(.05, 1);
  wave.freq(pitch);

}

function drawParabola(){
  fill(200, 0, 155);

  let x;
  let y;
  let a = map(mouseX, 0, width, -10, 10);
  let b = 90;
  let c = 800;

  for (x = -50; x < 50; x = x + .1){
    y = a * (x * x) + (b * x) + c;
    ellipse(x + 250, y, 5);
  }
}


function drawCircle(){
  fill(200, 0, 155);

  let y;
  let x;
  let t;
  let r = mouseX;

  for (t = 0; t < 1000; t++){
    x = r * cos(t) + origin.x;
    y = r * sin(t) + origin.y;
    ellipse(x, y, 2);
  }
}

function sineWave(){
  fill(200, 0, 155);

  let y;
  let t;
  let a = mouseY; // amplitude >> controlled by mouse position
  let w = map(mouseX, 0, width, 0, .01); // angular velocity (relates to frequency) >> controlled by mouse X, scaled down
  let phi = origin.x; // phi - phase shift

  for (t = 0; t < width; t = t + 20){
    y = a * sin(w * t + phi) + origin.y;
    ellipse(t, y, 10);
  }
}
