const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');


//코드를 설명하는 주석 X 
//가능하면 왜 사용 했는지(의도)를 적어주는게 좋다
function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  if(text === '') {
    input.focus();  // 함수를 나갈때 포커스가 옮겨지기 때문에 포커스를 그대로 남기기 위함
    return;
  }
  console.log(text);
  // 2. 새로운 아이템을 만듬 (텍스트 + 삭제 버튼)
  const item = createItem(text);
  // 3. items 컨테이너안에 새로 만든 아이템을 추가한다
  items.appendChild(item);
  // 4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({block: 'center'});
  // 5. 인풋을 초기화 한다.
  input.value = '';
  input.focus(); // 사용자가 편하게 입력
}


function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });
  
  const itemDivider = document.createElement('div');
  itemDivider.setAttribute ('class', 'item__divider');

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', event => {
  if(event.key === 'Enter') {
    onAdd();
  }
})

