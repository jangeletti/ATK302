var myState = 0;
var size = 20;
var x = 200;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
switch(myState){
  case 0:
    background('red');
    fill('white');
    textSize(size);
    text("Welcome", width/2, height/2);
    size++;
    if (size > 150) {
      size = 0;
    }
  break;

  case 1:
  background('blue');
  fill('orange');
  textSize(size);
  text("To", width/2, height/2);
  size = size - 1;
  if (size < 0) {
    size = 150;
  }
  break;

  case 2:
  background('green');
  fill('yellow')
  text("Game", x, height/2);
  x+=5;
  if (x > width) {
    x = 0;
  }
  break;


}

}

function mouseReleased() {
  myState++;
  if (myState > 2){
    myState = 0;
  }
  console.log(mouseX + ',' + mouseY);
}
