class MovableObject {
    x = 120;
    y = 400;
    img;

    constructor () {

    }
    loadImage (path) {
        this.image = new Image();
        this.image.src = path;
    }
    moveRight(){
        return true
    };
    moveLeft() {
        return true
    }
}
