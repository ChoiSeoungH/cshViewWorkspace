export default class Menu {
  constructor(backgroundImage,ctx) {
    this.backgroundImage = backgroundImage;
    this.ctx = ctx;
  }
}

// class MainMenu extends Menu {
//   constructor(backgroundImage, ctx) {
//     super(backgroundImage, ctx);
//     this.backgroundImageElement = new Image();
//     this.backgroundImageElement.src = backgroundImage;
//   }
//
//   drawBackground() {
//     this.backgroundImageElement.onload = () => {
//       this.ctx.drawImage(this.backgroundImageElement, 0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
//     }
//   }
// }
//
//
// class CharacterMenu extends Menu {
//   constructor(backgroundImage,ctx) {
//     super(backgroundImage,ctx);
//   }
// }

