class Level {
    enemies;
    backgrounds;
    levelEndX = 2200;
    coins;

    constructor (enemies, coins, backgroundObjects) {
        this.enemies = enemies;
        this.coins = coins;
        this.backgrounds = backgroundObjects;
    }
}