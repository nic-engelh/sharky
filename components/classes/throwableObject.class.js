class ThrowableObject extends MovableObject {

  constructor(x, y) {
    super().loadImage("/assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
    this.width = 40;
    this.height = 40;
    this.y = y;
    this.x = x;
    this.speedX = 5;
    this.acceleration = 0.05;
    this.offSetTop = 0;
    this.offsetBottom = 0;
    this.offsetRight = 0;
    this.offsetleft = 0;
    this.throw();
  }

  throw() {
    this.speedY = 0.01;
    setInterval(() => {
      this.x += this.speedX;
      this.y -= this.speedY;
      this.speedY += this.acceleration;
      this.speedX -= this.acceleration;
    }, 1000 / 40);
  }


}
