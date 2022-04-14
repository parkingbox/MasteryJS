const x = 0;
const y = 0;
const coordinate = {x, y}; // {x: x, y: y}; 짧게 생략가능
console.log(coordinate);

function makeObj(name, age) {
  return {
    name,
    age,
  };
}