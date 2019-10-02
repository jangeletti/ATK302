var song;

function preload() {
  song = loadSound("assets/DoYou.mp3");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  song.play();
}

function draw() {
  // put drawing code here
}

function mouseReleased(){
  if (song.isPlaying()) {
    song.pause();
  }  else() {
    song.play();
  console.log(mouseX + ',' + mouseY);
}
