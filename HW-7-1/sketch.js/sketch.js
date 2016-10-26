var places = []


function setup() {
  createCanvas(1280, 720);
  //amount of pacmans
  for (var i = 0; i < 5; i++) 


function draw() {
  background(0);
  //forloop for pacman array
  for (var i = 0; i < places.length; i++) {
    //displaing pacman
    places[i].display();
  
  }
}