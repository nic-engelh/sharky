class Level {
    enemies;
    backgrounds;
    levelEndX = 2100;

    constructor (enemies, backgroundObjects) {
        this.enemies = enemies;
        this.backgrounds = backgroundObjects;
    }
}