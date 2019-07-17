// here we're going to combine the mathy functions with the sound / pitch control

var origin;
var wave;
var pitch = 1;
var circleR = 2;
var i = 2;
var j = 2;
var k = 2;
var aSine = 2;
var wSine = 2;
var pathR = 2;

function setup() {

  createCanvas(windowWidth, windowHeight);
  // frameRate(45);
  noStroke();
  origin = createVector(400, 500);
  angleMode(DEGREES);

  // create a sound object, assign it to wave var.
  wave = new p5.TriOsc();

}

function draw(){
  background(0, 255, 0);
  sineWave();
  drawCircle();
  playSound();
}

function playSound(){

  wave.start();
  wave.amp(.05, 1);
  wave.freq(pitch);
  pitch = pitch + (100 * sin(k)/15);
  k++;

}


function drawCircle(){
    fill(0, 211,255);

  let y;
  let x;
  let t;

  for (t = 0; t < 360; t++){
    x = circleR * cos(t) + origin.x;
    y = circleR * sin(t) + origin.y;
    ellipse(x, y, 1.5);
  }

  circleR = circleR + (100 * sin(i)/20);
  i++;
}

function sineWave(){
  fill(0, 0, 100);

  let y;
  let t;
  let phi = origin.x; // phi - phase shift

  for (t = 0; t < width; t = t + 20){
    y = aSine * sin(wSine * t + phi) + origin.y;
    ellipse(t, y, pathR * 5);
  }

  aSine = (pathR * cos(t) + origin.x) * .3; // amplitude
  wSine = (pathR * sin(t) + origin.y) * .5; // angular velocity (relates to frequency)

  pathR = pathR + (5 * sin(j)/100);
  j++;


}
