class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  offSetY = 200;
  offSetX = 200;
  energy = 100;
  lastHit = 0;


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
      if (isAboveGround) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y < 180;
  }

  isColliding(object) {
    return  (this.x + this.width) >= object.x && this.x <=(object.x + object.width) &&
            (this.y + this.height + this.offSetY) >= object.y &&
            (this.y + this.offSetY) <= (object.y + object.height) 
            //&&
            //object.OnCollisionCourse; 
  }

  hit() {
    this.energy -= 5;
    
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isDead() {
    return this.energy == 0;
  }

  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit; // difference in millisec
    timePassed = (timePassed / 1000); // difference in sec
    console.log(timePassed);
    return timePassed < 1;
  }
}
