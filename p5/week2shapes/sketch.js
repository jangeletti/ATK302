var x = 0
var y = 50

function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 800); // always in setup

}

function draw() {

  background('#3890CE');
  noStroke();

  //fill(204);
  //triangle(18, 18, 18, 360, 81, 360);

  fill('#B5651D');
  rect(360, 250, 100, 500);

  //fill(204);
  //quad(189, 18, 216, 18, 216, 360, 144, 360);

  fill('yellow');
  ellipse(x, 100, 100, 100);
  x++;
  if (x > 820) x = -100;

  fill('white');
  ellipse(y, 150, 400, 100);
  y--;
  if (y < -200) y = 920;

  fill('green');
  ellipse(425, 200, 350, 350);

  // fill(204);
  // triangle(288, 18, 351, 360, 288, 360);

  // fill(255);
  // arc(479, 300, 280, 280, PI, TWO_PI);

  fill(0);
  text(mouseX + ',' + mouseY, 20, 20);
}

function mouseReleased () {

  console.log(mouseX + ',' + mouseY);
}
