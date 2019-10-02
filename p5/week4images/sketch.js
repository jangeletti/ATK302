var grilledCheese;

function setup() {
  // put setup code here
  createCanvas (windowWidth, windowHeight);
  grilledCheese = loadImage("assets/grilledcheese.jpg");
}

function draw() {
  // put drawing code here
  scale(0.5);
  image(grilledCheese, 50, 50);
}

function mouseReleased () {

  console.log(mouseX + ',' + mouseY);
}
