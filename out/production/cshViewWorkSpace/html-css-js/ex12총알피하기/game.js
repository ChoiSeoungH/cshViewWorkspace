class DodgeBullet {
  constructor() {
    this.canvas = document.querySelector("#canvas");
    this.ctx = this.canvas.getContext("2d");
    this.player = {x: this.canvas.width / 2 - 25, y: this.canvas.height / 2 - 25, size: 50, speed: 3};
    this.hitbox = {x: this.player.x + this.player.size / 2 - 10, y: this.player.y + this.player.size / 2 - 10, size: 20};
    this.key = {
      ArrowRight: false,
      ArrowLeft: false,
      ArrowUp: false,
      ArrowDown: false
    }
    this.playerImg = new Image();
    this.key = {"ArrowRight": false, "ArrowLeft": false, "ArrowUp": false, "ArrowDown": false};
    // this.bullet;
    this.bulletList = [];
  }

  drawPlayer() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear the canvas
    this.ctx.beginPath();
    this.ctx.drawImage(this.playerImg, this.player.x, this.player.y, this.player.size, this.player.size);
    this.ctx.closePath();
    this.movePlayer();
  }

  init() {
    for (let i = 0; i < 30; i++) {
      let bullet = new Bullet();
      bullet.init(this.player.x,this.player.y);
      this.bulletList.push(bullet);
    }
    document.addEventListener("keydown", e => this.keyHandler(e, true));
    document.addEventListener("keyup", e => this.keyHandler(e, false));
    this.playerImg.src = './bug.png';
    this.playerImg.onload = () => {
      this.gameLoop(); // Start the game loop
    }
  }

  keyHandler(e, value) {
    if (this.key[e.key] !== undefined) {
      this.key[e.key] = value;
    }
  }

  movePlayer() {
    if (this.key.ArrowRight && this.player.x < this.canvas.width - this.player.size) {
      this.player.x += this.player.speed;
      this.hitbox.x += this.player.speed;
    } else if (this.key.ArrowDown && this.player.y < this.canvas.height - this.player.size) {
      this.player.y += this.player.speed;
      this.hitbox.y += this.player.speed;
    } else if (this.key.ArrowUp && this.player.y > 0) {
      this.player.y -= this.player.speed;
      this.hitbox.y -= this.player.speed;
    } else if (this.key.ArrowLeft && this.player.x > 0) {
      this.player.x -= this.player.speed;
      this.hitbox.x -= this.player.speed;
    }
  }

  isCollision(bullet) {
    if (this.hitbox.x < bullet.x + bullet.radius &&
        this.hitbox.y < bullet.y + bullet.radius &&
        this.hitbox.x + this.hitbox.size > bullet.x &&
        this.hitbox.y + this.hitbox.size > bullet.y
    ) {
      return true;
    }
    return false;
  }

  gameLoop() {
    this.drawPlayer();
    this.bulletList.forEach(b => {
      b.color = this.isCollision(b) ? 'red' : 'green';
      b.render(this.ctx);
      b.update(this.player.x,this.player.y)
    })
    requestAnimationFrame(() => this.gameLoop());
  }

}

const game = new DodgeBullet();
game.init();
