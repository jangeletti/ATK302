var myState = 0 ;
var timer = 0;

function setup () {
  createCanvas (windowWidth, windowHeight);

}

function draw () {
  switch(myState) {
    case 0:
    background('blue');
    break;

    case 1:
      background('red');
      timer++;
      if (timer >= 200) {
        myState = 2;
        timer = 0;
      }
    break;

    case 2:
      background('yellow');
    break;

    case 3:
      background('green');
    break;

    case 4:
      background('orange');
    break;
  }

}

function mouseReleased() {
  if (myState == 0) {
    myState = 1;
  }
}
