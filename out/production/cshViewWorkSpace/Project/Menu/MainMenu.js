import Menu from "./menu";
export default  class MainMenu extends Menu{
  constructor(backgroundImage, ctx) {
    super(backgroundImage, ctx);
    this.backgroundImageElement = new Image();
    this.backgroundImageElement.src = backgroundImage;
  }

  drawBackground() {
    this.backgroundImageElement.onload = () => {
      this.ctx.drawImage(this.backgroundImageElement, 0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
  }
}


