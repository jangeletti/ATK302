var myState = 0;

function setup () {
  createCanvas(windowWidth, windowHeight);
}

function draw () {
  background(150);

  switch(myState){
  case 0:
  fill('black');
  textAlign(CENTER);
  textSize(32);
  text('How do you comfort a Javascript bug?', width/2, height/2);
  break;

  case 1:
  textAlign(CENTER);
  textSize(64);
  text('You', width/2 - 175, height/2 - 100);
  fill('yellow');
  textStyle(BOLD);
  textSize(128);
  text('console', width/2, height/2);
  textStyle(NORMAL);
  textSize(64);
  fill('black');
  text('it.', width/2 + 150, height/2 + 75);
  break;
}
}

function mouseReleased() {
  myState ++;
  if (myState > 1) {
    myState = 0;
  }
}
