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

  height = 520;
  width = 608;
  world;
  hadFirstHeroContact = false;
  attackIndex = 0;
  isHit = false;
  deathCounter = 0;

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
    this.offSetTop = 400;
    // Setting the bottom collision line slightly higher
    this.offsetBottom = -100;
    this.offsetRight = 0;
    this.offsetleft = 0;
    this.animate();
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
    i++;
    if (i > 10) {
      this.hadFirstHeroContact = true;
    }
    return i;
  }

  attacking() {
    this.offsetleft = 0;
    this.x = 2100; 
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
        if(this.currentImage >= 13) {
          // angriff evtl erst bei i modulo (13*2)
          this.isAttacking = true;
        }
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
      return
    }
    this.playAnimation(this.imagesDying);
    this.deathCounter++;
  }

  reduceEnergy () {
    this.energy -= 35;
  }
}
