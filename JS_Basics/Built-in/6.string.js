const textObj = new String('Hello World');
const text = 'Hello World';
console.log(textObj);
console.log(text);
console.log(text.length);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));
//문자의 자릿수
console.log(text.indexOf('l'));
// 마지막 문자의 자릿수
console.log(text.lastIndexOf('H'));
// 포함
console.log(text.includes('tx'));
console.log(text.includes('h'));
console.log(text.includes('H'));

// 시작과 끝문자
console.log(text.startsWith('He'));
console.log(text.endsWith('d'));

// 대문자
console.log(text.toUpperCase());
// 소문자
console.log(text.toLowerCase());


// 부분적 스트링 가져오기
console.log(text.substring(0, 2));
// 문자 삭제
console.log(text.slice(2));
console.log(text.slice(-2));

const space = '          space     ';
//공백제거
console.log(space.trim());
// 스페이스 별로 끊음
const longText = 'Get to the point';
console.log(longText.split(' '));
console.log(longText.split(', ',2));


