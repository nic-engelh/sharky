class Jellyfish extends MovableObject {
    
    imagesSwimming = [
        '/assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        '/assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        '/assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        '/assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
    ];

    imagesAttacking = [
        '/assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 1.png',
        '/assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 2.png',
        '/assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 3.png',
        '/assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 4.png'
    ];
    
    
    constructor () {
        super().loadImage('/assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
        this.loadImages(this.imagesSwimming);
        this.x = 1500 + Math.random() * 500;
        this.y = 300 - Math.random() * 300;
        this.height = 300;
        this.width = 211;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        this.moveLeft();

        setInterval(() => {
            this.playAnimation(this.imagesWalking);
        }, 200); 
    }

    
}