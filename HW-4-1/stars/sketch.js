var x=0
function setup() {
  createCanvas(1330,650);
  background(0);
  x = x+1
}

function draw() {
  //shooting stars
  fill(255,255,255);
  ellipse(x,425,15,15);
  ellipse(x,325,15,15);
  ellipse(x,125,15,15);
  //sun thing 
  fill(255, mouseX, mouseY);
  ellipse(650,325,250,250);
  
  x=x+1
}