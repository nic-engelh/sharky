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

    imagesSleeping = [
        '/assets/img/1.Sharkie/2.Long_IDLE/i1.png',
        '/assets/img/1.Sharkie/2.Long_IDLE/i2.png',
        '/assets/img/1.Sharkie/2.Long_IDLE/i3.png',
        '/assets/img/1.Sharkie/2.Long_IDLE/i4.png',
        '/assets/img/1.Sharkie/2.Long_IDLE/i5.png',
        '/assets/img/1.Sharkie/2.Long_IDLE/i6.png',
        '/assets/img/1.Sharkie/2.Long_IDLE/i7.png',
        '/assets/img/1.Sharkie/2.Long_IDLE/i8.png',
        '/assets/img/1.Sharkie/2.Long_IDLE/i9.png',
        '/assets/img/1.Sharkie/2.Long_IDLE/i10.png',
        '/assets/img/1.Sharkie/2.Long_IDLE/i11.png',
        '/assets/img/1.Sharkie/2.Long_IDLE/i12.png',
        '/assets/img/1.Sharkie/2.Long_IDLE/i13.png',
        '/assets/img/1.Sharkie/2.Long_IDLE/i14.png'
    ];

    imagesDying = [
        '/assets/img/1.Sharkie/6.dead/1.Poisoned/1.png',
        '/assets/img/1.Sharkie/6.dead/1.Poisoned/2.png',
        '/assets/img/1.Sharkie/6.dead/1.Poisoned/3.png',
        '/assets/img/1.Sharkie/6.dead/1.Poisoned/4.png',
        '/assets/img/1.Sharkie/6.dead/1.Poisoned/5.png',
        '/assets/img/1.Sharkie/6.dead/1.Poisoned/6.png',
        '/assets/img/1.Sharkie/6.dead/1.Poisoned/7.png',
        '/assets/img/1.Sharkie/6.dead/1.Poisoned/8.png',
        '/assets/img/1.Sharkie/6.dead/1.Poisoned/9.png',
        '/assets/img/1.Sharkie/6.dead/1.Poisoned/10.png',
        '/assets/img/1.Sharkie/6.dead/1.Poisoned/11.png',
        '/assets/img/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];

    imagesPoisoning = [
        '/assets/img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        '/assets/img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        '/assets/img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        '/assets/img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        '/assets/img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
    ];

    imagesShocking = [
        '/assets/img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        '/assets/img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        '/assets/img/1.Sharkie/5.Hurt/2.Electric shock/3.png',
    ];

    world;
    speed = 10;
    swimmingSounds = new Audio('assets/sounds/Undwater_Backgroundsounds.mp3');

    constructor () {
        super().loadImage('/assets/img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesWaiting);
        this.loadImages(this.imagesFinAttacking);
        this.loadImages(this.imagesSleeping);
        this.loadImages(this.imagesPoisoning);
        this.loadImages(this.imagesShocking);
        this.loadImages(this.imagesDying);
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

            if (this.world.keyboard.up && this.y > -100) {
                this.y -= this.speed;
            }

            if (this.world.keyboard.down && this.y < 300) {
                this.y += this.speed;
            }

            this.world.cameraX = - this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.imagesWaiting);

            if (this.isDead()) {
                console.log('dead')
                this.playAnimation(this.imagesDying);
            }

            if (this.isHurt()){
                console.log('hurt')
                this.playAnimation(this.imagesPoisoning);
            }

            if (this.world.keyboard.right || this.world.keyboard.left ) {
               this.playAnimation(this.imagesWalking);
            }
        }, 200); 

    }

    jump () {
        return true
    }
}