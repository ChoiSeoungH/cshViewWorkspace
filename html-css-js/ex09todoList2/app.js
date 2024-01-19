class App {
  constructor() {
    this.list = document.querySelector('#list');
    this.title = document.querySelector('#title');
    this.content = document.querySelector('#content');
    this.add = document.querySelector('#addBtn');
    this.garbage = document.querySelector('#garbage');
    this.msgBox = document.querySelector('.msg-box');
    this.localStorage = [];
    this.idx = 0;
  }//eoc

  init() {
    if (localStorage.getItem('data')) {
      this.localStorage = JSON.parse(localStorage.getItem('data'));
      this.localStorage.forEach(d => {
        this.addContent(JSON.parse(d));
        this.idx+=1;
      })
    }
    this.setAddBtn();
    this.setGarbage();
    this.setMsg('로딩완료!');
  }

  setMsg(string) {
    this.msgBox.textContent = string
    this.msgBox.classList.add('on');
    setTimeout(e => {
      this.msgBox.classList.remove('on');
    }, 1000)
  }

  //eof

  setAddBtn() {
    this.add.addEventListener('click', (e) => {
      if (!this.title.value || !this.content.value) {
        alert('필수값이 없습니다!');
        return;
      }


      let array;
      if (localStorage.getItem('data')) {
        array = JSON.parse(localStorage.getItem('data'));
      } else {
        array = [];
      }
      const data = new Data(++this.idx, this.title.value, this.content.value);
      array.push(JSON.stringify(data));
      localStorage.setItem('data', JSON.stringify(array));
      this.addContent(data);
    })
  }

  addContent(data) {
    let item = document.createElement('div');
    item.classList.add('item');

    let title = document.createElement('h4');
    title.textContent = data.title;

    let msg = document.createElement('span');
    msg.classList.add('msg');
    msg.textContent = data.content;

    item.appendChild(title);
    item.appendChild(msg);

    this.list.appendChild(item);
    this.setContentDrag(item);
    this.setMsg('글작성완료!');
  }



  setContentDrag(item) {
    item.setAttribute('draggable', 'true')
    item.addEventListener('dragstart', (e) => {
      e.target.style.backgroundColor = '#ea0965';
      e.dataTransfer.setData('title', e.target.firstChild.innerText);
    });
    item.addEventListener('dragend', (e) => {
      e.preventDefault();
      e.target.style.background = 'none';
    });


  }

  //eof
  setGarbage() {
    this.garbage.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    this.garbage.addEventListener('drop', (e) => {
      e.preventDefault();
      let title = e.dataTransfer.getData('title');
      let items = [...document.querySelectorAll('.item')];
      let item = items.find(i =>
          i.firstChild.textContent === title
      )
      this.list.removeChild(item);
      let array = JSON.parse(localStorage.getItem('data'));
      let idx = array.findIndex(d => JSON.parse(d).title === title);
      if (idx !== -1) {
        array.splice(idx, 1);
      }
      if (array.length===0) {
        this.idx=0;
      }
      localStorage.setItem('data', JSON.stringify(array));

      this.setMsg('글삭제완료!');
    });
  }
}//eoc

class Data {
  constructor(idx, title, content) {
    this.idx = idx;
    this.title = title;
    this.content = content;
  }
}//eoc

const app = new App();
app.init();