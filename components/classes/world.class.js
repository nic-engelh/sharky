class World {
    hero = new Hero();
    enemies = [
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish()
    ];
    ctx;
    constructor (canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw(){
        this.ctx.clearReact(0,0, this.canvas.width, this.canvas.height);

        this.ctx.drawImage(this.hero.image, this.hero.x, this.hero.y, this.hero.width, this.hero.height);

        self = this;
        requestAnimationFrame( function () {
            self.draw();
        });
    }
}