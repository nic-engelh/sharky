class World {
    hero = new Hero();
    enemies = [
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish()
    ];
    canvas;
    ctx;
    constructor (canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);

        this.ctx.drawImage(this.hero.image, this.hero.x, this.hero.y, this.hero.width, this.hero.height);

        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.image, enemy.x, enemy.y, enemy.width, enemy.height);
        });

        self = this;
        requestAnimationFrame( function () {
            self.draw();
        });
    }
}