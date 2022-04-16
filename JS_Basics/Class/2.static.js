// static 정적 프로퍼티, 메서드
// 인스턴스 레벨의 프로퍼티와 메서드는 반드시 생성된 인스턴스로 해야됨
// 클래스 레벨의 프로퍼티와 함수는 만들어진 인스턴스로 접근 가능
class Fruit {
    static MAX_FRUIT = 4;
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 항수작성 function X 애로우는 가능
  
  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit('banana', '🍌');
  }
  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUIT);
// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎')
// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊')

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

Math.pow();
Number.isFinite(1);