let t = 'This is Puffystick, the new Pokemon. He is a steel and electric type. You can find them in the wild at level 20 already.'
let v = 'When Puffystick reaches level 40, it evolves into Carbo Dioxy which is a poision and flying type.'

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
background('white');

if (mouseIsPressed) {
  background('#78f4ff');
  fill('black');
  text(v, 10, 10, 400, 200);
  fill('#b1b5b0');
  ellipse(550, 250, 150, 100);
  ellipse(250, 350, 60, 45);
  ellipse(498, 377, 50, 25);
  ellipse(390, 300, 300, 200);
  fill('#f2e380');
  arc(325, 275, 75, 75, TWO_PI, PI, CHORD);
  arc(390, 275, 75, 75, TWO_PI, PI, CHORD);
  fill('#55d42f');
  arc(335, 275, 15, 15, TWO_PI, PI, CHORD);
  arc(400, 275, 15, 15, TWO_PI, PI, CHORD);



} else {
  noStroke();
  fill('green');
  rect(0, 400, windowWidth, 300);
  fill('#78f4ff');
  rect(0, 0, windowWidth, 400);
  fill('black');
  text(t, 10, 10, 400, 200);
  stroke(1);
  translate(175, 20);
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
