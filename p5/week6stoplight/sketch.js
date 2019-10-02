var myState = 0;
var timer = 200;
var x = 0;
var vel = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(100);
  fill('#f7ff3c');
  rect(width / 2, height / 2, 150, 400);

  switch (myState) {
    case 0: //green state
      fill('#8b0000');
      ellipse(width / 2, height / 2 - 125, 100, 100); //top circle
      fill('#c17f29');
      ellipse(width / 2, height / 2, 100, 100); // middle circle
      fill('#90ee90');
      ellipse(width / 2, height / 2 + 125, 100, 100); //bottom circle

      vel = 3;

      doTimer(1, 100);
      break;

    case 1: //yellow state
      fill('#8b0000');
      ellipse(width / 2, height / 2 - 125, 100, 100); //top circle
      fill('#fffcbb');
      ellipse(width / 2, height / 2, 100, 100); // middle circle
      fill('#003b00');
      ellipse(width / 2, height / 2 + 125, 100, 100); //bottom circle

      vel = 1;

      doTimer(2, 200);
      break;

    case 2: //red state
      fill('#ff7f7f');
      ellipse(width / 2, height / 2 - 125, 100, 100); //top circle
      fill('#c17f29');
      ellipse(width / 2, height / 2, 100, 100); // middle circle
      fill('#003b00');
      ellipse(width / 2, height / 2 + 125, 100, 100); //bottom circle

      vel = 0;

      doTimer(0 , 50);
      break;
  }

  // animated car
  fill('purple');
  rect(x, height - 50, 80, 50);
  x = x + vel;
  if (x >= width) {
    x = 0;
  }

}

function doTimer(whichState, variableTimer) {
  timer--;
  if (timer <= 0) {
    timer = variableTimer;
    myState = whichState;
  }
}
