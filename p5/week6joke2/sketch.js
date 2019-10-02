var myTimer = 0;
var myState = 0;
var font;

function preload () {
  font = loadFont('assets/BebasNeueBold.otf');
}

function setup () {
  createCanvas(windowWidth, windowHeight);
}

function draw () {
  background(150);

  switch(myState){
  case 0:
  textAlign(CENTER);
  textFont(font);
  fill('black');
  textSize(32);
  text('What did the', width/2 - 95, height/2);
  fill('blue');
  textStyle(BOLD);
  text('fish', width/2 + 2, height/2);
  fill('black');
  textStyle(NORMAL);
  text('say when he swam into a wall?', width/2 + 195, height/2);

  doTimer();
  break;

  case 1:
  textAlign(CENTER);
  textFont(font);
  fill('brown');
  textSize(128);
  textStyle()
  text('Dam!', width/2, height/2);
  doTimer();
  break;
}
}

function doTimer() {
  myTimer ++;
  if (myTimer > 300) {
    myTimer = 0;
    myState ++;
  }
  if (myState > 1) {
    myState = 0;
  }
}
