class Hero extends MovableObject {
    imagesWalking = [
        '/assets/img/1.Sharkie/3.Swim/1.png',
        '/assets/img/1.Sharkie/3.Swim/2.png',
        '/assets/img/1.Sharkie/3.Swim/3.png',
        '/assets/img/1.Sharkie/3.Swim/4.png',
        '/assets/img/1.Sharkie/3.Swim/5.png',
        '/assets/img/1.Sharkie/3.Swim/6.png'
    ];

    imagesWaiting = [
        '/assets/img/1.Sharkie/1.IDLE/1.png',
        '/assets/img/1.Sharkie/1.IDLE/2.png',
        '/assets/img/1.Sharkie/1.IDLE/3.png',
        '/assets/img/1.Sharkie/1.IDLE/4.png',
        '/assets/img/1.Sharkie/1.IDLE/5.png',
        '/assets/img/1.Sharkie/1.IDLE/6.png',
        '/assets/img/1.Sharkie/1.IDLE/7.png',
        '/assets/img/1.Sharkie/1.IDLE/8.png',
        '/assets/img/1.Sharkie/1.IDLE/9.png',
        '/assets/img/1.Sharkie/1.IDLE/10.png',
        '/assets/img/1.Sharkie/1.IDLE/11.png',
        '/assets/img/1.Sharkie/1.IDLE/12.png',
        '/assets/img/1.Sharkie/1.IDLE/13.png',
        '/assets/img/1.Sharkie/1.IDLE/14.png',
        '/assets/img/1.Sharkie/1.IDLE/15.png',
        '/assets/img/1.Sharkie/1.IDLE/16.png',
        '/assets/img/1.Sharkie/1.IDLE/17.png',
        '/assets/img/1.Sharkie/1.IDLE/18.png'
    ];

    imagesFinAttacking = [
        '/assets/img/1.Sharkie/4.Attack/Fin slap/1.png',
        '/assets/img/1.Sharkie/4.Attack/Fin slap/2.png',
        '/assets/img/1.Sharkie/4.Attack/Fin slap/3.png',
        '/assets/img/1.Sharkie/4.Attack/Fin slap/4.png',
        '/assets/img/1.Sharkie/4.Attack/Fin slap/5.png',
        '/assets/img/1.Sharkie/4.Attack/Fin slap/6.png',
        '/assets/img/1.Sharkie/4.Attack/Fin slap/7.png',
        '/assets/img/1.Sharkie/4.Attack/Fin slap/8.png',
    ];


    world;
    speed = 10;
    swimmingSounds = new Audio('assets/sounds/Undwater_Backgroundsounds.mp3');

    constructor () {
        super().loadImage('/assets/img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.imagesWalking);
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.swimmingSounds.pause();
            if (this.world.keyboard.right && this.x < this.world.level.levelEndX) {
                this.x += this.speed ; 
                this.otherDirection = false;
                this.swimmingSounds.play(); 
            }

            if (this.world.keyboard.left && this.x > 0 ) {
                this.x -= this.speed ; 
                this.otherDirection = true; 
                this.swimmingSounds.play(); 
            }
            this.world.cameraX = - this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.right || this.world.keyboard.left ) {
               this.playAnimation(this.imagesWalking);
            }
        }, 200); 
    }

    jump () {
        return true
    }
}