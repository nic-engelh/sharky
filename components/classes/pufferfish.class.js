class Pufferfish extends MovableObject {
    imagesWalking = [
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png/3.Swim/1.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png/3.Swim/2.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png/3.Swim/3.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png/3.Swim/4.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png/3.Swim/5.png'
    ]

    constructor () {
        super().loadImage('/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.x = 200 + Math.random() * 500; 
        this.height = 100;
        this.width = 122;
        this.loadImages(this.imagesWalking);
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.imagesWalking.length;
            let path = this.imagesWalking[i];
            this.image = this.imageCache.get(path);
            this.currentImage++;
        }, 200); 
    }
}