class Hero extends MovableObject {
  imagesWalking = [
    "../../assets/img/1.Sharkie/3.Swim/1.png",
    "../../assets/img/1.Sharkie/3.Swim/2.png",
    "../../assets/img/1.Sharkie/3.Swim/3.png",
    "../../assets/img/1.Sharkie/3.Swim/4.png",
    "../../assets/img/1.Sharkie/3.Swim/5.png",
    "../../assets/img/1.Sharkie/3.Swim/6.png",
  ];

  imagesWaiting = [
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/1.IDLE/1.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/1.IDLE/2.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/1.IDLE/3.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/1.IDLE/4.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/1.IDLE/5.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/1.IDLE/6.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/1.IDLE/7.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/1.IDLE/8.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/1.IDLE/9.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/1.IDLE/10.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/1.IDLE/11.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/1.IDLE/12.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/1.IDLE/13.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/1.IDLE/14.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/1.IDLE/15.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/1.IDLE/16.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/1.IDLE/17.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/1.IDLE/18.png",
  ];

  imagesFinAttacking = [
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/4.Attack/Fin slap/1.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/4.Attack/Fin slap/2.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/4.Attack/Fin slap/3.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/4.Attack/Fin slap/4.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/4.Attack/Fin slap/5.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/4.Attack/Fin slap/6.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/4.Attack/Fin slap/7.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/4.Attack/Fin slap/8.png",
  ];

  imagesSleeping = [
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/2.Long_IDLE/i1.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/2.Long_IDLE/I2.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/2.Long_IDLE/I3.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/2.Long_IDLE/I4.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/2.Long_IDLE/I5.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/2.Long_IDLE/I6.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/2.Long_IDLE/I7.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/2.Long_IDLE/I8.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/2.Long_IDLE/I9.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/2.Long_IDLE/I10.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/2.Long_IDLE/I11.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/2.Long_IDLE/I12.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/2.Long_IDLE/I13.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/2.Long_IDLE/I14.png",
  ];

  imagesDying = [
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];

  imagesDead = [
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/6.dead/1.Poisoned/12.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];

  imagesPoisoning = [
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/5.Hurt/1.Poisoned/5.png",
  ];

  imagesShocking = [
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/5.Hurt/2.Electric shock/1.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/5.Hurt/2.Electric shock/2.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/5.Hurt/2.Electric shock/3.png",
  ];

  imagesBubbleAttacking = [
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png",
    "https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png",
  ];

  world;
  speed = 10;
  isShooting = false;
  isShocked = false;
  isPoisoned = false;
  isCollidingWith = [];
  poisonAmmunition = 0;
  coins = 0;
  deathIntervall = 0;
  movementIntervall = 0;

  constructor() {
    super().loadImage("https://niklas-engelhardt.de/sharky/assets/img/1.Sharkie/3.Swim/1.png");
    this.loadingAllImages();
    this.offsetTop = 100;
    this.offsetBottom = 50;
    this.offsetRight = 70;
    this.offsetleft = 40;
    this.x = 50;
    this.animate();
  }

  /**
   * Functions starts swim and action animation intervals.
   * 
  */
 animate() {
    setStoppableInterval(this.swimAnimation.bind(this), 1000 / 45);
    setStoppableInterval(this.actionAnimation.bind(this), 1000 / 7);
  }

  /**
   * Functions activates the swimming movement logic function. It Stops any Swimming sounds and followsw the object with the camera.
   *
   */
  swimAnimation() {
    this.world.worldAudioManager.stopSound("swimming");
    this.swimming();
    this.world.cameraX = -this.x + 100;
  }

  /**
   * Function controlls the action animation according to various states as dead, attacking/shooting and moving.
   *
   */
  actionAnimation() {
    if (this.isDead()) this.dying();
    if (this.isAttacking || this.isShooting) this.attacking();
    if (!this.isDead() && !this.isShooting && !this.isAttacking) this.moving();
  }

  /**
   * Function contols the movement/swimming logic. Every direction is check if the object is in the game boundries.
   *
   */
  swimming() {
    this.resetVerticalAlignment();
    if (this.canHeroMoveRight()) this.moveRight();
    if (this.canHeroMoveLeft()) this.moveLeft();
    if (this.canHeroMoveUp()) this.moveUp();
    if (this.canHeroMoveDown()) this.moveDown();
  }

  /**
   * Function aligns hero to horizontal position in order to not stand/swimm in a vertical position.
   *
   */
  resetVerticalAlignment() {
    this.downwards = false;
    this.upwards = false;
  }

  /**
   * Function controlls the death animation. It will play the dying animation (11 pictures) in the beginning and afterwards the death animation.
   *
   * @param {number} deathIntervall
   * @returns
   */
  dying() {
    if (this.deathIntervall > 11) {
      this.playAnimation(this.imagesDead);
      this.world.isLost();
    }
    if (this.deathIntervall <= 11) {
      if (this.deathIntervall == 0) this.currentImage = 0;
      this.playAnimation(this.imagesDying);
      this.deathIntervall++;
    }
    return;
  }

  /**
   * The function controlls the attack animation of the hero. If the heros starts a shooting attack, the bubble attack animation will be activated. Afterwards the bubble will be created related to the last image of the animation.
   *
   */
  attacking() {
    if (this.isShooting) {
      this.playAnimation(this.imagesBubbleAttacking);
      if (this.currentImage >= 8) this.rangeAttack();
    }
    if (this.isAttacking) {
      this.adaptAttackRange(true, false);
      this.playAnimation(this.imagesFinAttacking);
      this.world.worldAudioManager.playSound("finSlap");
      if (this.currentImage >= 8) {
        this.killByCollision();
        this.world.worldAudioManager.playSound("enemyBubblePop");
        this.disengage();
      }
    }
  }

  /**
   *   checkingEnemyCollision() in the world class are prequel functions
   *
   */
  killByCollision() {
    if (this.isCollidingWith.length > 0) this.isCollidingWith[0].eliminated();
  }

  /**
   *  Wrapper function to disengage the hero. Attacking flag will be set back. Attack range will be set to normal collision range. Last element in Array with collided objects will be deleted.
   *
   */
  disengage() {
    this.currentImage = 0;
    this.isAttacking = false;
    this.adaptAttackRange(false, true);
    this.isCollidingWith.shift();
  }

  /**
   *  Functions checks bubble variations according to the closest enemy. Endboss (poison) or normal enemy (normal bubble).
   *
   */
  rangeAttack() {
    this.currentImage = 0;
    if (this.isEndbossNear() && this.poisonAmmunition > 0) {
      this.throwingBubble(true);
      this.world.changePoisonStatusbar();
      this.world.level.bottles.push(new Bottle());
    }
    this.throwingBubble(false);
    this.isShooting = false;
  }

  /**
   * Functions checks if the endboss object is closer than 500 px;
   *
   * @returns boolean
   */
  isEndbossNear() {
    return this.world.level.enemies[5].x - this.x < 500;
  }

  /**
   * Function controlls the moving animation state of the hero
   *
   */
  moving() {
    if (this.movementIntervall >= 54) {
      this.playAnimation(this.imagesSleeping);
    }
    if (this.movementIntervall < 54) {
      this.playAnimation(this.imagesWaiting);
      this.movementIntervall++;
    }
    if (this.isHurt()) {
      this.movementIntervall = 0;
      if (this.isShocked) {
        this.playAnimation(this.imagesShocking);
        this.world.worldAudioManager.playSound("shocked");
        this.isShocked = false;
        return;
      } else {
        this.playAnimation(this.imagesPoisoning);
      }
    }
    if (this.isMoving()) {
      this.playAnimation(this.imagesWalking);
      this.movementIntervall = 0;
    }
    return;
  }

  /**
   * function moves the object to the right y the amount of the speed variable. It will flag every other direction as false.
   *
   * @returns boolean
   */
  moveRight() {
    if (this.isDead()) return false;
    this.x += this.speed;
    this.otherDirection = false;
    this.downwards = false;
    this.upwards = false;
    this.world.worldAudioManager.playSound("swimming");
  }

  /**
   * function moves the object to the left by the amount of the speed variable. It will flag every other direction as false.
   *
   * @returns boolean
   */
  moveLeft() {
    if (this.isDead()) return false;
    this.x -= this.speed;
    this.otherDirection = true;
    this.downwards = false;
    this.upwards = false;
    this.world.worldAudioManager.playSound("swimming");
  }

  /**
   * function moves the object up y the amount of the speed variable. It will flag every other direction as false.
   *
   * @returns boolean
   */
  moveUp() {
    if (this.isDead()) return false;
    this.upwards = true;
    this.downwards = false;
    this.y -= this.speed;
    this.world.worldAudioManager.playSound("swimming");
  }

  /**
   * function moves the object down y the amount of the speed variable. It will flag every other direction as false.
   *
   * @returns boolean
   */
  moveDown() {
    if (this.isDead()) return false;
    this.downwards = true;
    this.upwards = false;
    this.y += this.speed;
    this.world.worldAudioManager.playSound("swimming");
  }

  /**
   * Functions checks if the keyboard right trigger or keyboard left trigger is used - it returns true then
   *
   * @returns boolean
   */
  isMoving() {
    return this.world.keyboard.right || this.world.keyboard.left;
  }

  /**
   * functions checks if object can move further left. X coordinate must be bigger than 0
   *
   * @returns boolean
   */
  canHeroMoveLeft() {
    return this.world.keyboard.left && this.x > 0;
  }

  /**
   * function checks if object can move further right. X coordinate must be smaller than the level end
   *
   * @returns boolean
   */
  canHeroMoveRight() {
    return this.world.keyboard.right && this.x < this.world.level.levelEndX;
  }

  /**
   * function checks if object can move further up. y coordinate must be bigger than the level top border
   *
   * @returns boolean
   */
  canHeroMoveUp() {
    return this.world.keyboard.up && this.y > -100;
  }

  /**
   * function checks if object can move further down. y coordinate must be bigger than the level lower border
   *
   * @returns boolean
   */
  canHeroMoveDown() {
    return this.world.keyboard.down && this.y < 300;
  }

  /**
   * Function creates a bubble to shoot for the hero object. If will reduce poisonenous bubble ammunition. The bubble will be released as a Throwable Object into the world object. It will be erased after a certain time.
   *
   * @param {boolean} poison
   * @returns
   */
  throwingBubble(poison) {
    if (poison == null) return;
    let bubble = new ThrowableObject(
      this.x + this.width - 50,
      this.y + 120,
      poison,
      this.otherDirection
    );
    if (poison) this.changeAmmunitionAmount(false, true);
    this.world.throwableObjects.push(bubble);
    this.world.worldAudioManager.playSound("bubbleShot");
  }

  /**
   * function increases or decreases the melee attack range with offset at the collision range
   *
   * @param {boolean} increase
   * @param {boolean} decrease
   */
  adaptAttackRange(increase, decrease) {
    if (increase) this.offsetRight = -40;
    if (decrease) this.offsetRight = 40;
  }

  /**
   * Function increases or decreases the ammount of poison bubbles of the hero object.
   * baseAmount = this.world.level.bottles.length
   *
   * @param {boolean} increase
   * @param {boolean} decrease
   * @returns
   */
  changeAmmunitionAmount(increase, decrease) {
    if (increase == null || decrease == null) return;
    if (increase) this.poisonAmmunition += 30;
    if (decrease) this.poisonAmmunition -= 30;
  }

  /**
   * Function buffers all image arrays for animation in the constructor.
   *
   */
  loadingAllImages() {
    const allImages = [
      this.imagesWalking,
      this.imagesWaiting,
      this.imagesFinAttacking,
      this.imagesBubbleAttacking,
      this.imagesSleeping,
      this.imagesPoisoning,
      this.imagesShocking,
      this.imagesDying,
      this.imagesDead,
    ];
    allImages.forEach((element) => {
      this.loadImages(element);
    });
  }
}
