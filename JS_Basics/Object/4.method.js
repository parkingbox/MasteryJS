const apple = {
  name : 'apple',
  display : function() {
    console.log(`${this.name}: 🍎`); // 객체안에서 내 자신의 데이터에 접근할때는 this.key
  },
};

apple.display();