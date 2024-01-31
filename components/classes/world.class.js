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
        this.ctx.drawImage(this.hero.img, this.hero.x, this.hero.y, this.hero.height, this.hero.width);
    }
}