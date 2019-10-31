var cars = []; //declare the array
var frogPos;
var myState = 0;
var timer = 0;
var nancy, nancyRight, nancyLeft;
var bird;
var trash;
var trumps = [];
var trump;
var eat;
var meeting;


function preload() {
  trash = loadImage('assets/trash.png');
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  trumps[0] = loadImage('assets/trumpLeft.png');
  trumps[1] = loadImage('assets/trump.png');
  trumps[2] = loadImage('assets/trumpRight.png');
  trump = trumps[0];

  nancyRight = loadImage('assets/nancy.png');
  nancyLeft = loadImage('assets/nancyLeft.png');
  nancy = nancyRight;

  meeting = loadImage('assets/meeting.jpg');

  font = loadFont('assets/font.ttf');

  sound = loadSound('assets/sound.mp3');

  unloadScrollBars();

  //spawn the cars
  for (var i = 0; i < 30; i++) {
    cars.push(new Car());
  }



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
      timer++;
      if (timer > 30) {
        fill('red');
      }
      if (timer > 60) {
        fill('blue');
      }
      if (timer > 90) {
        fill('green')
        timer = 0;
      }
      textFont(font);
      textSize(64);
      text('Government Throwdown', width/2, height/2-150);

      fill('black');
      textFont(font);
      textAlign(CENTER);
      textSize(32);
      text('Click "START" to play', width / 2, height / 2 + 100);

      textSize(20);
      text("START", width / 2, height / 2 + 200);

      break;

    case 1:
      background(255);
      textFont(font);
      text('Choose a character!', width / 2, height / 2 - 200);
      //timer++;
      image(nancy, width / 3, height / 2, 200, 200);
      image(trump, width * 0.666, height / 2, 200, 200);
      break;

    case 2:
      game();
      break;

    case 3:
      background('red');
      fill('black');
      textSize(64);
      text("you lose!", width / 2, height / 2);
      textSize(24);
      fill('white');
      text("try again", width / 2, height / 2 + 200);
      break;

    case 4:
      background('green');
      fill('black');
      textSize(64);
      text("you win!", width / 2, height / 2);
      textSize(24);
      fill('white');
      text("play again", width / 2, height / 2 + 200);
      break;
  }

}

function mouseReleased() {

  print(mouseX + ',' + mouseY);

  if (myState == 0 && mouseX >= 584 && mouseX <= 680 && mouseY >= 490 && mouseY <= 505) {
    myState = 1;
  }

  if (myState == 1 && mouseX >= 360 && mouseX <= 500 && mouseY >= 225 && mouseY <= 385) {
    myState = 2;
  }

  if (myState == 1 && mouseX >= 770 && mouseX <= 930 && mouseY >= 225 && mouseY <= 385) {
    myState = 3;
  }

  if (myState == 3 && mouseX >= 550 && mouseX <= 740 && mouseY >= 490 && mouseY <= 510) {
    resetTheGame();
    myState = 0;
    timer = 0;
  }

  if (myState == 4 && mouseX >= 550 && mouseX <= 740 && mouseY >= 490 && mouseY <= 510) {
    resetTheGame();
    myState = 0;
    timer = 0;
  }

  switch (myState) {

    case 3:
      timer++;
      if (timer > 300) {
        resetTheGame();
      }
      break;

    case 4:
      timer++;
      if (timer > 300) {
        resetTheGame();
      }
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
  this.birdNumber = floor(random(trumps.length - 1));
  this.timer = 0;
  this.maxTimer = floor(random(10, 30));


  // methods
  this.display = function() {
    //fill(this.r, this.g, this.b);
    //rect(this.pos.x, this.pos.y, 100, 50);
    //ellipse(this.pos.x - 40, this.pos.y + 30, 25, 25);
    //ellipse(this.pos.x + 40, this.pos.y + 30, 25, 25);
    //image(bird, this.pos.x, this.pos.y, 100, 100);
    image(trumps[this.birdNumber], this.pos.x, this.pos.y, 100, 100);
    this.timer = this.timer + 1;
    if (this.timer > this.maxTimer) {
      this.birdNumber = this.birdNumber + 1;
      if (this.birdNumber > trumps.length - 1) this.birdNumber = 0;
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
    nancy = nancyLeft;
  }
  if (keyCode === RIGHT_ARROW) {
    nancy = nancyRight;
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
  imageMode(CENTER);
  image(meeting, width / 2, height / 2, width, height);

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    //test if this car is close to the frog
    if (cars[i].pos.dist(frogPos) < 50) {
      sound.play();
      cars.splice(i, 1);
    }


  }

  if (cars.length == 0) {
    myState = 4;
    timer = 0;
  }
  // draw the frog
  //fill('green');
  //ellipse(frogPos.x, frogPos.y, 60, 60) ;
  image(nancy, frogPos.x, frogPos.y, 60, 60);
  checkForKeys();
  timer++;
  if (timer > 1300) {
    myState = 3;
    timer = 0;
  }
}

function resetTheGame() {
  cars = []; //clear the array first

  for (var i = 0; i < 25; i++) {
    cars.push(new Car());
    timer = 0;
  }

}

function unloadScrollBars() {
  document.documentElement.style.overflow = 'hidden'; // firefox, chrome
  document.body.scroll = "no"; // ie only
}
