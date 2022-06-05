// var의 특징
// -> 일반 코딩 방식과 어긋나서 개발하면서도 멘붕 옴
// -> 코드의 가독성과 유지보수성에 좋지 않음

// 1. 변수 선언하는 키워드 없이 선언 & 할당이 가능함
// 선언인지, 재할당인지 구분하기 어려움
something = '💩';
console.log(something);

// 2. 중복선언이 가능함
var poo = '💩';
var poo = '💩';
console.log(poo);

