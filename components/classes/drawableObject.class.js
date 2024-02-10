class DrawableObject {
    x = 120;
    y = 200;
    height = 245;
    width = 300;
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

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    if (
      this instanceof Hero ||
      this instanceof Jellyfish ||
      this instanceof Pufferfish ||
      this instanceof Endboss
    ) {
      ctx.beginPath();
      ctx.lineWidth = '5';
      ctx.strokeStyle = 'red';
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }
}
