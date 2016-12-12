ehs = [];
var diameter = 10


function setup() {
  createCanvas(1280, 720);
  for (var i = 0; i < 400; i++) {
    ehs[i] = {
      x: random(0, width),
      y: random(0, height),
      display: function() {
        fill(255, 255, 255)
        noStroke();
        ellipse(this.x, this.y, diameter, diameter);
          
      },
    }
  }
}


  function draw() {
    background(0);
    for(var i = 0; i < ehs.length; i++) {
    ehs[i].display();
    //diameter --
  }
}