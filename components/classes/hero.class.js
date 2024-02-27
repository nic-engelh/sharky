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
  swimmingSounds = new Audio("assets/sounds/Undwater_Backgroundsounds.mp3");
  isShooting = false;
  isShocked = false;
  isPoisoned = false;
  isCollidingWith = [];
  poisonAmmunition = 0;
  coins = 0;

  constructor() {
    super().loadImage("/assets/img/1.Sharkie/3.Swim/1.png");
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
    this.offsetTop = 120;
    this.offsetBottom = 50;
    this.offsetRight = 50;
    this.offsetleft = 50;
    this.animate();
  }

  animate() {
    let i = 0;
    let j = 0;
    setInterval(() => {
      this.swimmingSounds.pause();
      this.swimming();
      this.world.cameraX = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      // if dead is need , function is not async, functions are not waiting
      if (this.isDead()) 
        i = this.dying(i);
      if (this.isAttacking || this.isShooting) 
        this.attacking();
      if (!this.isDead() && !this.isShooting && !this.isAttacking)
        j = this.moving(j);
    }, 1000 / 6);
  }

  swimming() {
    if (this.canHeroMoveRight()) this.moveRight();
    if (this.canHeroMoveLeft()) this.moveLeft();
    if (this.canHeroMoveUp()) this.moveUp();
    if (this.canHeroMoveDown()) this.moveDown();
  }

  dying(i) {
    if (i > 11) {
      this.playAnimation(this.imagesDead);
    }
    if (i <= 11) {
      if(i == 0) this.currentImage = 0;
      this.playAnimation(this.imagesDying);
      i++;
      // stop game i > 11
    }
    return i;
  }

  /**
   * The function controlls the attack animation of the hero. If the heros starts a shooting attack, the bubble attack animation will be activated. Afterwards the bubble will be created related to the last image of the animation.
   *
   */
  attacking() {
    if (this.isShooting) {
      this.playAnimation(this.imagesBubbleAttacking);
      if (this.currentImage >= 8) {
        this.rangeAttack();
      }
    }
    if (this.isAttacking) {
      this.increaseAttackRange();
      this.playAnimation(this.imagesFinAttacking);
      if (this.currentImage >= 8) {
        this.killByCollision();
        this.disengage();
      }
    }
  }

  killByCollision(){
    if(this.isCollidingWith.length > 0) 
      this.isCollidingWith[0].eliminated();
  } 

  disengage() {
    this.currentImage = 0;
    this.isAttacking = false;
    this.decreaseAttackRange();
    // deletes elements enemies from array and therefore from the canvas
    this.isCollidingWith.shift();
  }

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
  moving(j) {
      if (j >= 54) {
        this.playAnimation(this.imagesSleeping);
      }
      if (j < 54) {
        this.playAnimation(this.imagesWaiting);
        j++;
      }
      if (this.isHurt()) {
        j = 0;
        if (this.isShocked) {
          this.playAnimation(this.imagesElectrifying);
          return j;
        }
        else {
          this.playAnimation(this.imagesPoisoning);
        } 
      }
      if (this.isMoving()) {
        this.playAnimation(this.imagesWalking);
        j = 0;
      }
    return j;
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
  }

  moveDown() {
    if(this.isDead()) return false;
    this.downwards = true;
    this.upwards = false;
    this.y += this.speed;
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

  throwingBubble(poison) {
    if (poison == null) return;
    let bubble = new ThrowableObject(this.x + this.width - 100, this.y + 150, poison);
    if (poison)
      this.changeAmmunitionAmount(false, true);
    this.world.throwableObjects.push(bubble);
    // Timer for deleting bubble object from array
    setTimeout(() => {
      this.world.throwableObjects.shift();
    }, 15000);
  }

  increaseAttackRange(){
    this.offsetRight = -100;
    this.offsetleft = 0;
  }

  decreaseAttackRange(){
    this.offsetRight = 100;
    this.offsetleft = 0;
  }

  changeAmmunitionAmount(increase, decrease) {
    if(increase == null || decrease == null) return;
    // baseAmount = this.world.level.bottles.length
    if (increase)
      this.poisonAmmunition += 30;
    if (decrease)
      this.poisonAmmunition -= 30;
  }
}
