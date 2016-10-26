var pacmans[];

function setup() {
  createCanvas(1280, 720);
  for (var i = 0; i < 5; i++) {
    pacmans[i] = new Pacman(random(width), random (height));
  }
}

function draw() {
  background(0);
  for (var i = 0; i < pacmans.length; i++) {
    pacmans[i].update();
    pacmans[i].display();
  }
}