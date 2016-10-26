var funs = [];


function setup() {
  createCanvas(1280,720);
  for (var i = 0; i < 4; i++) {
    funs[i] = {
      x: random(0, width),
      y:random(0, height),
      display: function() {
        fill(255, 0, 0)
        ellipse(this.x, this.y, 50, 50);
      },
      move: function() {
        this.x = this.y + random(-1, 1);
        this.y = this.y + random(-1,1);
      }
    }
  }
}
  
function draw() {
  background(0);
  for(var i = 0; i < 4; i++) {
    funs[i].move();
    funs[i].display();
  }
}