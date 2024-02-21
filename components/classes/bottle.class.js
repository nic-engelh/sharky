class Bottle extends MovableObjects {

    imagesMoving = [
        '/assets/img/4. Marcadores/Posiขn/Animada/1.png',
        '/assets/img/4. Marcadores/Posiขn/Animada/2.png',
        '/assets/img/4. Marcadores/Posiขn/Animada/3.png',
        '/assets/img/4. Marcadores/Posiขn/Animada/4.png',
        '/assets/img/4. Marcadores/Posiขn/Animada/5.png',
        '/assets/img/4. Marcadores/Posiขn/Animada/6.png',
        '/assets/img/4. Marcadores/Posiขn/Animada/7.png',
        '/assets/img/4. Marcadores/Posiขn/Animada/8.png',
    ];
    constructor () {
        super().loadImage('/assets/img/4. Marcadores/Posiขn/Animada/1.png');
        this.loadImages(this.imagesMoving);
        this.width = 90;
        this.heigt = 120;
        this.x = 500 + Math.random() * 2000;
        this.y = 300 - Math.random() * 300;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.imagesMoving);
        }, 200); 
    }

}