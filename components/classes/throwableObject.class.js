class ThrowableObject extends MovableObject {

  /**
   * constructor function
   * direction is a boolean value. Example: otherDirection == true = left.
   * 
   * @param {number} x 
   * @param {number} y 
   * @param {boolean} poison 
   * @param {boolean} direction 
   */
  constructor(x, y, poison, direction) {
    super();
    if (poison) 
      this.loadImage("/assets/img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png");
    if (!poison)
      this.loadImage("/assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
    this.width = 40;
    this.height = 40;
    if (direction) this.x =  ocean.hero.x;
    if(!direction) this.x = x;
    this.y = y;
    this.speedX = 5;
    this.acceleration = 0.05;
    this.offsetTop = 0;
    this.offsetBottom = 0;
    this.offsetRight = 0;
    this.offsetleft = 0;
    this.poisoned = poison;
    this.direction = direction;
    this.throw();
  }

  /**
   * functions sets the intervall for the bubble floating animation
   * 
   */
  throw() {
    this.speedY = 0.01;
    setStoppableInterval(()=> this.bubbleFloatingUpwards(this.direction), 1000/20);
  }
  
  /**
   * functions changes the image cache if the bubbel hits a jellyfish enemy object
   * 
   */
  changeImage() {
    this.loadImage('/assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png');
  } 

  /**
   * function controlls the x and y coordinates for the upwards floating or the shooting parabel
   * 
   * @param {boolean} left 
   */
  bubbleFloatingUpwards(left) {
    if (left) this.x -= this.speedX;
    if (!left) this.x += this.speedX;
    this.y -= this.speedY;
    this.speedY += this.acceleration;
    this.speedX -= this.acceleration;
  }

  /**
   * functions activates the delecte functions if the object is out of the canvas
   * 
   */
  deleteBubble(){
    if (this.y <= 0) 
      eraseObjectFromCanvas (ocean.throwableObjects, this)
  }
}
