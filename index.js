// function toString() {
//   return `${this.name} ${this.sname}`;
// }

// const animal = {
//   name: "anonimous",
//   eat: function () {
//     return this.name + "is eating";
//   },
// };
// const man = {
//   countFingers: 5,
//   name: "human",
//   read: function () {
//     return this.name + "is reading";
//   },
// };
// const student = {
//   id: 1,
//   name: "Elon",
//   sname: "Musk",
//   age: 50,
//   toString,
// };

// man.__proto__ = animal;
// student.__proto__ = man;

// console.log(student);
// console.log(student.read());
// console.log(man.eat());

//----------переписываем-----------------//

function StudentPrototype() {
  this.toString = function () {
    return `${this.name} ${this.sname}`;
  };
  this.eat = function () {
    return this.name + "is eating";
  };
  this.read = function () {
    return this.name + "is reading";
  }
}

function Student(name, sname, age) {
  if (!new.target) {
    return new Student(name, sname, age);
  }
  this.name = name;
  this.sname = sname;
  this.age = age;
};
Student.prototype = new StudentPrototype();

const student = new Student("Elon", "Musk", 50);

console.log(student);
console.log(student.toString());
// console.log(student.read());
// console.log(student.eat());
