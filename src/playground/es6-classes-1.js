
class Person {
  constructor(name = 'Anonymous', age = 0) {
    console.log('test');
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi ${this.name}`;
  }
  getAge() {
    return `${this.name} is ${this.age} old`
  }


}

const me = new Person("Rob Merrill", 37);
console.log(me.getAge());

const somebody = new Person();
console.log(somebody.getAge());
