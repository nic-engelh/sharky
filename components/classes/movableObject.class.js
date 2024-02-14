class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  offSetTop = 150;
  offSetBottom = -50;
  offSetX = 200;
  energy = 100;
  lastHit = 0;
  deathState = false;

  moveRight() {
    setInterval(() => {
      this.x += this.speed;
    }, 1000 / 60);
  }
  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
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
      this.x + this.width >= object.x &&
      this.x <= object.x + object.width &&
      this.y + this.height + this.offSetBottom >= object.y &&
      this.y + this.offSetTop  <= object.y + object.height
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
    return this.energy == 0;
  }

  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit; // difference in millisec
    timePassed = timePassed / 1000; // difference in sec
    return timePassed < 1;
  }
}
