function pacman(xpos, ypos) {

function setup() {
    //pacman
    this.diam = 100;
    this.radius = 50;
    this.eyediam = 20;
    this.mouthAngle = (1/6);
    this.mouthChange = 1/128;
  }
}
function draw(){
   //pacman
  fill(255,255,0)
  arc(this.x, this.y, this.diam, this.diam, PI*this.mouthAngle, -PI*this.mouthAngle, PIE);
  fill(0)
  ellipse(this.x, this.y, this.eyediam, this.eyediam);
  }