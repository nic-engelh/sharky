class Bottle extends MovableObject {

    imagesMoving = [
        '/assets/img/4. Marcadores/Posion/Animada/1.png',
        '/assets/img/4. Marcadores/Posion/Animada/2.png',
        '/assets/img/4. Marcadores/Posion/Animada/3.png',
        '/assets/img/4. Marcadores/Posion/Animada/4.png',
        '/assets/img/4. Marcadores/Posion/Animada/5.png',
        '/assets/img/4. Marcadores/Posion/Animada/6.png',
        '/assets/img/4. Marcadores/Posion/Animada/7.png',
        '/assets/img/4. Marcadores/Posion/Animada/8.png',
    ];
    
    constructor () {
        super().loadImage('/assets/img/4. Marcadores/Posion/Animada/1.png');
        this.loadImages(this.imagesMoving);
        this.width = 90;
        this.heigt = 120;
        this.x = 400 + Math.random() * 2000;
        this.y = 300 - Math.random() * 300;
        this.offSetTop = 0;
        this.offsetBottom = 0;
        this.offsetRight = 0;
        this.offsetleft = 0;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.imagesMoving);
        }, 200); 
    }

}