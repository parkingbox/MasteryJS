  // let 재할당 가능
  let a = 1;
  a = 2;

  // const 재할당이 불가능
  // 1. 상수
  // 2. 상수변수 또는 변수
  const text = 'hello';
  //text = 'hi'; 이렇게하면 안됨!

  // 1. 상수 (항상 대문자 / 단어와 단어 사이엔 _ 표시)
  const MAX_FRUITS = 5;

  // 2. 재할당 불가능한 상수변수 또는 변수
  const apple = {
    name : 'apple',
    color : 'red',
    display : '🍎',
  };
  // apple = {};
  console.log(apple);
  apple.name = 'orange';
  apple.display = '🍊'
  console.log(apple);
  // let 재할당 O 변경 X , const 재할당 X 변경 O
