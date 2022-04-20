// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

// 퀴즈1
function replace(quiz1, from, to) {
  const replaced = Array.from(quiz1);
  for(let i = 0; i < replaced.length; i++) {
    if(replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}
const quiz1 = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(quiz1,'🍓', '🥝');
console.log(result);

// 퀴즈2
const quiz2 = ['🍌', '🥝', '🍇', '🥝'];
let count = 0;
for(let i=0; i < quiz2.length; i++) {
  if(quiz2[i] === '🥝')  {
    count++;
  }
}
console.log(count);



// 퀴즈3
function match(quiz3,search) {
  const result = [];
  for(let i=0; i < quiz3.length; i++) {
    if(search.includes(quiz3[i]))  {
      result.push(quiz3[i]);
    }
  }
  return result;
}
console.log(match( ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']));