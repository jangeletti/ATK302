var myState = 0;

function setup () {
  createCanvas(windowWidth, windowHeight);
}

function draw () {
  background(150);

  switch(myState){
  case 0:
  fill('black');
  text('How do you comfort a Javascript bug?', width/2, height/2);
  break;

  case 1:
  text('You console it.', width/2, height/2);
  break;
}
}

function mouseReleased() {
  myState ++;
  if (myState > 1) {
    myState = 0;
  }
}
