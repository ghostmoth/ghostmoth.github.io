
var shapes = []

function setup() {
   mySound = loadSound( 'song.mp3',loaded )
  //for the song
 mySound.setVolume(0.5)
function loaded(){
   mySound.play();
}
  //creating a canvas
  createCanvas(1280, 720);
  //for loop for the circles
  for (var i = 0; i < 20; i++) {
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
//forloop of the circles
function draw() {
  background(0);
  for(var i = 0; i < shapes.length; i++) {
    shapes[i].move();
    shapes[i]. display();
  }
}
