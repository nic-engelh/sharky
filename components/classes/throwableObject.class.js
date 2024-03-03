class ThrowableObject extends MovableObject {

  constructor(x, y, poison) {
    super();
    if (poison) 
      this.loadImage("/assets/img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png");
    if (!poison)
      this.loadImage("/assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
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
    setStoppableInterval(this.floatingUpwards.bind(this), 1000/20);
  }
  
  changeImage() {
    this.loadImage('/assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png');
  } 

}
