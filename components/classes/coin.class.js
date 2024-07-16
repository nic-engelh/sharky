class Coin extends MovableObject  {

    imagesMoving = [
        'https://niklas-engelhardt.de/sharky/assets/img/4. Marcadores/1. Coins/1.png',
        'https://niklas-engelhardt.de/sharky/assets/img/4. Marcadores/1. Coins/2.png',
        'https://niklas-engelhardt.de/sharky/assets/img/4. Marcadores/1. Coins/3.png',
        'https://niklas-engelhardt.de/sharky/assets/img/4. Marcadores/1. Coins/4.png',
    ];

    constructor () {
        super().loadImage('https://niklas-engelhardt.de/sharky/assets/img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.imagesMoving);
        this.x = 500 + Math.random() * 2000;
        this.y = 300 - Math.random() * 300;
        this.height = 53;
        this.width = 59;
        this.offsetTop = 0;
        this.offsetBottom = 0;
        this.offsetRight = 0;
        this.offsetleft = 0;
        this.animate();
    }

    /**
     * Function activates animation interval
     * 
     */
    animate() {
        setStoppableInterval(this.turnAnimation.bind(this), 200);
    }

    /**
     * function activates the animation in the drawable Object class to rotate the coin
     * 
     */
    turnAnimation () {
        this.playAnimation(this.imagesMoving);
    }


}