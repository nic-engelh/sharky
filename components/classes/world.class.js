class World {
  keyboard;
  canvas;
  ctx;
  cameraX = 0;
  hero = new Hero();
  level = level1;
  throwableObjects = [];
  healthStatusBar = new StatusBar("health");
  coinStatusBar = new StatusBar("coin");
  poisonStatusBar = new StatusBar("poison");
  waterBackgroundSounds = new Audio(
    "/assets/sounds/underwater-loop-amb-6182.mp3"
  );
  ambientBackgroundMusik = new Audio(
    "/assets/sounds/027210_39danger-and-beauty39-ukulele-loop-by-reamp3-71291.mp3"
  );
  bottleSound = new Audio("/assets/sounds/bottle-pop-45531.mp3");
  coinSound = new Audio(
    "/assets/sounds/short-success-sound-glockenspiel-treasure-video-game-6346.mp3"
  );
  heroHurtSound = new Audio("/assets/sounds/male-hurt-sound-95206.mp3");
  
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
   * Function activates the intervall for all collision checking functions
   *
   */
  run() {
    setInterval(this.runChecks.bind(this), 1000 / 10);
    this.waterBackgroundSounds.play();
    this.ambientBackgroundMusik.play();
    this.ambientBackgroundMusik.volume = 0.1;
  }

  /**
   * Function is used as callback in order to initiate all checks
   *
   */
  runChecks() {
    this.checkCollisions();
    this.checkGathering();
    this.checkThrownObjects();
    this.checkDistances();
    this.checkMeleeAttacks();
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

  /**
   * Functions checks if the melee key is pressed. If so it activates the attacking flag for the hero object.
   *
   */
  checkMeleeAttacks() {
    if (this.keyboard.space && !this.hero.isAttacking) {
      this.hero.currentImage = 0;
      this.hero.isAttacking = true;
    }
  }

  /**
   * Callback function for all collision checks.
   *
   */
  checkCollisions() {
    this.checkingEnemyCollision();
    this.checkingBubbleCollision();
  }

  /**
   * Callback function for all coin and bottle collision checks.
   *
   */
  checkGathering() {
    this.checkingCoinCollision();
    this.checkingBottleCollision();
  }

  /**
   * Functions checks distances for every enemy in the game. If the enemy object is close to the hero, it will activate a flag wihtin the enemy object scope.
   *
   */
  checkDistances() {
    this.level.enemies.forEach((enemy) => {
      if (enemy == null) return;
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
    this.addingGameUtilitiesToMap();
    this.ctx.translate(this.cameraX, 0);
    this.addingAllObjectsToMap();
    this.ctx.translate(-this.cameraX, 0);
    self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * Function adds all status bars to the canvas.
   *
   */
  addingGameUtilitiesToMap() {
    this.addToMap(this.healthStatusBar);
    this.addToMap(this.poisonStatusBar);
    this.addToMap(this.coinStatusBar);
  }

  /**
   * Function adds all movable objects to the canvas.
   *
   */
  addingAllObjectsToMap() {
    this.addToMap(this.hero);
    this.addObjectsToMaps(this.level.coins);
    this.addObjectsToMaps(this.level.bottles);
    this.addObjectsToMaps(this.level.enemies);
    this.addObjectsToMaps(this.throwableObjects);
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
    if (movableObject.otherDirection) this.flipImage(movableObject);
    if (movableObject.upwards) this.rotateImage(movableObject, true, false);
    if (movableObject.downwards) this.rotateImage(movableObject, false, true);

    movableObject.draw(this.ctx);
    movableObject.drawFrame(this.ctx);

    if (movableObject.otherDirection) this.resetFlipImage(movableObject);
    if (movableObject.upwards || movableObject.downwards) this.resetRotation();
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

  /**
   * Function rotates hero object by 45 degress upwards or downwards.
   *
   * @param {MovoableObject} movableObject as Hero Object
   * @param {boolean} up movement
   * @param {boolean} down movement
   */
  rotateImage(movableObject, up, down) {
    this.ctx.save();
    this.ctx.translate(movableObject.x, movableObject.y);
    // up: -Math.PI / 4 down: Math.PI / 4
    if (up) {
      this.ctx.rotate(-Math.PI / 4);
      this.ctx.translate(
        -(movableObject.x + movableObject.width / 2),
        -(movableObject.y - movableObject.height / 2)
      );
    }
    if (down) {
      this.ctx.rotate(Math.PI / 4);
      this.ctx.translate(
        -(movableObject.x - movableObject.width / 2),
        -(movableObject.y + movableObject.height / 2)
      );
    }
  }

  resetRotation() {
    this.ctx.restore();
  }

  /**
   * Function sets the health status bar up to the exact amount of the hero object energy variable.
   *
   */
  changeHealthStatusbar() {
    this.healthStatusBar.setPercentage(
      this.hero.energy,
      this.healthStatusBar.imagesHealth
    );
  }

  /**
   * Function sets the poison status bar up to the exact amount of the hero object gathered poison bottles.
   *
   */
  changePoisonStatusbar() {
    this.poisonStatusBar.setPercentage(
      this.hero.poisonAmmunition,
      this.poisonStatusBar.imagesPoison
    );
  }

  /**
   * Function iterates through all thrown objects and checks if one is colliding with any enemy object from an enemies array. If so it elemintes the hitted enemy and erases the enemy from the canvas and enemy array
   *
   */
  checkingBubbleCollision() {
    this.throwableObjects.forEach((bubble) => {
      this.level.enemies.forEach((enemy) => {
        if (bubble.isColliding(enemy) && !(enemy instanceof Endboss))
          this.activateBubbleCollisionEffect(enemy, bubble);
        if (bubble.isColliding(enemy) && enemy instanceof Endboss)
          this.activateBubbleCollisionEndbossEffect(enemy, bubble);
      });
    });
  }

  activateBubbleCollisionEffect(enemy, bubble) {
    enemy.eliminated();
    eraseObjectFromCanvas(this.throwableObjects, bubble);
  }

  activateBubbleCollisionEndbossEffect(enemy, bubble) {
    eraseObjectFromCanvas(this.throwableObjects, bubble);
    enemy.isHit = true;
    this.level.enemies[5].reduceEnergy();
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
        if (this.hero.isAttacking && enemy instanceof Pufferfish) {
          // hero collides with enemy while attacking than the enemy is dying by meele attack
          this.hero.isCollidingWith.push(enemy);
        }
        // if hero is not attacking:
        if (!this.hero.isAttacking) {
          this.hero.hit();
          this.heroHurtSound.play();
          this.changeHealthStatusbar();
          if (enemy instanceof Jellyfish) this.hero.isShocked = true;
        }
      }
    });
  }

  /**
   * Function goes through every coin object an checks a possible collision with the hero object.  If so, the statusbar will be changed and the object will be erased from the game.
   *
   */
  checkingCoinCollision() {
    this.level.coins.forEach((coin) => {
      if (this.hero.isColliding(coin)) {
        this.hero.coins += 30;
        this.coinStatusBar.setPercentage(
          this.hero.coins,
          this.coinStatusBar.imagesCoin
        );
        eraseObjectFromCanvas(this.level.coins, coin);
        this.coinSound.play();
      }
    });
  }

  /**
   * Function goes through every poison bottle object an checks a possible collision with the hero object.  If so, the statusbar will be changed and the object will be erased from the game.
   *
   */
  checkingBottleCollision() {
    this.level.bottles.forEach((bottle) => {
      if (this.hero.isColliding(bottle)) {
        this.hero.changeAmmunitionAmount(true, false);
        this.poisonStatusBar.setPercentage(
          this.hero.poisonAmmunition,
          this.poisonStatusBar.imagesPoison
        );
        eraseObjectFromCanvas(this.level.bottles, bottle);
        this.bottleSound.play();
      }
    });
  }
}
