var myCar; //declare an object
var myCar1;

function setup() {
  createCanvas(800, 800);
  myCar = new Car(); //spawn one object
  myCar1 = new Car();
}

function draw() {
  background(100);

  myCar.display();
  myCar.drive();

  myCar1.display();
  myCar1.drive();

}

function mouseReleased() {


  console.log(mouseX + ',' + mouseY);
}

function Car() {
  //attributes
  this.x = 0;
  this.y = random(height);
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.vel = random(5);

  //methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, 100, 50);
  }

  this.drive = function() {
    this.x = this.x + this.vel;
    if (this.x > width) {
      this.x = -100;
      this.y = random(height);
    }

  }


}
