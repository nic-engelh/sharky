class World {
  canvas;
  ctx;
  hero = new Hero();
  enemies = [new Pufferfish(), new Pufferfish(), new Pufferfish()];
  light = new Light();
  backgrounds = [
    new BackgroundObject("/assets/img/3. Background/Layers/2. Floor/D1.png"),
  ];

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addToMap(this.hero);

    this.addToMap(this.light);

    this.enemies.forEach((enemy) => {
      this.addToMap(enemy);
    });

    this.backgrounds.forEach((backgroundObject) =>{
        this.addToMap(backgroundObject);
    } )

    self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addToMap(movableObject) {
    this.ctx.drawImage(
      movableObject.image,
      movableObject.x,
      movableObject.y,
      movableObject.width,
      movableObject.heigth
    );
  }
}
