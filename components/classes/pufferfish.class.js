class Pufferfish extends MovableObject {
    imagesWalking = [
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
    ];

    imagesBubbleSwimming = [
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png',
    ];

    imagesBubbling = [
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png'
    ];

    imagesDead = [
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.2.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png',
        '/assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png',
    ];

    constructor () {
        super().loadImage('/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesBubbling);
        this.loadImages(this.imagesBubbleSwimming);
        this.loadImages(this.imagesDead);
        this.x = 400 + Math.random() * 500;
        this.y = 300 - Math.random() * 300;
        this.height = 100;
        this.width = 122;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
        this.offsetTop = 0;
        this.offsetBottom = 0;
        this.offsetRight = 0;
        this.offsetleft = 0;
    }

    animate() {
        this.moveLeft();
        setStoppableInterval(this.actionAnimation.bind(this),200);
    }

    actionAnimation() {
        if (this.heroIsClose) {
            if (!this.isAggressive) this.getsBigger();
            this.isAggressive = true;
            this.playAnimation(this.imagesBubbling);
        }
        if (this.isAggressive)
            this.playAnimation(this.imagesBubbleSwimming);
        if (!this.isAggressive)
            this.playAnimation(this.imagesWalking);
        if (this.isDead()) {
            this.playAnimation(this.imagesDead);
            this.y -= 10; 
        }
    }

    /**
     * Enemy transform into bigger version. Function inceases collision radius of the enemy object.
     * 
     */
    getsBigger() {
        ocean.worldAudioManager.playSound("transform");
        this.offsetTop = 0;
        this.offsetBottom = 0;
        this.offsetRight = 0;
        this.offsetleft = 0;
    }
}