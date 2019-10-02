var collection;
var x = 0;
var y = 150;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  collection = loadFont('assets/Rushing_Nightshade.ttf');
}

function draw() {
  // put drawing code here
  background('white');
  fill('blue');
  textFont(collection, 64);
  text("hello world", x, y);
  x+=3;
  if (x > width) {
    x = -300;
  }
  if (y > 200) {
    y = y + 1;
  }
  if (y < 100){
    y = y - 1;
  }

}

function mouseReleased () {

  console.log(mouseX + ',' + mouseY);
}
