class World {
    ctx;
    constructor () {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    hero = new Hero();
    enemies = [
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish()
    ];
    
    draw() {
        this.ctx.drawImage(this.hero.img, this.hero.x, this.hero.y, 100, 100 );
        return true
    };
}