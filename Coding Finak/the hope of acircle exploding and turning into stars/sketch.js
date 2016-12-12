var diameter = 40

var di = 10


function setup() {
  createCanvas(1280, 720);
  
}

function draw() {
  background(0);
  stroke(0);

      //when the circle goes to zero then the background turns white like an explosion
      fill(255);
    ellipse(640, 360, diameter, diameter);
      if (diameter <= 0) {
        background(255)
      } else {
        background(0)

        diameter--
  


  }
}