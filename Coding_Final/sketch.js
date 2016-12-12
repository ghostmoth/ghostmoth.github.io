//for the text
var xposTwo = 200;
var textColor = 255;
//for the circle that moves
var diameter = 40;
var di = 10
//each of these are the same except theyb have to be different so each scenario plays out
var xpos = 0;
var xposb = 0;
var xposc = 0;
var xposd = 0;
var xpose = 0;
var xposf = 0;
var ypos = 310;
var shapes = [];
var shifts = []
var circs = [300, 405, 508, 613, 715, 820, 925, 1029];
circ = 40;
var creatures = []
var speed = 2;
var motion = 2;
//timer
var timerx = 0;
ehs = [];
var starameter = 10

function setup() {

  mySound = loadSound('song.mp3', loaded)
    //for the song
  mySound.setVolume(0.5)

  function loaded() {
    mySound.play();

  }
  createCanvas(1280, 720);
  
  //for the fly circles
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
  for (var j = 0; j < 80; j++) {
    creatures[j] = {
      x: 1000,
      y: 300,

      display: function() {
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
  
  //for the bigger monster
  for (var k = 0; k < 30; k++) {
    shifts[k] = {
      x: random(xpose),
      y: random(ypos),

      display: function() {
        fill(255);
        xpose = xpose + speed
        //makes the random stuttering circle

        if ((xpose > width) || (xpose < 0)) {
          speed = speed * -1;

        }

        if (xpose = random(speed)) {
          speed++;
        }
        ellipse(this.xpose, this.ypos, diameter, diameter)
      },
    }
  }
  //for the stars
  for (var s = 0; s < 400; s++) {
    ehs[s] = {
      x: random(0, width),
      y: random(0, height),
      display: function() {
        fill(255, 255, 255)
        noStroke();
        ellipse(this.x, this.y, starameter, starameter);

      },
    }
  }
}


function draw() {
  background(0);


  //timer
  fill(0)
  ellipse(timerx, 10, 10, 10)
  timerx += 0.1

  //opener text
  textSize(72);
  fill(textColor);
  text("A Circle's Journey", xposTwo, 200);
  xposTwo++



  //makes text dissapear at a certain point
  if (timerx >= 20) {
    textColor = 0
      //also this is the then of the if statement, trees and circle appear after text leaves
      //trees
      //stumps for trees
    fill(127, 127, 127)
    rect(190, 350, 50, 400);
    rect(1100, 350, 50, 400);
    rect(490, 300, 30, 200);
    rect(800, 300, 30, 200);
    //tree "leaves" for center right trees
    fill(141, 141, 141);
    ellipse(540, 275, 20, 20);
    ellipse(535, 340, 20, 20);
    ellipse(470, 325, 20, 20);
    ellipse(495, 270, 20, 20);
    fill(71, 71, 71);
    ellipse(485, 320, 30, 30);
    ellipse(530, 290, 30, 30);
    fill(132, 132, 132);
    ellipse(505, 300, 40, 40);
    fill(93, 93, 93);
    ellipse(530, 320, 30, 30);
    ellipse(510, 330, 30, 30);
    ellipse(485, 290, 30, 30);
    ellipse(510, 280, 30, 30);
    fill(71, 71, 71);
    ellipse(550, 295, 20, 20);
    ellipse(550, 320, 20, 20);
    ellipse(510, 350, 20, 20);
    ellipse(490, 340, 20, 20);
    ellipse(470, 305, 20, 20);
    ellipse(475, 277, 20, 20);
    ellipse(520, 267, 20, 20);
    //tree"leaves" for center left tree
    fill(141, 141, 141);
    ellipse(800, 265, 20, 20);
    ellipse(773, 315, 20, 20);
    ellipse(840, 335, 20, 20);
    ellipse(845, 265, 20, 20);
    fill(71, 71, 71);
    ellipse(840, 285, 30, 30);
    ellipse(790, 310, 30, 30);
    fill(132, 132, 132);
    ellipse(815, 300, 40, 40);
    fill(127, 127, 127);
    ellipse(840, 310, 30, 30);
    ellipse(815, 325, 30, 30);
    ellipse(790, 285, 30, 30);
    ellipse(815, 275, 30, 30);
    fill(127, 127, 127);
    ellipse(825, 260, 20, 20);
    ellipse(860, 285, 20, 20);
    ellipse(860, 315, 20, 20);
    ellipse(815, 345, 20, 20);
    ellipse(793, 330, 20, 20);
    ellipse(775, 300, 20, 20);
    ellipse(780, 270, 20, 20);
    //finally our manin character ellipse
    xpos = xpos + 2
      //ypos = sin(90)
    fill(255, 255, 255)
    ellipse(xpos, 310, diameter, diameter);

    noStroke

    //tree "leaves" for farthest right tree
    fill(71, 71, 71);
    ellipse(250, 320, 70, 70);
    ellipse(190, 370, 70, 70);
    fill(93, 93, 93);
    ellipse(215, 350, 70, 70);
    fill(132, 132, 132);
    ellipse(250, 370, 70, 70);
    ellipse(190, 320, 70, 70);
    ellipse(215, 410, 40, 40);
    fill(93, 93, 93);
    ellipse(215, 290, 40, 40);
    ellipse(165, 340, 40, 40);
    ellipse(270, 340, 40, 40);
    fill(127, 127, 127);
    ellipse(270, 400, 40, 40);
    ellipse(270, 290, 40, 40);
    ellipse(160, 290, 40, 40);
    ellipse(160, 400, 40, 40);
    fill(71, 71, 71);
    ellipse(170, 420, 20, 20);
    ellipse(140, 410, 20, 20);
    ellipse(150, 380, 20, 20);
    fill(141, 141, 141);
    ellipse(150, 350, 10, 10);
    ellipse(150, 330, 10, 10);
    fill(71, 71, 71);
    ellipse(150, 310, 20, 20);
    ellipse(140, 280, 20, 20);
    ellipse(170, 270, 20, 20);
    fill(141, 141, 141);
    ellipse(200, 275, 10, 10);
    ellipse(230, 275, 10, 10);
    ellipse(230, 425, 10, 10);
    ellipse(200, 425, 10, 10);
    fill(71, 71, 71);
    ellipse(280, 380, 20, 20);
    ellipse(285, 415, 20, 20);
    ellipse(255, 415, 20, 20);
    ellipse(255, 270, 20, 20);
    ellipse(290, 280, 20, 20);
    ellipse(280, 310, 20, 20);
    fill(141, 141, 141);
    ellipse(290, 330, 10, 10);
    ellipse(285, 355, 10, 10);

    //tree 'leaves' for far right tree
    fill(71, 71, 71);
    ellipse(1150, 290, 70, 70);
    ellipse(1090, 350, 70, 70);
    fill(93, 93, 93);
    ellipse(1125, 325, 70, 70);
    fill(132, 132, 132);
    ellipse(1090, 290, 70, 70);
    ellipse(1160, 350, 70, 70);
    fill(127, 127, 127);
    ellipse(1065, 320, 40, 40);
    ellipse(1065, 260, 40, 40);
    ellipse(1120, 260, 40, 40);
    ellipse(1180, 260, 40, 40);
    fill(93, 93, 93);
    ellipse(1180, 315, 40, 40);
    ellipse(1180, 375, 40, 40);
    ellipse(1125, 380, 40, 40);
    ellipse(1070, 380, 40, 40);
    fill(71, 71, 71);
    ellipse(1080, 395, 20, 20);
    ellipse(1050, 385, 20, 20);
    ellipse(1055, 360, 20, 20);
    fill(141, 141, 141);
    ellipse(1050, 330, 10, 10);
    ellipse(1050, 310, 10, 10);
    fill(71, 71, 71);
    ellipse(1055, 280, 20, 20);
    ellipse(1045, 250, 20, 20);
    ellipse(1075, 245, 20, 20);
    fill(141, 141, 141);
    ellipse(1110, 245, 10, 10);
    ellipse(1130, 245, 10, 10);
    fill(71, 71, 71);
    ellipse(1165, 245, 20, 20);
    ellipse(1195, 250, 20, 20);
    ellipse(1195, 280, 20, 20);
    fill(141, 141, 141);
    ellipse(1195, 300, 10, 10);
    ellipse(1195, 325, 10, 10);
    fill(71, 71, 71);
    ellipse(1195, 355, 20, 20);
    ellipse(1195, 390, 20, 20);
    ellipse(1165, 390, 20, 20);
    fill(141, 141, 141);
    ellipse(1140, 395, 10, 10);
    ellipse(1110, 395, 10, 10);

  }

  if (timerx >= 84) {
    background(0)
    fill(255);
    noStroke();
    ellipse(xposb, 310, diameter, diameter);

    xposb += 2



    if (xposb >= 500) {

      fill(255);
      noStroke();
      ellipse(xposb, 310, diameter, diameter);
      xposb += 5

      //rect(1000, 0, 50, 720);

      for (var i = 0; i < shapes.length; i++) {
        shapes[i].move();
        shapes[i].display();
      }
    }
  }
  if (timerx >= 126) {
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

    //tunnel
    stroke(255)


    line(150, 250, 1280, 250)

    line(150, 400, 1280, 400)

    line(150, 250, 150, 400)

//more tunnel stuff


    fill(255)
    ellipse(xposc, 300, diameter, diameter);
    xposc += 2
    fill(0)
    stroke(0)
    //so you can't see the extra circles hopping
    rect(151, 260, 125, 130)

    rect(322, 260, 50, 100)
    rect(430, 260, 50, 100)
    rect(530, 260, 50, 100)
    rect(635, 260, 50, 100)
    rect(740, 260, 50, 100)
    rect(845, 260, 50, 100)
    rect(950, 260, 50, 100)
    rect(1050, 260, 500, 100)



    if (xposc >= 250) {
      frameRate(2)
      xposc += 50
    }
    if (xposc >= 720) {
      frameRate(30)
    }
  }
  //for monster
  if (timerx >= 145) {
    background(0);
    fill(255)
    noStroke();
    ellipse(xposd, 310, diameter, diameter);

    xposd = xposd + speed

    if (xposd >= 750) {
      speed = speed * -3
      //For the Monster
    }
    for (var j = 0; j < creatures.length; j++) {
      creatures[j].move();
      creatures[j].display();
    }
  }
  //for shifty thing
  if (timerx >= 200) {
    background(0)

    fill(255);
    xpose = xpose + motion

    if ((xpose > width) || (xpose < 0)) {
      motion = motion * -1;

    }

    if (xpose = random(motion)) {
      motion++;
    }
    ellipse(xpose, 300, 25, 25)

    for (var k = 0; k < shifts.length; k++) {
      shifts[k].display();
    }
  }
  //for the explosion
  if (timerx >= 215) {
    background(0);



    if (diameter <= 0) {
      background(255)
    } else {
      background(0);
    }

    fill(255);
    noStroke();
    ellipse(640, 360, diameter, diameter);
    diameter--
  }
  //for the stars
  if (timerx >= 220) {
    background(0);
    for (var s = 0; s < ehs.length; s++) {
      ehs[s].display();
      //  starameter --

    }
  }
}