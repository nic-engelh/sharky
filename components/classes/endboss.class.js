class Endboss extends MovableObject {
    height = 520;
    width = 608;
    imagesWalking = [
        '/assets/img/2.Enemy/3 Final Enemy/2.floating/1.png',
        '/assets/img/2.Enemy/3 Final Enemy/2.floating/2.png',
        '/assets/img/2.Enemy/3 Final Enemy/2.floating/3.png',
        '/assets/img/2.Enemy/3 Final Enemy/2.floating/4.png',
        '/assets/img/2.Enemy/3 Final Enemy/2.floating/5.png',
        '/assets/img/2.Enemy/3 Final Enemy/2.floating/6.png',
        '/assets/img/2.Enemy/3 Final Enemy/2.floating/7.png',
        '/assets/img/2.Enemy/3 Final Enemy/2.floating/8.png',
        '/assets/img/2.Enemy/3 Final Enemy/2.floating/9.png',
        '/assets/img/2.Enemy/3 Final Enemy/2.floating/10.png',
        '/assets/img/2.Enemy/3 Final Enemy/2.floating/11.png',
        '/assets/img/2.Enemy/3 Final Enemy/2.floating/12.png',
        '/assets/img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ]

    constructor () {
        super().loadImage('/assets/img/2.Enemy/3 Final Enemy/2.floating/1.png');
        this.loadImages(this.imagesWalking);
        this.x = 2300;
        this.y = -150;
        //this.height = 520;
        //this.width = 608;
        this.animate();
    }

    animate () {
        setInterval(() => {
            this.playAnimation(this.imagesWalking);
        }, 200); 
    }
}