class MovableObject {
    x = 120;
    y = 200;
    height = 245;
    width = 300;
    image;
    imageCache = new Map();

    loadImage (path) {
        this.image = new Image();
        this.image.src = path;
    }

    loadImages (images) {
        images.forEach(imagePath => {
            let img = new Image();
            img.src = imagePath;
            this.imageCache.set(imagePath, img);
        });
    }

    moveRight(){
        return true
    };
    moveLeft() {
        return true
    }
}
