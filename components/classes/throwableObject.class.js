class ThrowableObject extends MovableObject {
  speedX = 5;

  constructor() {
    super().loadImage('/assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
    this.width = 40;
    this.height= 40;
    this.x = 100;
    this.y = 100;
    this.throw(100, 150);
  }

  throw(x,y) {
        this.x = x;
        this.y = y;
        this.speedY = 30;

        setInterval(() => {
            this.x += this.speedX;
        }, 1000/20);
        
        
  }
}
