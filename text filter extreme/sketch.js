

var ctracker;

var img;
var positions;
//loads the image(hopefully, there haveveen issues)
function preload() {
 img = loadImage("word.jpg");
}
function setup() {
  

//  setup camera capture
  var videoInput = createCapture(VIDEO);
  videoInput.size(800, 800);
  videoInput.position(0, 0);
  videoInput.hide();

 // pixelDensity(1);
//  setup canvas
  var cnv = createCanvas(800, 800);
  cnv.position(0, 0);
  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);
  noStroke();

}

function draw() {



  clear();
  // get array of face marker positions [x, y] format
  positions = ctracker.getCurrentPosition();
  console.log(positions.length);

  for (var i = 0; i < positions.length; i++) {
    // set the color of the ellipse based on position on screen
   // fill(map(positions[i][0], width * 0.33, width * 0.66, 0, 255), map(positions[i][1], height * 0.33, height * 0.66, 0, 255), 255);
    // draw ellipse at each position point
    fill(255, 0, 0)
    ellipse(positions[i][0], positions[i][1], 8, 8);
  }
      loadPixels();


if(positions) {
  fill(0, 255, 255);
  var point = 37
  
  var faceWidth = positions[14][0] - positions[0][0];
  faceWidth = abs(faceWidth);
  //makes the facetracking the circle
  ellipse(positions[point][0], positions[point][1], faceWidth, faceWidth)

  // We must also call loadPixels() on the PImage since we are going to read its pixels.
  img.loadPixels();
  for (var y = 0; y < height; y++ ) {
    for (var x = 0; x < width; x++ ) {
      var loc = (x + y * width) * 4;
      // The functions red(), green(), and blue() pull out the three color components from a pixel.
      var r = img.pixels[loc   ]; 
      var g = img.pixels[loc + 1];
      var b = img.pixels[loc + 2];
    
    
        // based on proximity to the mouse
      var distance = dist(x, y, width - positions[point][0], positions[point][1]);

      // The closer the pixel is to the face, the lower the value of "distance" 
      // We want closer pixels to be brighter, however, so we invert the value using map()
      // Pixels with a distance of 50 (or greater) have a brightness of 0.0 (or negative which is equivalent to 0 here)
      // Pixels with a distance of 0 have a brightness of 1.0.
      var adjustBrightness = map(distance, 0, 50, 8, 0);
      r *= adjustBrightness;
      g *= adjustBrightness;
      b *= adjustBrightness;

      // Constrain RGB to between 0-255
      r = constrain(r, 0, 255);
      g = constrain(g, 0, 255);
      b = constrain(b, 0, 255);
      
      // Set the display pixel to the image pixel
      pixels[loc    ] = r;
      pixels[loc + 1] = g;
      pixels[loc + 2] = b;
      pixels[loc + 3] = 255; // Always have to set alpha
    }
  }

  updatePixels();
}


}

