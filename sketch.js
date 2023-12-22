let osc, playing, freq, amp;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator("square");
}

function draw() {
  let rojo = map(mouseX, 0, width, 50, 200);
  let verde = map(mouseY, 0, height, 100, 220);
  let azul = map(mouseX, 0, width, 150, 255);

  background(rojo, verde, azul);

  freq = constrain(map(mouseX, 0, width, 100, 300), 100, 500);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  text("tap to play", 20, 20);
  text("freq: " + freq, 200, 40);
  text("amp: " + amp, 20, 60);

  if (playing) {
    osc.freq(freq, 0.8);
    osc.amp(amp, 0.1);
  }
}

function playOscillator() {
  osc.start();
  playing = true;
}

function mouseReleased() {
  osc.amp(0, 0.8);
  playing = false;
}
