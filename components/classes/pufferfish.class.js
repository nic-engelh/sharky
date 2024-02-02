class Pufferfish extends MovableObject {
    imagesWalking = [
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
    ]
   
    constructor () {
        super().loadImage('/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadImages(this.imagesWalking);
        this.x = 200 + Math.random() * 500;
       // this.y = 300 - Math.random() * 300;
        this.height = 100;
        this.width = 122;
        this.speed = 0.15 + Math.random * 0.25;
        this.animate();
        
    }

    animate() {
        this.moveLeft();

        setInterval(() => {
            let i = this.currentImage % this.imagesWalking.length;
            let path = this.imagesWalking[i];
            this.image = this.imageCache.get(path);
            this.currentImage++;
        }, 200); 
    }
}