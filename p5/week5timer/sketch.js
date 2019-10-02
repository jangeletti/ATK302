var timer = 200;

function setup() {
  // put setup code here
  createCanvas (windowWidth, windowHeight);
  background(random(255), random(255), random(255));
}

function draw() {
  // put drawing code here
  timer = timer - 1;
  if (timer <= 0) {
    timer = 200;
    background(random(255), random(255), random(255));

  }
}

function mouseReleased () {

  console.log(mouseX + ',' + mouseY);
}
