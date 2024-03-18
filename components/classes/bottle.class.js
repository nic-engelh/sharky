class Bottle extends MovableObject {
  imagesMoving = [
    "/assets/img/4. Marcadores/Posion/Animada/1.png",
    "/assets/img/4. Marcadores/Posion/Animada/2.png",
    "/assets/img/4. Marcadores/Posion/Animada/3.png",
    "/assets/img/4. Marcadores/Posion/Animada/4.png",
    "/assets/img/4. Marcadores/Posion/Animada/5.png",
    "/assets/img/4. Marcadores/Posion/Animada/6.png",
    "/assets/img/4. Marcadores/Posion/Animada/7.png",
    "/assets/img/4. Marcadores/Posion/Animada/8.png",
  ];

  constructor() {
    super().loadImage("/assets/img/4. Marcadores/Posion/Animada/1.png");
    this.loadImages(this.imagesMoving);
    this.x = 400 + Math.random() * 2000;
    this.y = 300 - Math.random() * 300;
    this.height = 90;
    this.width = 60;
    this.offsetTop = 0;
    this.offsetBottom = 0;
    this.offsetRight = 0;
    this.offsetleft = 0;
    this.animate();
  }

  /**
   * Function activates a intervall. It will animate the bottle object.
   * 
   */
  animate() {
    setStoppableInterval(this.moveAnimation.bind(this) , 200);
  } 

  /**
   * Function moves the bottle object.
   * 
   */
  moveAnimation () {
    this.playAnimation(this.imagesMoving);
  }

}
