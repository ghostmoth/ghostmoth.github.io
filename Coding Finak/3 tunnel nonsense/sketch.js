var xpos = 0
var diameter = 40

var circs = [300, 405, 508, 613, 715, 820, 925, 1029];

circ = 40


function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(0);


  frameRate(60)




  noFill();
  stroke(255)
  ellipse(circs[0], 300, circ, circ);
  ellipse(circs[1], 300, circ, circ);
  ellipse(circs[2], 300, circ, circ);
  ellipse(circs[3], 300, circ, circ);
  ellipse(circs[4], 300, circ, circ);
  ellipse(circs[5], 300, circ, circ);
  ellipse(circs[6], 300, circ, circ);
  ellipse(circs[7], 300, circ, circ);
  ellipse(circ[8], 300, circ, circ)
  ellipse(circ[9], 300, circ, circ)
  ellipse(circ[10], 300, circ, circ)

  // 
  stroke(255)

  
  line(150, 250, 1280, 250)

  line(150, 400, 1280, 400)

  line(150, 250, 150, 400)




  fill(255)
  ellipse(xpos, 300, diameter, diameter);
  xpos+=2
  fill(0)
  stroke(0)
  rect(151, 260, 125, 130)

 rect(322, 260, 50, 100)
 rect(430, 260, 50, 100)
 rect(530, 260, 50, 100)
 rect(635, 260, 50, 100)
 rect(740, 260, 50, 100)
 rect(845, 260, 50, 100)
 rect(950, 260, 50, 100)
 rect(1050,260, 500, 100)
 


  if (xpos >= 250) {
    frameRate(2)
    xpos+=50
  }
}