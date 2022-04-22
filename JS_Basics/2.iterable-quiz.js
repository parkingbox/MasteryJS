// [Symbol.iterator](): IterableIterator<T>;
// 0 부터 10이하 까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!

const multiple = {
  [Symbol.iterator]:() => {
    const max = 10;
    let num = 0;
    return {
      next() {
        return {value: num++ * 2, done: num > max};
      },
    };
  },
};
for(const num of multiple)
  console.log(num);
// let iterable = {
//   [Symbol.iterator]() {
//     return {
//       i: 0, next() {
//         if (this.i < 11) {
//           return { value: this.i++, done: false };
//         }
//           return { value: undefined, done: true };
//       }
//     };
//   }
// };

// for (let value of iterable) {
//   console.log(value);
// }