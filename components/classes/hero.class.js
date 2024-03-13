class Hero extends MovableObject {
  imagesWalking = [
    "/assets/img/1.Sharkie/3.Swim/1.png",
    "/assets/img/1.Sharkie/3.Swim/2.png",
    "/assets/img/1.Sharkie/3.Swim/3.png",
    "/assets/img/1.Sharkie/3.Swim/4.png",
    "/assets/img/1.Sharkie/3.Swim/5.png",
    "/assets/img/1.Sharkie/3.Swim/6.png",
  ];

  imagesWaiting = [
    "/assets/img/1.Sharkie/1.IDLE/1.png",
    "/assets/img/1.Sharkie/1.IDLE/2.png",
    "/assets/img/1.Sharkie/1.IDLE/3.png",
    "/assets/img/1.Sharkie/1.IDLE/4.png",
    "/assets/img/1.Sharkie/1.IDLE/5.png",
    "/assets/img/1.Sharkie/1.IDLE/6.png",
    "/assets/img/1.Sharkie/1.IDLE/7.png",
    "/assets/img/1.Sharkie/1.IDLE/8.png",
    "/assets/img/1.Sharkie/1.IDLE/9.png",
    "/assets/img/1.Sharkie/1.IDLE/10.png",
    "/assets/img/1.Sharkie/1.IDLE/11.png",
    "/assets/img/1.Sharkie/1.IDLE/12.png",
    "/assets/img/1.Sharkie/1.IDLE/13.png",
    "/assets/img/1.Sharkie/1.IDLE/14.png",
    "/assets/img/1.Sharkie/1.IDLE/15.png",
    "/assets/img/1.Sharkie/1.IDLE/16.png",
    "/assets/img/1.Sharkie/1.IDLE/17.png",
    "/assets/img/1.Sharkie/1.IDLE/18.png",
  ];

  imagesFinAttacking = [
    "/assets/img/1.Sharkie/4.Attack/Fin slap/1.png",
    "/assets/img/1.Sharkie/4.Attack/Fin slap/2.png",
    "/assets/img/1.Sharkie/4.Attack/Fin slap/3.png",
    "/assets/img/1.Sharkie/4.Attack/Fin slap/4.png",
    "/assets/img/1.Sharkie/4.Attack/Fin slap/5.png",
    "/assets/img/1.Sharkie/4.Attack/Fin slap/6.png",
    "/assets/img/1.Sharkie/4.Attack/Fin slap/7.png",
    "/assets/img/1.Sharkie/4.Attack/Fin slap/8.png",
  ];

  imagesSleeping = [
    "/assets/img/1.Sharkie/2.Long_IDLE/i1.png",
    "/assets/img/1.Sharkie/2.Long_IDLE/I2.png",
    "/assets/img/1.Sharkie/2.Long_IDLE/I3.png",
    "/assets/img/1.Sharkie/2.Long_IDLE/I4.png",
    "/assets/img/1.Sharkie/2.Long_IDLE/I5.png",
    "/assets/img/1.Sharkie/2.Long_IDLE/I6.png",
    "/assets/img/1.Sharkie/2.Long_IDLE/I7.png",
    "/assets/img/1.Sharkie/2.Long_IDLE/I8.png",
    "/assets/img/1.Sharkie/2.Long_IDLE/I9.png",
    "/assets/img/1.Sharkie/2.Long_IDLE/I10.png",
    "/assets/img/1.Sharkie/2.Long_IDLE/I11.png",
    "/assets/img/1.Sharkie/2.Long_IDLE/I12.png",
    "/assets/img/1.Sharkie/2.Long_IDLE/I13.png",
    "/assets/img/1.Sharkie/2.Long_IDLE/I14.png",
  ];

  imagesDying = [
    "/assets/img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "/assets/img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "/assets/img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "/assets/img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "/assets/img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "/assets/img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "/assets/img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "/assets/img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "/assets/img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "/assets/img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "/assets/img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "/assets/img/1.Sharkie/6.dead/1.Poisoned/12.png",
   
  ];

  imagesElectrifying = [
    '/assets/img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
    '/assets/img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
    '/assets/img/1.Sharkie/5.Hurt/2.Electric shock/3.png',
  ];

  imagesDead = [
    "/assets/img/1.Sharkie/6.dead/1.Poisoned/12.png",
    "/assets/img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "/assets/img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "/assets/img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "/assets/img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];

  imagesPoisoning = [
    "/assets/img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "/assets/img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "/assets/img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "/assets/img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
    "/assets/img/1.Sharkie/5.Hurt/1.Poisoned/5.png",
  ];

  imagesShocking = [
    "/assets/img/1.Sharkie/5.Hurt/2.Electric shock/1.png",
    "/assets/img/1.Sharkie/5.Hurt/2.Electric shock/2.png",
    "/assets/img/1.Sharkie/5.Hurt/2.Electric shock/3.png",
  ];

  imagesBubbleAttacking = [
    "/assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png",
    "/assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
    "/assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png",
    "/assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
    "/assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png",
    "/assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",
    "/assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png",
    "/assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png",
  ];

  world;
  speed = 10;
  swimmingSounds = new Audio("/assets/sounds/fish-in-river-6114.mp3");
  bubbleSounds = new Audio ("/assets/sounds/sfx_submerge-14424.mp3");
  finSlapSound = new Audio("/assets/sounds/indiana-jones-style-punchwav-14551.mp3");
  enemyPopSound = new Audio ("/assets/sounds/balloonpop-83760.mp3");
  shockedSound = new Audio ("/assets/sounds/electric_zap_001-6374.mp3");
  isShooting = false;
  isShocked = false;
  isPoisoned = false;
  isCollidingWith = [];
  poisonAmmunition = 0;
  coins = 0;
  deathIntervall = 0;
  movementIntervall = 0;

  constructor() {
    super().loadImage("/assets/img/1.Sharkie/3.Swim/1.png");
    this.loadingAllImages(); 
    this.offsetTop =  100; // 100
    this.offsetBottom = 90; // 150 
    this.offsetRight = 40; // 100
    this.offsetleft = 20; // 50
    this.x = 50;
    this.animate();
  }

  animate() {
    setStoppableInterval(this.swimAnimation.bind(this), 1000/45);
    setStoppableInterval(this.actionAnimation.bind(this), 1000/7);
  }

  swimAnimation() {
    this.swimmingSounds.pause();
    this.swimming();
    this.world.cameraX = -this.x + 100;
  }

  actionAnimation () {
    // if dead is need , function is not async, functions are not waiting
    if (this.isDead()) this.dying();
    if (this.isAttacking || this.isShooting) this.attacking();
    if (!this.isDead() && !this.isShooting && !this.isAttacking)
      this.moving();
  }

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
  resetVerticalAlignment () {
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
    }
    if (this.deathIntervall <= 11) {
      if(this.deathIntervall == 0) this.currentImage = 0;
      this.playAnimation(this.imagesDying);
      this.deathIntervall++;
      // stop game i > 11
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
      if (this.currentImage >= 8) 
        this.rangeAttack();
    }
    if (this.isAttacking) {
      this.increaseAttackRange();
      this.playAnimation(this.imagesFinAttacking);
      this.finSlapSound.play();
      if (this.currentImage >= 8) {
        this.killByCollision();
        this.enemyPopSound.play();
        this.disengage();
      }
    }
  }

  /**
   *   checkingEnemyCollision() in the world class are prequel functions
   * 
   */
  killByCollision(){
    if(this.isCollidingWith.length > 0) 
      this.isCollidingWith[0].eliminated();
  } 

/**
 *  Wrapper function to disengage the hero. Attacking flag will be set back. Attack range will be set to normal collision range. Last element in Array with collided objects will be deleted.
 * 
 */
  disengage() {
    this.currentImage = 0;
    this.isAttacking = false;
    this.decreaseAttackRange();
    this.isCollidingWith.shift();
  }

  /**
   *  Functions checks bubble variations according to the closest enemy. Endboss (poison) or normal enemy (normal bubble). 
   * 
   */
  rangeAttack() {
    this.currentImage = 0;
    if (this.isEndbossNear() && this.poisonAmmunition > 0)
      this.throwingBubble(true);
      this.world.changePoisonStatusbar();
    if (!this.isEndbossNear())
      this.throwingBubble(false);
    this.isShooting = false;
  }

  isEndbossNear() {
    return (this.world.level.enemies[5].x - this.x < 500)
  }

  /**
   * Function controlls the moving animation state of the hero
   *
   */
  moving() {
      if (this.movementIntervall>= 54) {
        this.playAnimation(this.imagesSleeping);
      }
      if (this.movementIntervall < 54) {
        this.playAnimation(this.imagesWaiting);
        this.movementIntervall++;
      }
      if (this.isHurt()) {
        this.movementIntervall= 0;
        if (this.isShocked) {
          this.playAnimation(this.imagesElectrifying);
          this.shockedSound.play();
          this.isShocked = false;
          return ;
        }
        else {
          this.playAnimation(this.imagesPoisoning);
        } 
      }
      if (this.isMoving()) {
        this.playAnimation(this.imagesWalking);
        this.movementIntervall = 0;
      }
    return
  }

  moveRight() {
    if(this.isDead()) return false;
    this.x += this.speed;
    this.otherDirection = false;
    this.downwards = false;
    this.upwards = false;
    this.swimmingSounds.play();
  }

  moveLeft() {
    if(this.isDead()) return false;
    this.x -= this.speed;
    this.otherDirection = true;
    this.downwards = false;
    this.upwards = false;
    this.swimmingSounds.play();
  }

  moveUp() {
    if(this.isDead()) return false;
    this.upwards = true;
    this.downwards = false;
    this.y -= this.speed;
    this.swimmingSounds.play();
  }

  moveDown() {
    if(this.isDead()) return false;
    this.downwards = true;
    this.upwards = false;
    this.y += this.speed;
    this.swimmingSounds.play();
  }

  isMoving() {
    return this.world.keyboard.right || this.world.keyboard.left;
  }

  canHeroMoveLeft() {
    return this.world.keyboard.left && this.x > 0;
  }

  canHeroMoveRight() {
    return this.world.keyboard.right && this.x < this.world.level.levelEndX;
  }

  canHeroMoveUp() {
    return this.world.keyboard.up && this.y > -100;
  }

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
    let bubble = new ThrowableObject(this.x + this.width - 50, this.y + 120, poison, this.otherDirection);
    if (poison)
      this.changeAmmunitionAmount(false, true);
    this.world.throwableObjects.push(bubble);
    this.bubbleSounds.play();
  }

  increaseAttackRange(){
    this.offsetRight = -40;
    this.offsetleft = 20;
  }

  decreaseAttackRange(){
    this.offsetRight = 40;
    this.offsetleft = 20;
  }

  /**
   * Function increases or decreases the ammount of poison bubbles of the hero object.
   * 
   * @param {boolean} increase 
   * @param {boolean} decrease 
   * @returns 
   */
  changeAmmunitionAmount(increase, decrease) {
    if(increase == null || decrease == null) return;
    // baseAmount = this.world.level.bottles.length
    if (increase)
      this.poisonAmmunition += 30;
    if (decrease)
      this.poisonAmmunition -= 30;
  }


  /**
   * Function buffers all image arrays for animation in the constructor.
   * 
   */
  loadingAllImages() {
    this.loadImages(this.imagesWalking);
    this.loadImages(this.imagesWaiting);
    this.loadImages(this.imagesFinAttacking);
    this.loadImages(this.imagesBubbleAttacking);
    this.loadImages(this.imagesSleeping);
    this.loadImages(this.imagesPoisoning);
    this.loadImages(this.imagesShocking);
    this.loadImages(this.imagesDying);
    this.loadImages(this.imagesDead);
    this.loadImages(this.imagesElectrifying);
  }
}
