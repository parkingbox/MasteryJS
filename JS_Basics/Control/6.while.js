// while(조건) {}
// 조건이 false가 될때까지 코드를 반복 실행
let num = 5;
while(num >= 0) {
  console.log(num);
  num--;
}
// 조건이 맞으면 실행하고싶다 -> while
let isActive = false;
let i = 0;
while(isActive) {
  console.log('아직살아있다!');
  if (i ===1000) {
    break;
  }
  i++;
}
// 꼭 한번은 실행하고 싶다 -> do while
do { 
  console.log('do-while 아직살아있다!');
} while (isActive);