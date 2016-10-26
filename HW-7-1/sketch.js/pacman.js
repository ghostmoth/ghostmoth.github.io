function pacman(xpos, ypos) {
  

    //pacman
    this.diam = 100;
    this.radius = 50;
    this.eyediam = 20;
    this.mouthAngle = (1/6);
    this.mouthChange = 1/128;
    
    //utter nonsense
    this.xpos = random xpos;
    this.ypos = random ypos;
    this.direction = 0;
    this.change = 0;
    this.xChange = 0;
    this.yChange = 0;
    this.maxDirChange = 4;
    this.wait = false;
    
    //time for the sake of time
    this.curTime = 0;
    this.maxTime = 8;
    this.targetTime = random(this.maxTime);
    
    this.curDist = 0;
    this.minDist = 0;
    this.xDiff = 0;
    this.yDiff = 0;
}

pacman.prototype.draw = function () {
  this.timer();
  this.move();
  
  push();
  
  //rotation
  if (this.direction === 0) {
  } else if (this. direction === 1){
      rotate(PI/2);
  } else if (this.direction === 2){
    scale(-1, 1);
  } else if (this.direction ===3){
    rotate(-PI/2);
  }
  
  //pacman
  fill(255,255,0)
  arc(this.x, this.y, this.diam, this.diam, PI*this.mouthAngle, -PI*this.mouthAngle, PIE);
  fill(0)
  ellipse(this.x, this.y, this.eyediam, this.eyediam);
  
  pop();
};
  //move
pacman.prototype.move = function(){
  //update position
  if (!this.wait) {
    this.xpos += this.xChange;
    this.ypos += this.yChange;
    
  }
  
  //mouth animation
  this.mouthAngle = this.mouthAngle + ( this.mouthChange * this.change);
	if( this.mouthAngle > (1/6) ){
		this.mouthChange = -this.mouthChange;
		this.mouthAngle = (1/6);
	}
	if( this.mouthAngle < 0.01 ){
		this.mouthChange = -this.mouthChange;
		this.mouthAngle = 0.03;
	}


	// edge check
	if( this.xpos+this.radius >= width ){
		this.xpos = width-this.radius;
		this.xChange = 0;
	} else if ( this.xpos-this.radius <= 0 ){
		this.xpos = 0+this.radius;
		this.xChange = 0;
	}

	if ( this.ypos+this.radius >= height ){
		this.ypos = height-this.radius;
		this.yChange = 0;
	} else if ( this.ypos-this.radius <= 0 ){
		this.ypos = 0+this.radius;
		this.yChange = 0;
	}
};

// Timer
PacMan.prototype.timer = function () {
	var curTime = this.curTime / frameRate();
	if ( curTime >= this.targetTime ){
		// change direction and update timer
		this.changeDirection();
	  } else {
		  this.curTime++;
	  }
};

PacMan.prototype.changeDirection = function () {
	var newDirection;

	// reset timer
	this.curTime = 0;
	this.targetTime = random(this.maxTime);

	// choose a new direction
	do {
		newDirection = floor( random(4) );
		// loop if random chooses same as previous
	} while ( newDirection == this.direction );

	this.direction = newDirection;

	// get a new travel speed
	this.change = random(this.maxDirChange);
	// assign direction values accordingly
	if (newDirection === 0){
		// East
		this.xChange = this.change;
		this.yChange = 0;
	} else if (newDirection === 1){
		// South
		this.xChange = 0;
		this.yChange = this.change;
	} else if (newDirection === 2){
		// West
		this.xChange = -this.change;
		this.yChange = 0;
	} else if (newDirection === 3){
		// North
		this.xChange = 0;
		this.yChange = -this.change;
	}
};


// distance checks
PacMan.prototype.checkPos = function(pacArray) {
	var minDist = 0;
	var curDist = 0;
	var xDiff = 0;
	var yDiff = 0;

	this.wait = false;
	for (var i = 0; i < pacArray.length; i++) {
		curDist = dist(this.xpos, this.ypos, pacArray[i].xpos, pacArray[i].ypos);
		// minDist = sqrt(pow(this.diam,2) + pow(pacArray[i].diam,2));
		minDist = this.radius + abs(this.xChange) + abs(this.yChange) + pacArray[i].radius;

		xDiff = pacArray[i].xpos - this.xpos;
		yDiff = pacArray[i].ypos - this.ypos;

		if ( this.direction === 0 && curDist <= minDist && xDiff > 0 ) {
			// check for conflict to the east
			this.wait = true;
		} else if ( this.direction == 1 && curDist <= minDist && yDiff > 0 ) {
			// check for conflicts to the south
			this.wait = true;
		} else if ( this.direction == 2 && curDist <= minDist && xDiff < 0 ) {
			// check for conflicts to the south
			this.wait = true;
		} else if ( this.direction == 3 && curDist <= minDist && yDiff < 0 ) {
			// check for conflicts to the south
			this.wait = true;
		}
	}
};
