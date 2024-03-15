class DrawableObject {
    x = 120;
    y = 200;
    height = 205;
    width = 250;
    image;
    imageCache = new Map();
    currentImage = 0;
  
    loadImage(path) {
    this.image = new Image();
    this.image.src = path;
  }

  loadImages(images) {
    images.forEach((imagePath) => {
      let img = new Image();
      img.src = imagePath;
      this.imageCache.set(imagePath, img);
    });
  }

  resetCurrentImage(images) {
    if (this.currentImage > images.length) 
      this.currentImage = 0;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    if (
      this instanceof Hero ||
      this instanceof Jellyfish ||
      this instanceof Pufferfish ||
      this instanceof Endboss ||
      this instanceof Coin ||
      this instanceof Bottle ||
      this instanceof ThrowableObject
    ) {
      ctx.beginPath();
      ctx.lineWidth = '5';
      ctx.strokeStyle = 'red';
      ctx.rect((this.x + this.offsetleft), (this.y + this.offsetTop), (this.width - this.offsetRight), (this.height - this.offsetBottom));
      ctx.stroke();
    }
  }
}
