

function Flower(init_x, init_y) {

    // create a parameter to represent location
    this.loc = createVector(init_x, init_y);



    this.acceleration = createVector(.0005, 0);
    
    this.velocity = createVector(0, 0);

    this.groundFriction = 0.95;

    this.center = 30;
 
this.loc.x = 500
this.loc.y = 400
this.petal = 30
this.petaly = 30
}

Flower.prototype.frame = function () {

    this.info();
    this.move();
    this.display();
};

Flower.prototype.info = function() {
    console.log(this.acceleration);
};

Flower.prototype.move = function() {

    this.velocity.add(this.acceleration);

    this.loc.add(this.velocity);

};



Flower.prototype.force = function(vectorForce){
    this.acceleration.add(vectorForce);
};


Flower.prototype.display = function () {

    push();

 line(this.loc.x,this.loc.y, 500, 500, 1000)
  //fill(248, 244,74)
  //flower petals
  ellipse(this.loc.x, this.loc.y400, this.petal, this.petaly)
  fill(244, 200, 238)
  ellipse(this.loc.x+20, this.loc.y-5, this.petal, this.petaly)
  ellipse(this.loc.x-20,this.loc.y+20, this.petal, this.petaly)
  ellipse(this.loc.x, this.loc.y-20, this.petal, this.petaly)
  ellipse(this.loc.x-20, this.loc.y-10, this.petal, this.petaly)
  ellipse(this.loc.x+10, this.loc.y+15, this.petal, this.petaly)
//center of flower
  fill(248, 244,74)
  ellipse(this.loc.x, this.loc.y, this.center, this.center)

    pop();

if(this.loc.x >= 530) {
  this.loc.x = 500
      this.acceleration = createVector(-.0005, 0);
}

};
 