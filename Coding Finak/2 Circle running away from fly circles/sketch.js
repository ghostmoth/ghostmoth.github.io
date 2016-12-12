var xpos = 0
var diameter = 40
var shapes = []

function setup() {
  createCanvas(1280, 720)
  for (var i = 0; i < 30; i++) {
    shapes[i] = {
      x: 300,
      y: 200,

      display: function() {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, 40, 40);
      },
      move: function() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
      }
    }
  }

}




function draw() {
  background(0);
  fill(255);
  noStroke();
  ellipse(xpos, 310, diameter, diameter);
  xpos += 2



if(xpos >= 500){
  
   fill(255);
   noStroke();
  ellipse(xpos, 310, diameter, diameter);
  xpos += 5

  //rect(1000, 0, 50, 720);
  
  for(var i = 0; i < shapes.length; i++) {
    shapes[i].move();
    shapes[i]. display();
    

    }
  } 
}
      
  

