class Hero extends MovableObject {
    currentImage = 0;
    imagesWalking = [
        '/assets/img/1.Sharkie/3.Swim/1.png',
        '/assets/img/1.Sharkie/3.Swim/2.png',
        '/assets/img/1.Sharkie/3.Swim/3.png',
        '/assets/img/1.Sharkie/3.Swim/4.png',
        '/assets/img/1.Sharkie/3.Swim/5.png',
        '/assets/img/1.Sharkie/3.Swim/6.png'
    ]

    constructor () {
        super().loadImage('/assets/img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.imagesWalking);
        this.animate();
    }

    animate() {
        setInterval(() => {
            let path = this.imagesWalking[this.currentImage];
            this.image = this.imageCache[path];
            this.currentImage++;
        }, 1000);
       
    }


    jump () {
        return true
    }
}