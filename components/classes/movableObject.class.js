class MovableObject {
    x = 120;
    y = 200;
    height = 100;
    width = 300;
    img;

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
