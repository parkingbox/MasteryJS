// 공통된 속성과 행동이 있다면 '상속'이 가능
// class Tiger { 
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }
// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다');
  }
}

class Tiger extends Animal {}
  const tiger = new Tiger('노랑이');
    console.log(tiger);
    tiger.sleep();
    tiger.eat();

class Dog extends Animal {
  constructor(color,ownerName){
    super(color); // 내가 상속하는 부모 클래스
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자!');
  }

  // 오버라이딩 overriding
  eat(){
    super.eat(); // 부모의 함수 호출 후 내가 필요한 기능 구현가능(super)
    console.log('강아지가 먹는다');
  }
}
    const dog= new Dog('빨강이','승우');
    console.log(dog);
    dog.sleep();
    dog.eat();