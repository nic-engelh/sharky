class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  offsetTop = 0;
  offsetBottom = 0;
  offsetRight = 0;
  offsetleft = 0;
  energy = 100;
  lastHit = 0;
  deathState = false;
  heroIsClose = false;
  isAggressive = false;
  isAttacking = false;

  /**
   * Function raises the x value and the objects moves right if the object is not eleminated
   *
   */
  moveRight() {
    setInterval(() => {
      if (!this.isDead()) {
        this.x += this.speed;
      }
    }, 1000 / 60);
  }

  /**
   * Function reduces the x value and the objects moves left if the object is not eleminated
   *
   */
  moveLeft() {
    setInterval(() => {
      if (!this.isDead()) {
        this.x -= this.speed;
      }
    }, 1000 / 60);
  }

  /**
   * Function iterates through a array of images paths and saves the current image from an image cache
   *
   * @param {image} images
   */
  playAnimation(images) {
    this.resetCurrentImage(images);
    let i = this.currentImage % images.length;
    let path = images[i];
    this.image = this.imageCache.get(path);
    this.currentImage++;
  }

  /**
   * Function reduces the y value of the object by the speed and acceleration variable if the object is above ground and has speed
   *
   */
  applyGravity() {
    setInterval(() => {
      if (isAboveGround || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  /**
   * Function checks if an instance of a thrown object y value is above a static y value of 180
   *
   * @returns boolean
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) return true;
    return this.y < 180;
  }

  /**
   * Function is checking the x and y cordinates added by a given offset of two objects. It will return true if the x and y values are crossing each other.
   *
   * @param {object} object
   * @returns boolean
   */
  isColliding(object) {
    return (
      // each x and y makes in kombination the cordinates for every of the 4 points of the object image frame: top right, top left, bottom right, bottom left.
      // zero point is top left corner; Y Axis is inverted; Y goes from top to bottom positiv
      // checking right with left; Top Right Corner Point; offset to shorten it; object top left corner point; Offset to shorten top
      (this.x + this.width - this.offsetRight) >= (object.x + object.offsetleft) &&
      // checking Left with right; top left corner point; offset to set it more to the right; object top right corner; offset to set x to the left
      (this.x + this.offsetleft) <= (object.x + object.width - object.offsetRight) &&
      // checking top with bottom; top corners; offset set top corner higher; object top corners ;  offset set corners lower
      (this.y + this.height - this.offsetBottom) >= (object.y + object.offsetTop) &&
      // checking top poin with bottom point; top left corner point; offsettop sets y more down; object bottom corner point; offset sets y even more down
      (this.y + this.offsetTop) <= (object.y + object.height + object.offsetBottom)
    );
  }

  /*
  (this.X + this.width) >= obj.X && 
  this.X <= (obj.X + obj.width) && 
                (this.Y + this.offsetY + this.height) >= obj.Y &&
                (this.Y + this.offsetY) <= (obj.Y + obj.height) */


  isCollidingRightwithLeft (object) {
    return (this.x + this.width - this.offsetRight >= object.x + object.offsetleft);
  }

  isCollidingLeftwithRight (object) {
    return (this.x + this.offsetleft <= object.x + object.width - this.offsetRight);
  }

  isCollidingTopwithBottom (object) {
    return (this.y + this.height - this.offsetBottom >= object.y + object.offsetTop);
  }

  isCollidingBottomWithTop (object) {
    return (this.y + this.offsetTop <= object.y + object.height - object.offsetBottom);
  }

  

  /**
   * Function reduces the energy to zero in five point steps. It will stay at zero. It will create a date object from the last hit.
   *
   */
  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
      this.deathState = true;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Function checks if enery is zero and deathstate is true
   *
   * @returns boolean
   */
  isDead() {
    return ((this.energy == 0)|| (this.deathState == true));
  }

  /**
   * Function eleminates a movable object from game
   *
   */
  eliminated() {
    this.deathState = true;
    this.energy = 0;
  }

  /**
   * Function checks the timestap when activated with the time stap from the last enemy hit
   *
   * @returns number
   *
   */
  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit; // difference in millisec
    timePassed = timePassed / 1000; // difference in sec
    return timePassed < 1;
  }

  /**
   * Function creates the floating movement upwards for a shooted bubble
   *
   */
  floatingUpwards() {
    this.x += this.speedX;
    this.y -= this.speedY;
    this.speedY += this.acceleration;
    this.speedX -= this.acceleration;
  }

  isCloseTo (object) {
    let distance =  object.x - this.x ;
    return (distance <= 350);
  }

  
}
