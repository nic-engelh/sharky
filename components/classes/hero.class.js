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