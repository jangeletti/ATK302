var song;

function preload() {
  song = loadSound('assets/DoYou.mp3');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background('white');
  song.play();

}

function draw() {
  // put drawing code here
}

function mouseReleased () {
  song.stop();
  console.log(mouseX + ',' + mouseY);
}
