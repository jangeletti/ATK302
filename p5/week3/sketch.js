

function setup() {
  // put setup code here
  createCanvas(500,500);
  textAlign(CENTER);

}

function draw() {
  // put drawing code here

  if(mouseIsReleased) {
    text("Hello World!", mouseX, mouseY);
  }


}

function mouseReleased () {
  background(255);
  fill(random(255), 0, 0);
  ellipse(mouseX, mouseY, 100, 50);
  fill(0, 0, 0);
  text("James Angeletti", mouseX, mouseY);

  console.log(mouseX + ',' + mouseY);


}
