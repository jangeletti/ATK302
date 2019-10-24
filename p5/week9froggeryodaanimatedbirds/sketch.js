var cars = []; //declare the array
var frogPos;
var myState = 0;
var timer = 0;
var yoda, yodaRight, yodaLeft;
var bird ;
var birds = [] ;

function setup() {

  createCanvas(800, windowHeight);

  birds[0] = loadImage('assets/bird1.png');
  birds[1] = loadImage('assets/bird2.png');
  birds[2] = loadImage('assets/bird3.png');

  //spawn the cars
  for (var i = 0; i < 30; i++) {
    cars.push(new Car());
  }

  yodaRight = loadImage('assets/yodaRight.gif');
  yodaLeft = loadImage('assets/yodaLeft.gif');
  yoda = yodaRight;

  bird = loadImage('assets/bird1.png');

  //initialize frog position
  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {

  switch (myState) {

    case 0:
      background(255);
      fill('black');
      text("welcome", 100, 100);
      break;

    case 1:
      game();
      timer++;
      if (timer > 1200) {
        timer = 0;
        myState = 2;
      }
      break;

    case 2:
      background('red');
      fill('black');
      text("you lose!", 100, 100);
      break;

    case 3:
      background('green');
      fill('black');
      text("you win!", 100, 100);
      break;
  }

}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2:
      resetTheGame();
      myState = 0;
      break;

    case 3:
      resetTheGame();
      myState = 0;
      break;
  }

}

// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNumber = floor(random(birds.length-1)) ;
  this.timer = 0;
  this.maxTimer = floor(random(10, 30));


  // methods
  this.display = function() {
    //fill(this.r, this.g, this.b);
    //rect(this.pos.x, this.pos.y, 100, 50);
    //ellipse(this.pos.x - 40, this.pos.y + 30, 25, 25);
    //ellipse(this.pos.x + 40, this.pos.y + 30, 25, 25);
    //image(bird, this.pos.x, this.pos.y, 100, 100);
image(birds[this.birdNumber], this.pos.x, this.pos.y, 100, 100);
this.timer = this.timer + 1;
if (this.timer > this.maxTimer) {
    this.birdNumber = this.birdNumber + 1;
    if (this.birdNumber > birds.length - 1) this.birdNumber = 0 ;
    this.timer = 0;
  }


  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    yoda = yodaLeft;
  }
  if (keyCode === RIGHT_ARROW) {
    yoda = yodaRight;
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) {
    frogPos.x = frogPos.x - 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    frogPos.x = frogPos.x + 5;
  }
  if (keyIsDown(UP_ARROW)) {
    frogPos.y = frogPos.y - 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    frogPos.y = frogPos.y + 5;
  }

}


//iterate through the cars array
function game() {
  background(100);

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    //test if this car is close to the frog
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    myState = 3;
    timer = 0;
  }
  // draw the frog
  //fill('green');
  //ellipse(frogPos.x, frogPos.y, 60, 60) ;
  image(yoda, frogPos.x, frogPos.y, 60, 60);
  checkForKeys();
}

function resetTheGame() {
  cars = []; //clear the array first

  for (var i = 0; i < 25; i++) {
    cars.push(new Car());
    timer = 0;
  }

}
