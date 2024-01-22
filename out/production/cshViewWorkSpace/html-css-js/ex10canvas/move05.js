const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let key = {
  right: false,
  left: false,
  up: false,
  down: false
}

let player = {
  x: 0,
  y: 0,
  size: 50,
  color: 'blue'
}
let enemyList = [];

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawObj(player);
  movePlayer();
  drawEnemy(enemyList);
}
setInterval(() => {
  enemyList = enemyList.concat(setEnemyList());
  console.log(enemyList);
}, 1000);

function setEnemyList() {
  let list = [];
  for (let i = 1; i <= 3; i++) {
    let rdPos = Math.random() * 7 + 1;
    let enemy = {
      x: canvas.width / 9 * rdPos - 40,
      y: 0, // 적이 화면의 맨 위에서 시작하도록 변경
      size: 80,
      color: 'green',
      speed : Math.random() * 4 +3
    }
    list.push(enemy);
  }
  return list;
}



function drawEnemy(enemyList) {
  enemyList.forEach((e,index) => {
    e.color = checkCollision(player, e) ? 'red' : 'green';
    e.y += e.speed;
    drawObj(e);
    if (e.y > canvas.height) {
      enemyList.splice(index, 1);
    }
  })
  console.log(enemyList);
}


function drawObj(obj) {
  ctx.beginPath();
  ctx.rect(obj.x, obj.y, obj.size, obj.size)
  ctx.fillStyle = obj.color;
  ctx.fill();
  ctx.closePath();
}

function checkCollision(obj1, obj2) {
  return obj2.x < obj1.x + obj1.size &&
      obj1.x < obj2.x + obj2.size &&
      obj2.y < obj1.y + obj1.size &&
      obj1.y < obj2.y + obj2.size ;
}

function movePlayer() {
  if (key.right && player.x < canvas.width - player.size) {
    player.x += 5;
  } else if (key.down && player.y < canvas.height - player.size) { player.y += 5; }
  else if (key.up && player.y > 0) {
    player.y -= 5;
  } else if (key.left && player.x > 0) {
    player.x -= 5;
  }
}

document.addEventListener("keydown", e => {

  if (e.keyCode === 39 || e.key === 'ArrowRight') {
    key.right = true;
  } else if (e.keyCode === 40 || e.key === 'ArrowDown') {
    key.down = true;
  } else if (e.keyCode === 38 || e.key === 'ArrowUp') {
    key.up = true;
  } else if (e.keyCode === 37 || e.key === 'ArrowLeft') {
    key.left = true;
  }

})


document.addEventListener("keyup", e => {
  if (e.keyCode === 39 || e.key === 'ArrowRight') {
    key.right = false;
  } else if (e.keyCode === 40 || e.key === 'ArrowDown') {
    key.down = false;
  } else if (e.keyCode === 38 || e.key === 'ArrowUp') {
    key.up = false;
  } else if (e.keyCode === 37 || e.key === 'ArrowLeft') {
    key.left = false;
  }
})
setInterval(draw, 10)

