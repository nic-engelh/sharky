class Hero extends MovableObject {
    imagesWalking = [
        '/assets/img/1.Sharkie/3.Swim/1.png',
        '/assets/img/1.Sharkie/3.Swim/2.png',
        '/assets/img/1.Sharkie/3.Swim/3.png',
        '/assets/img/1.Sharkie/3.Swim/4.png',
        '/assets/img/1.Sharkie/3.Swim/5.png',
        '/assets/img/1.Sharkie/3.Swim/6.png'
    ]
    world;

    constructor () {
        super().loadImage('/assets/img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.imagesWalking);
        this.animate();
    }

    animate() {
        setInterval(() => {

            if (this.world.keyboard.right) {
                let i = this.currentImage % this.imagesWalking.length;
                let path = this.imagesWalking[i];
                this.image = this.imageCache.get(path);
                this.currentImage++;
            }
        }, 200); 
    }

    jump () {
        return true
    }
}