

//for the text
var xposTwo = 200;
var textColor = 255;
//for the circle that moves
var diameter = 40;
var xpos = 0;
var ypos = 310;
var shapes = [];



//timer
var timerx = 0;

function setup() {
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



      }
  

function draw() {
  background(0);


  //timer
  fill(255, 0, 0)
  ellipse(timerx, 10, 10, 10)
  timerx += 0.5

  //opener text
  textSize(72);
  fill(textColor);
  text("A Circle's Journey", xposTwo, 200);
  xposTwo++



  //makes text dissapear at a certain point  
  if (timerx >= 100) {
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
  
  //circle just strolling
  if(timerx>=200){
  ellipse(xpos,ypos,diameter,diameter)
  xpos+=2
  if(xpos >= 500){
    
    //circle getting faster when fly things appear
  
   fill(255);
   noStroke();
  ellipse(xpos, 310, diameter, diameter);
  xpos += 5

//fly things
  
  for(var i = 0; i < shapes.length; i++) {
    shapes[i].move();
    shapes[i]. display();
    

    }
  } 
}


      }
    



