class World {
  keyboard;
  canvas;
  ctx;
  cameraX = -100;
  hero = new Hero();
  enemies = [new Pufferfish(), new Pufferfish(), new Pufferfish()];
  backgrounds = [
    new BackgroundObject('/assets/img/3. Background/Layers/5. Water/D1.png', 0, 0, 480, 720 ),
    new BackgroundObject('assets/img/3. Background/Layers/1. Light/1.png', 0, 0, 480, 720 ),
    new BackgroundObject('/assets/img/3. Background/Layers/4.Fondo 2/D1.png', 0, 80, 400, 720 ),
    new BackgroundObject('/assets/img/3. Background/Layers/3.Fondo 1/D1.png', 0, 80, 400, 720 ),
    new BackgroundObject('/assets/img/3. Background/Layers/2. Floor/D1.png', 0, 80, 400, 720 ),
  ];
   
  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.draw();
    this.keyboard = keyboard;
    this.setWorld();
  }

  setWorld() {
    this.hero.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.cameraX, 0);

    this.addObjectsToMaps(this.backgrounds);

    this.addToMap(this.hero);

    this.addObjectsToMaps(this.enemies);
    
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
    }
    this.ctx.drawImage(
      movableObject.image,
      movableObject.x,
      movableObject.y,
      movableObject.width,
      movableObject.height
    );
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
