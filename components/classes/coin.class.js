class Coin extends MovableObject  {

    imagesMoving = [
        '/assets/img/4. Marcadores/1. Coins/1.png',
        '/assets/img/4. Marcadores/1. Coins/2.png',
        '/assets/img/4. Marcadores/1. Coins/3.png',
        '/assets/img/4. Marcadores/1. Coins/4.png',
    ];

    constructor () {
        super().loadImage('/assets/img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.imagesMoving);
        this.x = 500 + Math.random() * 2000;
        this.y = 300 - Math.random() * 300;
        this.height = 63;
        this.width = 69;
        this.offSetTop = 0;
        this.offsetBottom = 0;
        this.offsetRight = 0;
        this.offsetleft = 0;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.imagesMoving);
        }, 200); 
    }


}