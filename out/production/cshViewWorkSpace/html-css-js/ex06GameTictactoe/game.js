let table = document.querySelector('table');
let rows = [...document.querySelectorAll('tr')];
let start = document.querySelector('.game_start');
let tiles = [...document.querySelectorAll('td')];
let turn = true;
let win = false;
let end = document.querySelector('.game_end');
let checkCnt = 0;
start.addEventListener('click', () => {
  table.classList.add('on');
  start.classList.remove('on');
})

function SelectTile(tile) {
  tile.addEventListener('click', (e) => {
    if (e.target.textContent !== '') {
      alert("이미선택한 타일입니다");
      return;
    }
    let mark = turn ? 'O' : 'X';
    e.target.style.backgroundColor = turn ? '#64b5f6' : '#ff6b6b';
    e.target.textContent = mark;
  })

}

function checkRow() {
  rows.forEach(r => {
    let cnt = 0;
    let data = [...r.querySelectorAll('td')];
    data.forEach(d => {
      if (turn && d.textContent === 'O') {
        cnt += 1;
      } else if (!turn && d.textContent === 'X') {
        cnt += 1;
      }
      console.log(d.textContent);

    })
    if (cnt === 3) {
      win = true;
      return;
    }
  })
}

function checkColumn() {
  for (let i = 0; i < rows.length; i++) {
    let cnt = 0;
    for (let j = 0; j < rows.length; j++) {
      if (turn && rows[j].children[i].textContent === 'O') {
        cnt += 1;
      } else if (!turn && rows[j].children[i].textContent === 'X') {
        cnt += 1;
      }
    }
    if (cnt === 3) {
      win = true;
      return;
    }
  }

}

function checkDiagnol() {
  let cnt = 0;
  for (let i = 0; i < rows.length; i++) {
    if (turn && rows[i].children[i].textContent === 'O') {
      cnt += 1;
    } else if (!turn && rows[i].children[i].textContent === 'X') {
      cnt += 1;
    }
  }
  if (cnt === 3) {
    win = true;
    return;
  }

  cnt = 0;
  for (let i = 0; i < rows.length; i++) {
    if (turn && rows[i].children[rows.length - i - 1].textContent === 'O') {
      cnt += 1;
    } else if (!turn && rows[i].children[rows.length - i - 1].textContent === 'X') {
      cnt += 1;
    }
  }
  if (cnt === 3) {
    win = true;
    return;
  }
}

function CheckTile(tile) {
  tile.addEventListener('click', (e) => {
    checkRow();
    checkColumn();
    checkDiagnol();
    if (win) {
      tiles.forEach((tile) => {
        tile.style.pointerEvents = 'none';
      });
      setTimeout((e) => {
        table.classList.remove('on');
        end.classList.add('on');
        end.children[1].textContent = !turn ? 'BLUE WIN' : 'RED WIN';
        end.children[1].style.backgroundColor = !turn ? '#64b5f6' : '#ff6b6b';
      }, 500)
    }
    if (!win && ++checkCnt === 9) {
      tiles.forEach((tile) => {
        tile.style.pointerEvents = 'none';
      });
      setTimeout((e) => {
        table.classList.remove('on');
        end.classList.add('on');
        end.children[1].textContent = 'DRAW';
        end.children[1].style.backgroundColor = '#1c13dc';
      }, 500)
    }
    console.log(turn);
  turn = !turn;
  })
}

tiles.forEach((tile) => {
  SelectTile(tile);
  CheckTile(tile);
})

end.children[2].addEventListener('click', () => {
  tiles.forEach((tile) => {
    tile.textContent = '';
    tile.style.backgroundColor = '';
    tile.style.pointerEvents = 'auto';
  });
  turn = true;
  win = false;
  checkCnt = 0;
  end.classList.remove('on');
  table.classList.add('on');
})

