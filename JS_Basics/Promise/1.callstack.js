function a() {
  for(let i = 0; i<10; i++);
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log('시작했다');
const result = c();
console.log(result);

// 무거운, 오래걸리는 작업 수행은 좋지 않다