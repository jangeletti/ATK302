var myTimer = 0;
var myState = 0;

function setup () {
  createCanvas(windowWidth, windowHeight);
}

function draw () {
  background(150);

  switch(myState){
  case 0:
  fill('black');
  text('What did the fish say when he swam into a wall?', width/2, height/2);
  doTimer();
  break;

  case 1:
  text('Dam.', width/2, height/2);
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
