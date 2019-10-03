var myState = 0;
var myState1 = 0
var pictureTimer = 0;
var image1, image2, image3, image4;
var typeface;
var audio;
var x = -50;
var y = -50;
var timer = 0;
var w = 50;
var h = 10;



function preload() {
  image1 = loadImage('assets/image1.png');
  image2 = loadImage('assets/image2.JPG');
  image3 = loadImage('assets/image3.png');
  image4 = loadImage('assets/image4.jpg');
  typeface = loadFont('assets/ProximaNovaBold.ttf');
  audio = document.getElementById('myAudio');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  textFont(typeface, 32);
}

function draw() {
  switch (myState) {
    case 0:
      background('white');
      rect(width / 2, height / 2, 200, 50);
      textSize(32);
      text('ENTER', width / 2, height / 2 + 10);
      textSize(12);
      text('you cannot exit', width / 2, height / 2 + 40);
      break;

    case 1:
      background(0);
      fill('white');
      rect(width / 2, height - 50, 200, 50);
      fill('black');
      textSize(32);
      text('NEXT STATE', width / 2, height - 40);
      switch (myState1) {
        case 0:
          image(image1, width / 2, height / 2, 648, 432);
          doPictureTimer();
          break;

        case 1:
          image(image2, width / 2, height / 2, 648, 432);
          doPictureTimer();
          break;

        case 2:
          image(image3, width / 2, height / 2, 648, 432);
          doPictureTimer();
          break;

        case 3:
          image(image4, width / 2, height / 2, 432, 432);
          doPictureTimer();
          break;
      }

      break;

    case 2:
      background('gray');
      timer++;
      if (timer >= 200) {
        myState = 3;
        timer = 0;
      }
      break;

    case 3:
      background('white');
      timer++;
      if (timer >= 400) {
        myState = 4;
        timer = 0;
        break;
      }
      case 4:
        rectMode(CORNER);
        noStroke();
        fill('black');
        rect(x, y, 50, 50)
        x = x + 20;
        y = y + 0.5;
        if (x > windowWidth) {
          x = -50;
        }
        fill('white');
        ellipseMode(CENTER);
        ellipse(width / 2 - 100, 200, w, w);
        ellipse(width / 2 + 100, 200, w, w);
        arc(width / 2, 350, w, h, TWO_PI, PI);
        if (w > 700) {
          w = w + 5;
          h = h + 5;
        }
        if (y > windowHeight) {
          w++;
          h++;
        }
        timer++;
        if (timer >= 2150) {
          myState = 1;
          timer = 0;
        }
        break;

  }
}

function mouseReleased() {
  if (myState == 0 && mouseX >= 540 && mouseX <= 740 && mouseY >= 286 && mouseY <= 336) //ensures that this function works only if "START" is clicked
  {
    myState = 1;
  }
  if (myState == 1 && mouseX >= 540 && mouseX <= 740 && mouseY >= 545 && mouseY <= 595) {
    myState = 2;
  }
  console.log(mouseX + ',' + mouseY);
}

function doPictureTimer() {
  if (myState1 == 0, 1, 2, 3) {
    pictureTimer++;
    if (pictureTimer >= 200) {
      myState1++;
      pictureTimer = 0;
    }
    if (myState1 >= 4) {
      myState1 = 0;
    }
  }
}

  //https://www.patrick-wied.at/blog/how-to-create-audio-visualizations-with-javascript-html
