function preload() {
  mySound = loadSound( 'song.mp3' )
}

function setup() {
  createCanvas(1280, 720);
  mySound.setVolume(0.5)
  mySound.play();
}

function draw() {
  
}