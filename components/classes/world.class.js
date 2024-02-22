class World {
  keyboard;
  canvas;
  ctx;
  cameraX = 0;
  hero = new Hero();
  level = level1;
  healthStatusBar = new StatusBar("health");
  coinStatusBar = new StatusBar("coin");
  poisonStatusBar = new StatusBar("poison");
  throwableObjects = [];

  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.draw();
    this.keyboard = keyboard;
    this.setWorld();
    this.checkCollisions();
    this.run();
  }

  /**
   * Function will add a world instance to given object
   *
   */
  setWorld() {
    this.hero.world = this;
    this.level.enemies[5].world = this;
  }

  /**
   * Function checks for collisions of objects
   *
   */
  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrownObjects();
      this.checkDistances();
      this.checkMeleeAttacks();
    }, 1000 / 10);
  }

  /**
   * Functions checks if a thrown key is pressed and if the hero is not shooting. If not, it will activate the shooting status.
   *
   */
  checkThrownObjects() {
    if (this.keyboard.d && !this.hero.isShooting) {
      this.hero.currentImage = 0;
      this.hero.isShooting = true;
    }
  }

  checkMeleeAttacks() {
    if (this.keyboard.space && !this.hero.isAttacking) {
      this.hero.currentImage = 0;
      this.hero.isAttacking = true;
    }
  }

  checkCollisions() {
    this.checkingEnemyCollision();
    this.checkingBubbleCollision();
    this.checkingCoinCollision();
  }

  checkDistances() {
    this.level.enemies.forEach((enemy) => {
      if (this.hero.isCloseTo(enemy)) {
        enemy.heroIsClose = true;
      }
    });
  }

  /**
   * Function draws given objects to the canvas as often as the computer has the capability. The canvas is cleared at each function activation
   *
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.cameraX, 0);
    this.addObjectsToMaps(this.level.backgrounds);
    // fixed objects with reseting coordination system
    this.ctx.translate(-this.cameraX, 0);
    this.addToMap(this.healthStatusBar);
    this.ctx.translate(this.cameraX, 0);
    // movable objects
    this.addToMap(this.hero);
    this.addObjectsToMaps(this.level.coins);
    this.addObjectsToMaps(this.level.bottles);
    this.addObjectsToMaps(this.level.enemies);
    this.addObjectsToMaps(this.throwableObjects);
    this.ctx.translate(-this.cameraX, 0);
    self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * Function iterates through an object and adds each element to the map/canvas
   *
   * @param {Object} objects
   */
  addObjectsToMaps(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  /**
   * Functions draws given object to the canvas. According to the left or right direction status, the image is horizontally flipped.
   *
   * @param {movableObject} movableObject
   */
  addToMap(movableObject) {
    if (movableObject.otherDirection) {
      this.flipImage(movableObject);
    }
    movableObject.draw(this.ctx);
    movableObject.drawFrame(this.ctx);

    if (movableObject.otherDirection) {
      this.resetFlipImage(movableObject);
    }
  }

  /**
   * Function mirrores the object image on the canvas horizontally to the oppesite direction
   *
   * @param {object} movableObject
   */
  flipImage(movableObject) {
    this.ctx.save();
    this.ctx.translate(movableObject.width, 0);
    this.ctx.scale(-1, 1);
    movableObject.x = movableObject.x * -1;
  }

  /**
   * Function resets the mirrored image on the canvas to the normal image direction
   *
   * @param {Object} movableObject
   */
  resetFlipImage(movableObject) {
    movableObject.x = movableObject.x * -1;
    this.ctx.restore();
  }

  changeHealthStatusbar() {
    this.healthStatusBar.setPercentage(
      this.hero.energy,
      this.healthStatusBar.imagesHealth
    );
  }

  changePoisonStatusbar() {
    this.poisonStatusBar.setPercentage(
      this.hero.poisonAmmunition,
      this.poisonStatusBar. imagesPoison
    );
  }

  /**
   * Function iterates through all thrown objects and checks if one is colliding with any enemy object from an enemies array. If so it elemintes the hitted enemy and erases the enemy from the canvas and enemy array
   *
   */
  checkingBubbleCollision() {
    this.throwableObjects.forEach((bubble) => {
      this.level.enemies.forEach((enemy) => {
        if (bubble.isColliding(enemy)) {
          enemy.eliminated();
          eraseObjectFromCanvas(this.throwableObjects, bubble);
        }
      });
    });
  }

  /**
   * Function iterates throuh all enemies and check if one object is colliding with the hero object. 
   * If so, it reduces the health by the hit function and changes the status bar.
   * If the hero object is colliding while attacking with a enemy object, it gets destroyed.
   *
   */
  checkingEnemyCollision() {
    this.level.enemies.forEach((enemy) => {
      if (this.hero.isColliding(enemy)) {
        if (this.hero.isAttacking && enemy instanceof Pufferfish){
          // hero collides with enemy while attacking than the enemy is dying by meele attack
          this.hero.isCollidingWith.push(enemy);  
        }
        // if hero is not attacking:
        if(!this.hero.isAttacking) {
          this.hero.hit();
          this.changeHealthStatusbar();
          if (enemy instanceof Jellyfish) this.hero.isShocked = true;
        }
      }
    });
  }

  checkingCoinCollision() {
    this.level.coins.forEach((coin) => {
      // collision with coin
      // get coin
      // update coin status bar
      if (this.hero.isColliding(coin)) {
        this.coinStatusBar.setPercentage(10, this.coinStatusBar.imagesCoin);
      }
    });
  }
}
