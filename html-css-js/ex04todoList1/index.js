let items = document.querySelector('.items');
let addBtn = document.querySelector('.footer_btn');
let input = document.querySelector('.footer_input');
let idx = 0;

addBtn.addEventListener('click', () => {
  addLi();
})

input.addEventListener('keypress', (e) => {
  if (e.isComposing) return;
  if (e.key === 'Enter') {
    addLi();
  }
});

function addLi() {
  if (!isValid(input.value)) return;
  addVal(input.value);
  let del = document.querySelectorAll('.item_delete');
  del.forEach(d=>{
    d.addEventListener('click', (e)=>{
      delList(d.children[0]);
    });
  })
  input.value = '';
}

function isValid(val) {
  if (val.trim()==='') {
    alert('값이 없습니다.');
    return false;
  }
  let names = [...document.querySelectorAll('.item_name')];
  if (names.find(n=>n.textContent===val.trim())) {
    alert('이미 존재하는 값이 있습니다.');
    return false;
  }
  return true;
}

function addVal(val) {

  items.innerHTML+=
      `<li class="item_row" data-id=${++idx}>
      <div class="item">
        <span class="item_name">${val}</span>
        <button class="item_delete"> <i class="fa-solid fa-trash-can" data-id=${idx}></i> </button>
      </div>
    </li>`;

}

function delList(t) {
  let id = t.getAttribute('data-id');
  let item = document.querySelector(`.item_row[data-id=${id}]`);
  items.removeChild(item);
}

