// 사용예제1
function add(a,b) {
  console.log('function');
  return a + b;
  // 함수를 외부로 반환할때는 return / 호출하지않으면 실행 x
  //console.log('function');
  //return a + b
}
const result = add(1, 2);
console.log(result);

// 사용예제2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

let lastName = '김';
let firstName = '지수';
console.log(fullName(firstName, lastName));

let lastName2 = '박';
let firstName2 = '철수';
console.log(fullName(firstName2, lastName2));