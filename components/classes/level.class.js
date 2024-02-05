class Level {
    enemies;
    backgrounds;
    levelEndX = 2200;

    constructor (enemies, backgroundObjects) {
        this.enemies = enemies;
        this.backgrounds = backgroundObjects;
    }
}