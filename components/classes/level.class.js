class Level {
    enemies;
    backgrounds;
    bottles;
    levelEndX = 2200;
    coins;

    constructor (enemies, coins, bottles, backgroundObjects) {
        this.enemies = enemies;
        this.coins = coins;
        this.bottles = bottles;
        this.backgrounds = backgroundObjects;
    }
}