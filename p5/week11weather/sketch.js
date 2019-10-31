var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var vel;
var x = 0;


function setup() {
  createCanvas(400, 400);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'http://api.openweathermap.org/data/2.5/weather?zip=61701,us&units=imperial&';
  var myIDString = 'appid=9a43da2c9f80b8d6692397cc8982a700'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.



}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
          myState = 1;
      }
      break;

    case 1:
    background(200) ;
    fill('black');
    text("We have weather!", 20, 20) ;
    text("Humidity = " + Math.round(weather.main.humidity), 20, 60);
    text("Temperature = " + Math.round(weather.main.temp), 20, 80);
    text("Wind speed = " + Math.round(weather.wind.speed), 20, 100);
    text("Clouds = " + Math.round(weather.clouds.all), 20, 120);
    text("Weather = " + weather.weather[0].main, 20, 140);
    text("Temp Max = " + Math.round(weather.main.temp_max), 20, 160);
    text("Temp Mix = " + Math.round(weather.main.temp_min), 20, 180);

    //cloud crosses screen
    vel = 1 + weather.wind.speed;
    fill('white');
    noStroke();
    ellipse(x, 300, 200, 100)
    x = x + weather.wind.speed/2;
    if (x > width) {
      x = -210;
    }

    //make a thermometer
    fill('red');
    var tempMap = 0;
    tempMap = map(Math.round(weather.main.temp), -10, 100, 0, height-10);
    rect(350,height-20,30, -tempMap);


// parse the weather object and put some text for some at least 3 different weather data!
      break;

  }
}
