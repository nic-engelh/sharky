class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  offsetTop = 150;
  offsetBottom = 50;
  offsetRight = 0;
  offsetleft = 0;
  energy = 100;
  lastHit = 0;
  deathState = false;

  moveRight() {
     setInterval(() => {
      if(!this.isDead()){
        this.x += this.speed;
      }
    }, 1000 / 60);
  }
  moveLeft() {
    setInterval(() => {
      if(!this.isDead()){
        this.x -= this.speed;
      }
    }, 1000 / 60);
  }


  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.image = this.imageCache.get(path);
    this.currentImage++;
  }

  applyGravity() {
    setInterval(() => {
      if (isAboveGround || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if (this instanceof ThrowableObject) 
      return true;
    
    return this.y < 180;
  }

  isColliding(object) {
    return (
      // checking right with left
      this.x + this.width - this.offsetRight >= object.x + object.offsetleft &&
      // checking Left with right
      this.x + this.offsetleft <= object.x + object.width - this.offsetRight &&
      // checking top with bottom
      this.y + this.height - this.offsetBottom >= object.y + object.offsetTop &&
      // checking bottom with top
      this.y + this.offsetTop  <= object.y + object.height - object.offsetBottom
    );
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
      this.deathState = true;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isDead() {
    return (this.energy == 0 || this.deathState == true);
  }

  eliminated() {
    this.deathState = true;
    this.energy = 0;
  }

  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit; // difference in millisec
    timePassed = timePassed / 1000; // difference in sec
    return timePassed < 1;
  }

  floatingUpwards(){
    this.x += this.speedX;
    this.y -= this.speedY;
    this.speedY += this.acceleration;
    this.speedX -= this.acceleration;
  }

  
}
