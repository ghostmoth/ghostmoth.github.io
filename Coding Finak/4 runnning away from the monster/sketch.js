var xpos = 0
var diameter = 40
var creatures = []
var speed = 2


function setup() {
  frameRate(60)
  createCanvas(1280, 720);
  for(var i = 0; i < 80; i++) {
    creatures[i] = {
      x:1000,
      y:300,
      
      display:function() {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, 90, 90);
      },
      move: function() {
        this.x = this.x + random(-3, 3);
        this.y = this.y + random(-3, 3);
      }
    }
  }
}

function draw() {
  background(0);
  fill(255)
  noStroke();
    ellipse(xpos, 310, diameter, diameter);
    
        xpos = xpos + speed
        
         if(xpos >= 750) {
          speed = speed * -3
        }
      for(var i = 0; i< creatures.length; i++) {
      creatures[i].move();
      creatures[i]. display();
      
      

      

      

    }
  }
