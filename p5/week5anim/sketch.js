var x = 0

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
  background('white');
  rect (x, 10, 10, 10);
  x++;

  if (x > windowWidth) {
    x = 0;
  }
}

function mouseReleased () {

  console.log(mouseX + ',' + mouseY);
}
