class Endboss extends MovableObject {
  imagesWalking = [
    "./assets/img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "./assets/img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "./assets/img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "./assets/img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "./assets/img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "./assets/img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "./assets/img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "./assets/img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "./assets/img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "./assets/img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "./assets/img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "./assets/img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "./assets/img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];

  imagesSpawing = [
    "./assets/img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "./assets/img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "./assets/img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "./assets/img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "./assets/img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "./assets/img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "./assets/img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "./assets/img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "./assets/img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
  ];

  imagesDying = [
    "./assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2.png",
    "./assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
    "./assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
    "./assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
    "./assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
  ];

  imagesDead = [
    "./assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
  ];

  imagesWounding = [
    "./assets/img/2.Enemy/3 Final Enemy/Hurt/1.png",
    "./assets/img/2.Enemy/3 Final Enemy/Hurt/2.png",
    "./assets/img/2.Enemy/3 Final Enemy/Hurt/3.png",
    "./assets/img/2.Enemy/3 Final Enemy/Hurt/1.png",
    "./assets/img/2.Enemy/3 Final Enemy/Hurt/2.png",
    "./assets/img/2.Enemy/3 Final Enemy/Hurt/3.png",
  ];

  imagesAttacking = [
    "./assets/img/2.Enemy/3 Final Enemy/Attack/1.png",
    "./assets/img/2.Enemy/3 Final Enemy/Attack/2.png",
    "./assets/img/2.Enemy/3 Final Enemy/Attack/3.png",
    "./assets/img/2.Enemy/3 Final Enemy/Attack/4.png",
    "./assets/img/2.Enemy/3 Final Enemy/Attack/5.png",
    "./assets/img/2.Enemy/3 Final Enemy/Attack/6.png",
  ];

  moveCounter = 0;
  energy = 200;
  world;
  hadFirstHeroContact = false;
  attackIndex = 0;
  isHit = false;
  deathCounter = 0;

  constructor() {
    super().loadImage("./assets/img/2.Enemy/3 Final Enemy/1.Introduce/1.png");
    this.loadAllImages();
    this.x = 2300;
    this.y = -100;
    this.height = 400;
    this.width = 556;
    this.offsetTop = 180;
    this.offsetBottom = 80;
    this.offsetRight = 0;
    this.offsetleft = 30;
    this.run();
  }

  /**
   * Function loads all images from the path arrays into the cache.
   * 
   */
  loadAllImages() {
    const allImages = [
      this.imagesWalking,
      this.imagesSpawing,
      this.imagesDying,
      this.imagesAttacking,
      this.imagesWounding,
      this.imagesDead,
    ];
    allImages.forEach((element) => {
      this.loadImages(element);
    });
  }

  /**
   * functions sets animation intervall in motion
   *
   */
  run() {
    setStoppableInterval(this.animate.bind(this), 1000 / 7);
  }

  /**
   * functions controlls the different states and following animations of the endboss object
   *
   */
  animate() {
    if (this.isHeroNear()) this.spawningEndboss();
    if (this.isHit && !this.isDead()) this.takingDamage();
    if (this.isDead()) this.isDying();
    if (this.isAttacking && !this.isHit && !this.isHeroNear()) this.attacking();
    if (this.isAttacking && this.attackIndex > 6 && !this.isHit)
      this.withdrawing();
    if (
      this.hadFirstHeroContact &&
      !this.isAttacking &&
      !this.isHit &&
      !this.isDead()
    ) {
      this.swimming();
      if (this.moveCounter % 20 === 0) this.luring();
    }
  }

  /**
   * functions checks if the hero object has moved up to a certain point and if it has done it before or not
   *
   * @returns boolean
   */
  isHeroNear() {
    try {
      return this.world.hero.x > 1900 && !this.hadFirstHeroContact;
    } catch (error) {
      return false;
    }
  }

  /**
   * functions spawns the endboss and controlls the spawning animation and the music
   *
   * @returns
   */
  spawningEndboss() {
    this.playAnimation(this.imagesSpawing);
    this.world.worldAudioManager.playSound("introSound");
    this.world.worldAudioManager.playSound("ambientBoss");
    this.world.worldAudioManager.stopSound("ambient");
    this.moveCounter++;
    if (this.moveCounter > 10) {
      this.hadFirstHeroContact = true;
    }
    return;
  }

  /**
   * function lets the object do an attack movement and activates the movement and sound. It will raise the attack index to controll the overall animaiton flow.
   *
   */
  attacking() {
    this.x = this.x - 50;
    this.offsetleft = 0;
    this.world.worldAudioManager.playSound("biteSounds");
    this.playAnimation(this.imagesAttacking);
    this.attackIndex++;
  }

  /**
   * functions sets the endboss back to its base position after an attack
   *
   */
  withdrawing() {
    this.isAttacking = false;
    this.offsetleft = 30;
    this.x = this.x + 60;
    this.attackIndex = 0;
  }

  /**
   * function activates the animation for swimming and will activate the attack mode after certain movement repetitions
   *
   * @returns
   */
  swimming() {
    this.x = this.world.hero.x + 350 - this.speed;
    this.playAnimation(this.imagesWalking);
    this.moveCounter++;
    if (this.currentImage >= 13) this.isAttacking = true;
    return;
  }

  /**
   * function moves endboss randomly up and down. Range-Y: -250 to +50.
   *
   */
  luring() {
    this.y = this.world.hero.y - 50;
    let topBorder = 0;
    let rangeY = 200;
    //this.y = topBorder + Math.random() * rangeY;
  }

  /**
   * function activates the wounding animations and after six pictures it will put
   *
   */
  takingDamage() {
    this.playAnimation(this.imagesWounding);
    if (this.currentImage == 6) this.isHit = false;
  }

  /**
   * functions controlls dying and death animation variants and activtes the win sequenz if the endboss is defeated. To controll the dying animation it will raise the deathCounter.
   *
   * @returns
   */
  isDying() {
    if (this.deathCounter > 9) {
      this.playAnimation(this.imagesDead);
      this.y -= 5;
      this.world.worldAudioManager.playSound("winSound");
      this.world.isWon();
      return;
    }
    this.playAnimation(this.imagesDying);
    this.deathCounter++;
  }

  /**
   * unction reduces the endbosses energy by the amount of damage
   *
   * @param {number} damage
   */
  reduceEnergy(damage) {
    this.world.worldAudioManager.playSound("woundingSound");
    this.energy -= damage;
  }
}
