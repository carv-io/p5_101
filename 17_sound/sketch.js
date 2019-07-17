// let's play with sound!

var wave;
var pitch;

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(50);

  wave = new p5.Oscillator();
  // wave.setType('sine');
  // wave.setType('square');
  // wave.setType('triangle');
  wave.setType('sawtooth ');

}

function draw(){

  pitch = map(mouseX, 0, width, 220, 2200);
  wave.start();
  wave.amp(.1, 1);
  wave.freq(pitch);

}
