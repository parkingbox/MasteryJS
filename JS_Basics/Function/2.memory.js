function add(a, b){
  console.log(a);
  console.log(b);
  return a + b;
}
const sum = add;
//console.log(add(1,2));
console.log(add(1,2));
// 인자가 없을땐 undifined 호출
// return 은 ndifined + ndifined 이므로 NaN 호출