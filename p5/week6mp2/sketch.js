var myState = 0;
var myState1 = 0
var timer = 0;
var pictureTimer = 0;
var image1, image2, image3, image4;
var typeface;

function preload() {
  image1 = loadImage('assets/image1.png');
  image2 = loadImage('assets/image2.JPG');
  image3 = loadImage('assets/image3.png');
  image4 = loadImage('assets/image4.jpg');
  typeface = loadFont('assets/ProximaNovaBold.ttf');
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
      text('START', width / 2, height / 2 + 10);
      break;

    case 1:
      background(0);
      rect(width / 2, height - 50, 200, 50);
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
          image(image4, width/2, height/2, 432, 432);
          doPictureTimer();
          break;
      }

      break;

    case 2:
      background('yellow');
      visualizer();
      break;

    case 3:
      background('green');
      timer++;
      if (timer >= 200) {
        myState = 2;
        timer = 0;
        break;
      }
      case 4:
        background('orange');
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
  if (myState1 >= 4){
    myState1 = 0;
  }
  }
}

  function visualizer() {
    //https://www.patrick-wied.at/blog/how-to-create-audio-visualizations-with-javascript-html
    var ctx = new AudioContext();
    var audio = document.getElementById('myAudio');
    var audioSrc = ctx.createMediaElementSource(audio);
    var analyser = ctx.createAnalyser();
    audioSrc.connect(analyser);
    audioSrc.connect(ctx.destination);
    var frequencyData = new Unit8Array(analyser.frequencyBinCount);

    function renderFrame() {
      requestAnimationFrame(renderFrame);
      analyser.getByteFrequencyData(frequencyData);
    }
    audio.play();
    renderFrame();

    var twoPi = 2 * Math.PI;
    var objectsCount = 12;
    var radius = 100;
    var change = twoPi / objectsCount;
    for (var i = 0; i > twoPi; i += change) {
      var x = radius * cos(i);
      var y = radius * sin(i);
      var rotation = i;
    }
  }
