// class Tictactoe {}
// class Player {
//   constructor(name, color, shape) {
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
//   }
// }
// const geme = new Tictactoe(
//   new Player("핑크", "pink", "O"),
//   new Player("블루", "blue", "X")
// );

let table = document.querySelector(".main");
let count = 0;
let check = true;
let btns = document.querySelector(".start");
const end = document.querySelector(".off");
btns.addEventListener("click", (e) => {
  // alert(e.target);
  // e.target.style.visibility = "none";
  btns.style.display = "none";
  table.innerHTML += `<table>
  <tr class="one">
    <td id="one"></td>
    <td id="one"></td>
    <td id="one"></td>
  </tr>
  <tr class="two">
    <td id="two"></td>
    <td id="two"></td>
    <td id="two"></td>
  </tr>
  <tr class="three">
    <td id="three"></td>
    <td id="three"></td>
    <td id="three"></td>
  </tr>
</table>`;
});

function reset() {
  document.querySelector("table").remove();
  btns.style.display = "block";
  check = true;
  count = 0;
}


table.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) return;
  if (check && !e.target.innerText) {
    e.target.innerText = "O";
    e.target.style.color = "black";
    e.target.style.background = "pink";
    check = !check;
    if (win("O")) {
      alert("1p승리!");
      reset();
      return;
    }
    count += 1;
  } else if (!check && !e.target.innerText) {
    e.target.innerText = "X";
    e.target.style.color = "black";
    e.target.style.background = "aqua";
    check = !check;
    if (win("X")) {
      alert("2p승리!");
      reset();
      return;
    }
    count += 1;
  }
  if (count == 9) {
    alert("무승부");
    reset();
    return;
  }
});

function win(value) {
  let a = [...document.querySelectorAll("#one")];
  let b = [...document.querySelectorAll("#two")];
  let c = [...document.querySelectorAll("#three")];
  let list = [a, b, c];
  let cnt = 0;

  //가로
  for (let i = 0; i < list.length; i += 1) {
    cnt = 0;
    for (let k = 0; k < list[i].length; k += 1) {
      if (list[i][k].innerText === value) {
        cnt += 1;
      } else {
        cnt = 0;
      }
    }
    if (cnt === 3) {
      return true;
    }
  }
  // 세로
  for (let i = 0; i < list.length; i += 1) {
    cnt = 0;
    for (let k = 0; k < list.length; k += 1) {
      if (list[k][i].innerText === value) {
        cnt += 1;
      } else {
        cnt = 0;
      }
    }
    if (cnt === 3) {
      return true;
    }
  }
  // 대각선 \
  cnt = 0;
  for (let i = 0; i < list.length; i += 1) {
    if (list[i][i].innerText === value) {
      cnt += 1;
    }
    if (cnt === 3) {
      return true;
    }
  }
  // 대각선 /
  if (
    list[2][0].innerText === value &&
    list[1][1].innerText === value &&
    list[0][2].innerText === value
  ) {
    return true;
  }
  return false;
}

