const map = new Map([
  ['key1', 'π'],
  ['key2', 'π'],
]);
console.log(map);
// μ¬μ΄μ¦ νμΈ size
console.log(map.size);
// μ‘΄μ¬νλμ§ νμΈ has
console.log(map.has('key1'));
console.log(map.has('key6'));
// μν forEach
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
// μ°ΎκΈ° get
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));
// μΆκ° set
map.set('key3', 'π₯©');
console.log(map);
// μ­μ  delete
map.delete('key3');
console.log(map);
// μ λΆμ­μ  clear
map.clear();
console.log(map);

//μ€λΈμ νΈμμ ν° μ°¨μ΄μ ?? μ¬μ©νλ μΈν°νμ΄μ€κ° μ΄μ§ λ€λ¦
const key = {name : 'milk', price : 10};
const milk = {name : 'milk', price : 10, description : 'λ§μλμ°μ '};
const obj = {
  [key] : milk,
}
console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]);
console.log(map2.get(key));