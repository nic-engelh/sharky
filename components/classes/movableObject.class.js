class MovableObject {
    x = 120;
    y = 200;
    height = 245;
    width = 300;
    speed = 0.15;
    image;
    imageCache = new Map();
    currentImage = 0;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;

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
        setInterval(() => {
            this.x += this.speed;
         }, 1000/60);
    };
    moveLeft() {
        setInterval(() => {
           this.x -= this.speed;
        }, 1000/60);
    }

    playAnimation (images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.image = this.imageCache.get(path);
        this.currentImage++;
    }

    applyGravity () {
        setInterval(() => {
            if (isAboveGround){
            this.y -= this.speedY;
            this.speedY -= this.acceleration; 
        }
        }, 1000 / 25);
    }

    isAboveGround () {
        return this.y < 180;
    }

}
