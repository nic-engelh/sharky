class StatusBar extends DrawableObject {

    images = [
        '/assets/img/4. Marcadores/green/Life/0_  copia 3.png',
        '/assets/img/4. Marcadores/green/Life/20_  copia 4.png',
        '/assets/img/4. Marcadores/green/Life/40_  copia 3.png',
        '/assets/img/4. Marcadores/green/Life/60_  copia 3.png',
        '/assets/img/4. Marcadores/green/Life/80_  copia 3.png',
        '/assets/img/4. Marcadores/green/Life/100_  copia 2.png',
    ];

    percentage = 100;

    constructor() {
        super().loadImage('/assets/img/4. Marcadores/green/Life/100_  copia 2.png');
        this.loadImages(this.images);
        this.x = 100;
        this.y = 100;
        this.setPercentage(100);
    } 

    setPercentage (percentage) {
        this.percentage = percentage; 
        let path = this.image[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    resolveImageIndex() {
        if (this.percentage <= 20 && this.percentage > 0)
            return 1;
        if (this.percentage <= 40 && this.percentage > 20)
            return 2;
        if (this.percentage <= 60 && this.percentage > 40) 
            return 3;
        if (this.percentage <= 80 && this.percentage > 60) 
            return 4;
        if (this.percentage <= 100 && this.percentage > 80) 
            return 5;
        else 
            return 0;
    }
}