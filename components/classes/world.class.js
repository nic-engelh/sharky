class World {
  canvas;
  ctx;
  hero = new Hero();
  enemies = [new Pufferfish(), new Pufferfish(), new Pufferfish()];
  light = new Light();
  backgrounds = [
    new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D1.png'),
  ];

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addToMap(this.hero);

    //this.addToMap(this.light);

    this.addObjectsToMaps(this.enemies);
    
    this.addObjectsToMaps(this.backgrounds);
   
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
