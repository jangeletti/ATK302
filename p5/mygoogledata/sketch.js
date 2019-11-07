var namesArray = [];
var vel;

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1HucDNHp6rlOXhFiccDDoeKksxu46ValAYW-9ZfLZtJo'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].Name, data[i].Color, data[i].Shape));
  }

}


function draw() {
  background('white');

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
  }

}


// my circle class
function Circle(myName, myColor, myShape) {
  this.pos = createVector(random(width - 50), random(height - 50));
  this.name = myName;
  this.color = myColor;
  this.shape = myShape;
  this.vel = createVector(0, this.name.length/2);


  this.display = function() {

    if (this.shape == "Circle") {
      fill(this.color);
      ellipse(this.pos.x, this.pos.y, 100, 100);
      fill('black');
      text(this.name, this.pos.x, this.pos.y);
    }
    if (this.shape == "Rectangle") {
      fill(this.color);
      rect(this.pos.x, this.pos.y, 100, 100);
      fill('black');
      text(this.name, this.pos.x, this.pos.y);
    }
    if (this.shape == "Triangle") {
      fill(this.color);
      triangle(this.pos.x, this.pos.y, this.pos.x - 60, this.pos.y + 100, this.pos.x + 60, this.pos.y + 100);
      fill('black');
      text(this.name, this.pos.x, this.pos.y + 60);
    }
    this.pos.add(this.vel)
    if (this.pos.y > height) {
      this.pos.y = 0;
    }


  }

}
