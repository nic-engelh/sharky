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
   
  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.draw();
    this.keyboard = keyboard;
    this.setWorld();
    this.checkCollisions();
  }

  setWorld() {
    this.hero.world = this;
    this.level.enemies[5].world = this;
  }

  checkCollisions() {
    setInterval(() => {
      this.level.enemies.forEach((enemy)=> {
        console.log(this.hero.isColliding(enemy));
        if(this.hero.isColliding(enemy)) {
          console.log('Collision with Hero', enemy);
          // hero loses health
          this.hero.hit();
          this.healthStatusBar.setPercentage(this.hero.energy, this.healthStatusBar.imagesHealth);
          // hero shows animation of beening hit
        }
      });
      this.level.coins.forEach((coin)=> {
        // collision with coin
        // get coin
        // update coin status bar
        if (this.hero.isColliding(coin)) {
          // update coin status bar
          this.coinStatusBar.setPercentage(10, this.coinStatusBar.imagesCoin);

        }
        return true
      })
    }, 1000/10);

  
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.cameraX, 0);

    this.addObjectsToMaps(this.level.backgrounds);

    // fixed objects with reseting coordination system
    this.ctx.translate( - this.cameraX, 0);
    this.addToMap(this.statusBar);
    this.ctx.translate(this.cameraX, 0);
    
    // movable objects
    this.addToMap(this.hero);

    this.addObjectsToMaps(this.level.coins);

    this.addObjectsToMaps(this.level.enemies);
    
    this.ctx.translate( - this.cameraX, 0);

    self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMaps(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  addToMap(movableObject) {

    if(movableObject.otherDirection){
      this.flipImage(movableObject);
    };
    movableObject.draw(this.ctx);
    movableObject.drawFrame(this.ctx);
   
    if (movableObject.otherDirection) {
      this.resetFlipImage(movableObject);
    }
  }

  flipImage(movableObject){
    this.ctx.save();
    this.ctx.translate(movableObject.width, 0);
    this.ctx.scale(-1,1);
    movableObject.x = movableObject.x * -1; 
  }
  
  resetFlipImage(movableObject) {
    movableObject.x = movableObject.x * -1; 
    this.ctx.restore();
  }

}
