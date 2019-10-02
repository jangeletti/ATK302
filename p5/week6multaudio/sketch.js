var song1, song2, song3;
var image1, image2, image2;
var myState = 0;


function preload() {
  song1 = loadSound('assets/arianagrande.mp3');
  song2 = loadSound('assets/lizzo.mp3');
  song3 = loadSound('assets/billieeilish.mp3');
  image1 = loadImage('assets/image.png');
  image2 = loadImage('assets/photoshoot012.jpg');
  image3 = loadImage('assets/red.jpg');

  // set each song to loop and then immediately pause it so it doesn't play

  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();

}

function setup() {

  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(100);
  switch (myState) {

    case 0: // trigger the playing, and go immediately to the next state
      song1.play();
      myState = 1;  // go immediately (the next time) to the next state
      break;


    case 1:
    // hang out in here, put some lyrics or pictures or something while the song plays.
    // put pictures and shapes in here
    imageMode(CENTER);
    image(image1, width/2, height/2, 400, 400);
    fill('white');
    textAlign(CENTER);
    textSize(32);
    text('Boyfriend - Ariana Grande & Social House', width/2, height/2);
    textSize(12);
    fill(150);
    text('Click anywhere to change songs', width/2, height/2+50);
      break;  // we would only leave state 1 with a mouseClick



    case 2: // trigger the playing, and go immediately to the next state
      song2.play();
      myState = 3;
      break;

    case 3:
    image(image2, width/2, height/2, 400, 400);
    fill('red');
    textAlign(CENTER);
    textSize(32);
    text('Truth Hurts - Lizzo (BPM Supreme Jump Off Edit)', width/2, height/2);
    textSize(12);
    fill(150);
    text('Click anywhere to change songs', width/2, height/2+50);
      break;

    case 4:
      song3.play();
      myState = 5;
      break;

    case 5:
    image(image3, width/2, height/2, 432, 288);
    fill('white');
    textAlign(CENTER);
    textSize(32);
    text('Bad Guy vs Stop It - Billie Eilish vs Fisher vs Cheyenne Giles (All Gold VIP Bootleg)', width/2, height/2);
    textSize(12);
    fill(150);
    text('Click anywhere to change songs', width/2, height/2+50);
      break;

  }


}

function mouseReleased() {
  myState++;

  // pause all the songs
  song1.pause();
  song2.pause();
  song3.pause();

  if (myState > 5) {
    myState = 0;
  }
}
