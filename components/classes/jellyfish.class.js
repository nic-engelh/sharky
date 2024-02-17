class Jellyfish extends MovableObject {
    
    imagesWalking = [
        '/assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        '/assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        '/assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        '/assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
    ];

    imagesAttacking = [
        '/assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 1.png',
        '/assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 2.png',
        '/assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 3.png',
        '/assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 4.png',
    ];

    imagesBubbled = [
        '/assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
        '/assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
        '/assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
        '/assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png',
    ];
    
    
    constructor () {
        super().loadImage('/assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
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
        this.offsetTop = 0;
        this.offsetBottom = 0;
        this.offsetRight = 0;
        this.offsetleft = 0;
        this.animate();
    }

    animate() {
        this.currentImage = 0;
        // überprüfe ob held in der nähe ist
        // wenn held in der nähe dann shock modus
        // sonst normaler modus
        
        if(!this.isDead()){
            this.moveLeft();
        }
        setInterval(() => {
            console.log(this.heroIsClose);
            if (this.isDead()) {
                this.playAnimation(this.imagesBubbled);
                this.floatingUpwards();
            } else if (this.heroIsClose){
                this.transform();
            } else if (!this.isDead() && !this.heroIsClose) {
                this.playAnimation(this.imagesWalking);
            }
        }, 200); 
    }

    transform() {
        this.playAnimation(this.imagesAttacking);
    }
}