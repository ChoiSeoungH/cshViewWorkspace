import MainMenu from "./Menu/MainMenu";

class App {
  constructor() {
    this.myCanvas = document.querySelector('#myCanvas');
    this.ctx = this.myCanvas.getContext('2d');

    // this.mainMenu = new MainMenu('./Img/Title.jpg', this.ctx);
  }

  init() {
    alert(11);
    this.mainMenu.drawBackground();
  }
}

const game = new App();
game.init();

