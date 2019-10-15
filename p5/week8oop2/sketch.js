var cars = [];
var frogPos;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(width/2, height-80);
}

function draw() {
  background(100);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    //collision detection
    if (cars[i].pos.dist(frogPos) < 20) {
      cars.splice(i, 1);
    }
  }
  frog();
  checkForKeys();
}

function frog() {
  fill('green');
  ellipse(frogPos.x, frogPos.y, 50, 50);
}


function Car() {
  //attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = (random(255));
  this.g = (random(255));
  this.b = (random(255));

  //methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, 100, 50);
    ellipse(this.pos.x+25, this.pos.y+50, 20, 20);
    ellipse(this.pos.x+75, this.pos.y+50, 20, 20);
  }
  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) {this.pos.x = 0;
    fill(this.r, this.g, this.b)}
    if (this.pos.x < 0) {this.pos.x = width;
    fill(this.r, this.g, this.b)}
    if (this.pos.y > height) {this.pos.y = 0;
    fill(this.r, this.g, this.b)}
    if (this.pos.y < 0) {this.pos.y = height;
    fill(this.r, this.g, this.b)}
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y +5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y -5;
}
