class Endboss extends MovableObject {
  imagesWalking = [
    "/assets/img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "/assets/img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "/assets/img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "/assets/img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "/assets/img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "/assets/img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "/assets/img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "/assets/img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "/assets/img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "/assets/img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "/assets/img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "/assets/img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "/assets/img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];

  imagesSpawing = [
    "/assets/img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "/assets/img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "/assets/img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "/assets/img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "/assets/img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "/assets/img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "/assets/img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "/assets/img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "/assets/img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
  ];

  imagesDying = [
    '/assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2.png',
    '/assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
    '/assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
    '/assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
    '/assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
  ];

  imagesDead = [
    '/assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
  ]

  imagesWounding = [
    '/assets/img/2.Enemy/3 Final Enemy/Hurt/1.png',
    '/assets/img/2.Enemy/3 Final Enemy/Hurt/2.png',
    '/assets/img/2.Enemy/3 Final Enemy/Hurt/3.png',
    '/assets/img/2.Enemy/3 Final Enemy/Hurt/1.png',
    '/assets/img/2.Enemy/3 Final Enemy/Hurt/2.png',
    '/assets/img/2.Enemy/3 Final Enemy/Hurt/3.png',
  ];

  imagesAttacking = [
    '/assets/img/2.Enemy/3 Final Enemy/Attack/1.png',
    '/assets/img/2.Enemy/3 Final Enemy/Attack/2.png',
    '/assets/img/2.Enemy/3 Final Enemy/Attack/3.png',
    '/assets/img/2.Enemy/3 Final Enemy/Attack/4.png',
    '/assets/img/2.Enemy/3 Final Enemy/Attack/5.png',
    '/assets/img/2.Enemy/3 Final Enemy/Attack/6.png',
  ];

  height = 460;
  width = 506;
  world;
  hadFirstHeroContact = false;
  attackIndex = 0;
  isHit = false;
  deathCounter = 0;
  introSound = new Audio("/assets/sounds/evil-laugh-45966.mp3");
  endbossMusic = new Audio("/assets/sounds/tribal-loop-azteca-154482.mp3");
  biteSounds = new Audio("/assets/sounds/monster-bite-44538.mp3");
  winSound = new Audio("/assets/sounds/you-win-sequence-2-183949.mp3");
  woundingSound = new Audio ("/assets/sounds/giant-breath-1-184041.mp3");

  constructor() {
    super().loadImage("assets/img/2.Enemy/3 Final Enemy/1.Introduce/1.png");
    this.loadImages(this.imagesWalking);
    this.loadImages(this.imagesSpawing);
    this.loadImages(this.imagesDying);
    this.loadImages(this.imagesAttacking);
    this.loadImages(this.imagesWounding);
    this.loadImages(this.imagesDead);
    this.x = 2300;
    this.y = -100; // base -150
    // Setting the collision top line lower
    this.offSetTop = 0;
    // Setting the bottom collision line slightly higher
    this.offsetBottom = 0;
    this.offsetRight = 0;
    this.offsetleft = 0;
    this.animate();
  }

  startBossAmbientMusic() {
    if (this.world.ambientBackgroundMusik.paused) return;
    this.world.ambientBackgroundMusik.pause();
    this.endbossMusic.play();
  }
   
  stopBossAmbientMusic() {
    this.world.ambientBackgroundMusik.pause();
    this.endbossMusic.pause();
  }

  isPlayingBossAmbientMusic () {
    return !this.endbossMusic.paused;
  }

  animate() {
    let i = 0;
    setInterval(() => {
      if (this.isHeroNear()) 
        i = this.spawningEndboss(i);
      if(this.isHit && !this.isDead()) 
        this.takingDamage();
      if(this.isDead())
        this.isDying();
      if(this.isAttacking && !this.isHit && !this.isHeroNear())
        this.attacking(); 
      if (this.isAttacking && this.attackIndex > 6 && !this.isHit)
        this.withdrawing();
      if (this.hadFirstHeroContact && !this.isAttacking && !this.isHit && !this.isDead()) {
        i = this.swimming(i);
        if (i % 20 === 0) this.luring();
      }
    }, 1000 / 7);
  }

  isHeroNear() {
    try { 
      return this.world.hero.x > 1900 && !this.hadFirstHeroContact;
    } catch (error) {
      return false;
    }
  }
  
  spawningEndboss(i) {
    this.playAnimation(this.imagesSpawing);
    this.introSound.play();
    this.startBossAmbientMusic();
    //? world.ambientMusik has to stop here
    
    i++;
    if (i > 10) {
      this.hadFirstHeroContact = true;
      this.introSound.pause();
    }
    return i;
  }

  attacking() {
    this.offsetleft = 0;
    this.x = 2100;
    this.biteSounds.play(); 
    this.playAnimation(this.imagesAttacking);
    this.attackIndex++;
  }

  withdrawing() {   
    this.isAttacking = false;
    this.offsetleft = 0;
    this.x = 2300;
    this.attackIndex = 0;
  }

  swimming(i) {
    this.playAnimation(this.imagesWalking);
      i++;
      if(this.currentImage >= 13) 
        this.isAttacking = true;
    return i
  }

  /**
   * function moves endboss randomly up and down. Range-Y: -250 to +50.
   * 
  */
  luring() {
    let topBorder = -250;
    let rangeY = 300;
    // 1500 + Math.random() * 500;
    this.y = topBorder + Math.random() * rangeY;
  }

  takingDamage() {
    this.playAnimation(this.imagesWounding);
    if(this.currentImage == 6) this.isHit = false;
  }

  isDying() {
    if (this.deathCounter > 9) {
      this.playAnimation(this.imagesDead);
      this.y -= 5;
      this.winSound.play();
      return
    }
    this.playAnimation(this.imagesDying);
    this.deathCounter++;
  }

  reduceEnergy () {
    this.woundingSound.play();
    this.energy -= 35;
  }
}
