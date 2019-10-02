var myState = 0;
var timer = 0;
var myBackground ;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  myBackground = color(random(255), random(255), random(255));
}

function draw() {
  // put drawing code here
  switch (myState) {
    case 0:
      background(myBackground);
      text("case 0", 100, 100);
      timer++;
      if(timer >= 200) {
        timer = 0;
        myState = 1;
        myBackground = color(random(255), random(255), random(255));
      }
      break;

    case 1:
      background(myBackground);
      text("case 1", 100, 100);
      timer++;
      if(timer >= 200) {
        timer = 0;
        myState = 2;
      myBackground = color(random(255), random(255), random(255));
    }
      break;

    case 2:
    background(myBackground);
      text("case 2", 100, 100);
      timer++;
      if(timer >= 200) {
        timer = 0;
        myState = 0;
      myBackground = color(random(255), random(255), random(255));
    }
      break;
  }
}

function mouseReleased() {

  console.log(mouseX + ',' + mouseY);
}
