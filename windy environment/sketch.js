var flower;
var wind;
var count = 0;
var petal = 30
var center = 30
var timeChange = 10
var speed = 3
var r = 166
var g = 238
var b = 252
var sun = 150
var bee = 20
var fx = 640
var fy = 340
var centerx = 500
var centery = 400
var fr = 20
var petalD = 40
var petalE =  405
var petalF = 390
var petalG = 400
 var petaly = 30
var petalA = 395
var petalB = 380
var petalC =390

function setup() {
    createCanvas(1280, 720);
frameRate (fr);
    flower = new Flower(10, 2);

   
}

function draw() {
   //MAKES TIMER BALL GO BACK AND FORTH
  if(timeChange > 1280 || timeChange < 0) {
    speed = speed * -1
    }
    timeChange = timeChange + speed;
    background(r, g, b);

fill(255, 255, 0);
  ellipse(fx, fy, bee, bee);
  
  fx += random(-5, 5)
  fy +=random(-5, 5)
 
 
 
//   //stem
//     line(500, 400, 500, 1000)
//   //fill(248, 244,74)
//   //flower petals
//   ellipse(500, 400, petal, petaly)
//   fill(244, 200, 238)
//   ellipse(520, petalA, petal, petaly)
//   ellipse(480,420, petal, petaly)
//   ellipse(500, petalB, petal, petaly)
//   ellipse(480, petalC, petal, petaly)
//   ellipse(510, 415, petal, petaly)
// //center of flower

//   fill(248, 244,74)
//   ellipse(centerx, centery, center, center)
  
  //sun
  fill(243, 249, 34)
  ellipse(sun, sun, 90, 90)
  
  //technically a timer
 noStroke() 
  fill(r, g, b,0);

  ellipse(timeChange, 10, 10, 10)
stroke(2);
  //day changer
  
  if (timeChange >= 1280) {
 r = 1
 g = 4
 b = 118
    }
    
    // if(timeChange>= 1280){
    //   petaly = petalD
    //   petalA = petalE
    //   petalB = petalF
    //   PetalC = petalG
      
    // }
    // if(timeChange<= 0){
    //   petaly = 30
    //   petalA = 395
    //     petalB = 380
    //   petalC = 390

    // }
      
    
 
  
  if (timeChange <= 0){
 r = 166
 g = 238
 b = 252
    fx = random(0, 1280)
    fy = random(0, 720)
    
    
    
  }
 
 
 
 
 
  
//WIND STUFF
    count += 0.05;

    wind = noise(count);
    wind = map(wind, 0, 1, -1, 0.75);
    wind = constrain(wind, 0, 1);
    wind *= 0.002;
    fill(255, 255, 255, 0);
    ellipse(count*10, wind, 1, 1);

   // text(wind, 20, 20);


    flower.force(wind);

   flower.frame();
   
    //BEEEE
  fill(255, 255, 0);
  ellipse(fx, fy, bee, bee);
  
  fx += random(-5, 5)
  fy +=random(-5, 5)

  
  if(fx> 500){
    fx--
  }
    if(fx< 500){
    fx++
  }
    if(fy> 400){
    fy--
  }
    if(fy< 400){
    fy++
  }
}