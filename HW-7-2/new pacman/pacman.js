function pacman (x, y){
  this.x = x;
  this.y = y;
  this.r = 50;
}
this.display = function() {
  fill(255, 255, 0);
  arc(this.x, this.y, this.r * 2, this.r * 2, 0, PI+HALF_PI, PIE);
}

this.update = function() {
  this.x = this.x + random(-1, 1);
  this.y = this.y + random(-1, 1);
}