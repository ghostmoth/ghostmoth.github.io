var xpos = 0
var ypos = 0
var diameter = 40
var speed = 2
var shifts = []
function setup() {
createCanvas(1280, 720);  

for (var i = 0; i < 30; i++) {
  shifts[i] = {
    x: random(xpos),
    y: random(ypos),
    
    display: function() {
fill(255);
  xpos = xpos + speed
  
  if((xpos > width)||(xpos < 0)) {
    speed = speed * -1;
    
  }
    
if (xpos = random(speed)) {
  speed ++;
}
    ellipse(this.xpos, this.ypos, diameter, diameter)
    },
  }
}
}

function draw() {
  background(0)
  
  fill(255);
  xpos = xpos + speed
  
  if((xpos > width)||(xpos < 0)) {
    speed = speed * -1;
    
  }
    
if (xpos = random(speed)) {
  speed ++;
}
    ellipse(xpos, 300, 25, 25)
    
    for(var i = 0; i < shifts.length; i++) {
      shifts[i].display();
    }
  }
