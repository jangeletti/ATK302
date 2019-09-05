function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
background('white');

if (mouseIsPressed) {
  fill('#b1b5b0');
  ellipse(400, 300, 400, 200);
  ellipse(500, 200, 100, 60);
  ellipse(700, 300, 50, 30);
  ellipse(200, 150, 60, 45);
  ellipse(350, 450, 25, 10);

} else {

  fill('#a9a9a9');
  quad(200, 200, 210, 210, 210, 510, 200, 500);
  quad(210, 210, 280, 190, 280, 490, 210, 510);
  fill('#414141')
  quad(200, 160, 210, 170, 210, 210, 200, 200);
  quad(210, 170, 280, 150, 280, 190, 210, 210);
  quad(200, 160, 270, 140, 280, 150, 210, 170);
  fill('#55d42f');
  ellipse(246, 274, 7, 7);
  fill('#ffffff');
  ellipse(260, 195, 25, 25);
  ellipse(234, 203, 25, 25);
  fill('#000000');
  ellipse(260, 195, 7, 7);
  ellipse(234, 203, 7, 7);

}



}

function mousePressed () {


  print(mouseX + ',' + mouseY);
}
