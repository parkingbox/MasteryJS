// 접근자 프로퍼티 (Accessor Property) - get
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName (){ // 함수지만 고정된 값이 아님 //접근
  return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) { //할당
    console.log('set', value);
  }
}

const student = new Student('승우', '박');
student.firstName = '안나';
console.log(student.firstName);
console.log(student.fullName); // - 접근자 프로퍼티 사용
student.fullName = '김철수';