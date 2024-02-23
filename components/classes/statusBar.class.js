class StatusBar extends DrawableObject {

    imagesHealth = [
        '/assets/img/4. Marcadores/green/Life/0_  copia 3.png',
        '/assets/img/4. Marcadores/green/Life/20_ copia 4.png',
        '/assets/img/4. Marcadores/green/Life/40_  copia 3.png',
        '/assets/img/4. Marcadores/green/Life/60_  copia 3.png',
        '/assets/img/4. Marcadores/green/Life/80_  copia 3.png',
        '/assets/img/4. Marcadores/green/Life/100_  copia 2.png',
    ];

    imagesCoin = [
        'assets/img/4. Marcadores/green/Coin/0_  copia 4.png',
        'assets/img/4. Marcadores/green/Coin/20_  copia 2.png',
        'assets/img/4. Marcadores/green/Coin/40_  copia 4.png',
        'assets/img/4. Marcadores/green/Coin/60_  copia 4.png',
        'assets/img/4. Marcadores/green/Coin/80_  copia 4.png',
        'assets/img/4. Marcadores/green/Coin/100_  copia 4.png',
    ];

    imagesPoison = [
        '/assets/img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png',
        '/assets/img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png',
        '/assets/img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png',
        '/assets/img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png',
        '/assets/img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png',
        '/assets/img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png',
    ];

    percentage = 100;

    constructor(type) {
        if(type == "health") {
            super().loadImage('/assets/img/4. Marcadores/green/Life/100_  copia 2.png');
            this.loadImages(this.imagesHealth);
            this.x = 30;
            this.y = 0;
            this.setPercentage(100, this.imagesHealth);
        }
        if(type == "poison") {
            super().loadImage('/assets/img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png');
            this.loadImages(this.imagesPoison);
            this.x = 30;
            this.y = -30;
            this.setPercentage(0, this.imagesPoison);
        }
        if(type == "coin") {
            super().loadImage('/assets/img/4. Marcadores/green/Coin/0_  copia 4.png');
            this.loadImages(this.imagesCoin);
            this.x = 30;
            this.y = -60;
            this.setPercentage(0, this.imagesCoin);
        }
        this.height = 60;
        this.width= 200;
        this.offSetTop = 0;
        this.offsetBottom = 0;
        this.offsetRight = 0;
        this.offsetleft = 0;
    } 

    setPercentage (percentage, images) {
        this.percentage = percentage; 
        let path = images[this.resolveImageIndex()];
        this.image = this.imageCache.get(path);
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