class World {
  keyboard;
  canvas;
  ctx;
  cameraX = 0;
  hero = new Hero();
  level = level1;
   
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
  }

  checkCollisions() {
    setInterval(() => {
      this.level.enemies.forEach((enemy)=> {
        if(this.hero.isColliding(enemy)) {
          console.log('Collision with Hero', enemy);
        }
      })
    }, 1000/30);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.cameraX, 0);

    this.addObjectsToMaps(this.level.backgrounds);

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
