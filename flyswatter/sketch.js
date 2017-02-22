var fx = 640
var fy = 340
var flyswatter;
var fly
var words = "click the fly to kill it"
var flya = 260
var flyb = 50
var swata = 239
var swatb = 239


function preload() {
  flyswatter= loadImage("swatter2.jpf")

  fly = loadImage("flyandsplat.jpf")
}

function setup() {
  createCanvas(1280, 720)
  frameRate(60)


}

function draw() {
  x = (mouseX)
  y = (mouseY)
  fill(255, 255, 255)
textSize(17)
text(words, 20, 30, 70, 80)

  background(255, 255, 255)
      image(fly,flya, 0, 239, 239, fx, fy, 100, 100)
      image(flyswatter, x-150, y-100);


// keeps fly on screen

  if( fx > 0 && fx < 1280 && fy > 0 && fy < 720) {
  fx += random(-20, 20)
  fy += random(-20, 20)
  } else{
    fx = 640; fy = 360
  }
println(mousePressed);
}
//kills fly
 function mousePressed(){


  if(fx > x - 150 && fx < x + 150 && fy > y - 150 && fy < y + 150) {
     flya=0

fx = 0
fy = 0
}

  //ellipse(fx, fy, 50, 50)
}
