const items = document.querySelector('.list__input');
const input = document.querySelector('.list__input__write');
const addBtn = document.querySelector('.add__button');

function onClick() {
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  console.log(text);
  // 2. 새로운 아이템을 만듬 (텍스트 + 삭제 버튼)
  // const item = createItem();
  // // 3. items 컨테이너안에 새로 만든 아이템을 추가한다
  // items.appendChild(item);
  // // 4. 인풋을 초기화 한다.
  input.value = '';
  input.focus();
  //
}

addBtn.addEventListener('click', () => {
  onAdd();
});
