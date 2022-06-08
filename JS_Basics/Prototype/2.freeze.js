// 동결! Object.freeze 추가 X, 삭제 X, 쓰기 X, 속성 재정의 X 
// (단, 얕은 꽁꽁 얼림!)
const woo = { name : '승우' };
const dog = { name : '와우', emoji : '🐶', owner : woo }
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);
dog.age = 4;
console.log(dog);
woo.name = '승우야';
console.log(dog); // 참조하는 객체는 '얼릴수 없음'

// 밀봉! Object.seal 값의 수정 V , 추가 X, 삭제 X, 속성 재정의 X
const cat = {...dog };
// Object.assign(cat, dog);
Object.seal(cat);
console.log(cat);
cat.name = '냐옹';
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen);
console.log(Object.isSealed);


// 확장 금지 preventExtensions
const tiger = { name: '어흠'};
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐응';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);