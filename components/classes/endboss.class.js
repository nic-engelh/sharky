class Endboss extends MovableObject {
    height = 520;
    width = 608;
    world;
    hadFirstHeroContact = false;

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

    imagesSpawing = [
        '/assets/img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        '/assets/img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        '/assets/img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        '/assets/img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        '/assets/img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        '/assets/img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        '/assets/img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        '/assets/img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        '/assets/img/2.Enemy/3 Final Enemy/1.Introduce/10.png', 
    ];


    constructor () {
        super().loadImage('assets/img/2.Enemy/3 Final Enemy/1.Introduce/1.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesSpawing);
        this.x = 2300;
        this.y = -150;
        //this.height = 520;
        //this.width = 608;
        this.animate();
    }

    animate () {
        let i = 0;

        setInterval(() => {
            if ( this.world.hero.x > 1900 && !this.hadFirstHeroContact) {
                this.playAnimation(this.imagesSpawing);
                i++;
                if ( i > 10) {
                    this.hadFirstHeroContact = true;
                }
            } if (this.hadFirstHeroContact) {
                this.playAnimation(this.imagesWalking);
            }
        }, 200);
    }

    
}