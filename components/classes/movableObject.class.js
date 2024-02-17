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
  heroIsClose = false;

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
      // checking right with left
      this.x + this.width - this.offsetRight >= object.x + object.offsetleft &&
      // checking Left with right
      this.x + this.offsetleft <= object.x + object.width - this.offsetRight &&
      // checking top with bottom
      this.y + this.height - this.offsetBottom >= object.y + object.offsetTop &&
      // checking bottom with top
      this.y + this.offsetTop <= object.y + object.height - object.offsetBottom
    );
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
    let distance = this.x - object.x ;
    return (distance <= 300);
  }
}
