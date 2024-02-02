class World {
  canvas;
  ctx;
  hero = new Hero();
  enemies = [new Pufferfish(), new Pufferfish(), new Pufferfish()];
  backgrounds = [
    new BackgroundObject('/assets/img/3. Background/Layers/5. Water/D1.png', 0, 0, 480, 720 ),
    new BackgroundObject('assets/img/3. Background/Layers/1. Light/1.png', 0, 0, 480, 720 ),
    new BackgroundObject('/assets/img/3. Background/Layers/4.Fondo 2/D1.png', 0, 80, 400, 720 ),
    new BackgroundObject('/assets/img/3. Background/Layers/3.Fondo 1/D1.png', 0, 80, 400, 720 ),
    new BackgroundObject('/assets/img/3. Background/Layers/2. Floor/D1.png', 0, 80, 400, 720 ),
  ];
   
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addObjectsToMaps(this.backgrounds);

    this.addToMap(this.hero);

    this.addObjectsToMaps(this.enemies);
    
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
    this.ctx.drawImage(
      movableObject.image,
      movableObject.x,
      movableObject.y,
      movableObject.width,
      movableObject.height
    );
  }
}
