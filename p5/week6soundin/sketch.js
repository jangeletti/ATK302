var mic;
var vol;
var y = 0 ;

function setup() {
  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(100);

ellipse(200, y, 100, 10) ;
  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 3) {
    // do something
    background(random(255), random(255), random(255));
    y = y + 5 ;

  }

  if (y >= windowHeight) {
    y = 0;
  }


  textSize(18);
  text("Volume:" + vol + "%", 80, 400);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
