var diameter = 40
var di = 10

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(0);

  

   if(diameter <= 0) {
    background(255)
  }else {
     background(0);
   }
  
  fill(255);
  noStroke();
  ellipse(640, 360, diameter, diameter);
   diameter --
  
  }
