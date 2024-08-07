class Jellyfish extends MovableObject {
    
    imagesWalking = [
        'https://niklas-engelhardt.de/sharky/assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'https://niklas-engelhardt.de/sharky/assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'https://niklas-engelhardt.de/sharky/assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'https://niklas-engelhardt.de/sharky/assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
    ];

    imagesAttacking = [
        'https://niklas-engelhardt.de/sharky/assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 1.png',
        'https://niklas-engelhardt.de/sharky/assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 2.png',
        'https://niklas-engelhardt.de/sharky/assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 3.png',
        'https://niklas-engelhardt.de/sharky/assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 4.png',
    ];

    imagesBubbled = [
        'https://niklas-engelhardt.de/sharky/assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
        'https://niklas-engelhardt.de/sharky/assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
        'https://niklas-engelhardt.de/sharky/assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
        'https://niklas-engelhardt.de/sharky/assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png',
    ];


    constructor () {
        super().loadImage('https://niklas-engelhardt.de/sharky/assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesBubbled);
        this.loadImages(this.imagesAttacking);
        this.x = 1500 + Math.random() * 500;
        this.y = 300 - Math.random() * 300;
        this.height = 200;
        this.width = 140;
        this.speed = 0.15 + Math.random() * 0.25;
        this.speedY = this.speed;
        this.speedX = 5;
        this.heroIsClose;
        this.offsetTop = 30;
        this.offsetBottom = 30;
        this.offsetRight = 0;
        this.offsetleft = 0;
        this.animate();
    }

    /**
     * function initiates animation intervalls and movement of the object
     * 
     */
    animate() {
        this.currentImage = 0;
        if(!this.isDead()){
            this.moveLeft();
        }
        setStoppableInterval(this.actionAnimation.bind(this), 200);
    }

    /**
     * function changes appreance of the object 
     * 
     */
    transform() {
        this.isAggressive = true;
        this.playAnimation(this.imagesAttacking);
    }


    /**
     * function controlls the animation flow of the jellyfisch object
     *
     */
    actionAnimation(){
        if (this.isDead()) {
            this.playAnimation(this.imagesBubbled);
            this.floatingUpwards();
        } else if (this.heroIsClose){
            this.transform();
        } else if (!this.isDead() && !this.heroIsClose) {
            this.playAnimation(this.imagesWalking);
        }
    }
}


