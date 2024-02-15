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
    
    
    constructor () {
        super().loadImage('/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadImages(this.imagesWalking);
        this.x = 200 + Math.random() * 500;
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

        setInterval(() => {
            this.playAnimation(this.imagesWalking);
        }, 200); 
    }
}