var cloudsX = 0
function setup() {
  createCanvas(1330,650);
  background(102,182,237)
  cloudsX = cloudsX + 1
}

function draw() {
  //clouds1
  fill(255,255,255)
  ellipse(cloudsX,120,40,40)
  ellipse(cloudsX,120,40,40)
  ellipse(cloudsX,140,40,40)
  ellipse(cloudsX,140,40,40)
  ellipse(cloudsX,140,40,40)
  //clouds2
  ellipse(cloudsX,550,60,60)
  ellipse(cloudsX,550,60,60)
  ellipse(cloudsX,550,60,60)
  ellipse(cloudsX,520,60,60)
  ellipse(cloudsX,520,60,60)
  //clouds3
  ellipse(950,300,60,60)
  ellipse(990,300,60,60)
  ellipse(1030,300,60,60)
  ellipse(970,260,60,60)
  ellipse(1010,260,60,60)
  cloudsX = cloudsX+1
  if(cloudsX > width)
  {
    cloudsX = 0
  }
  //mouse press
  if (mouseIsPressed)
  fill(255,0,0)
    else
  fill(0,255,0)
  //oval 
  ellipse(665,130,200,260)
  //string
  stroke(0)
  line(570,170,590,350)
  line(760,170,740,350)
  fill(192,177,132)
  //basket
  rect(585,350,160,160)
}