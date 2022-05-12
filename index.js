// "use strict";

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

//-----------------------------------//

"use strict";

const rabbit = {
  countPaw: 4,
  jump: function () {
    return "i\'m jumping";
  },
};

const rabbitPet = {
  name:'Boba',
  pet: function () {
    return 'pet' + this.name;
  },
};

const rabbitMagic = {
  say: function (Hello) {
    return "word";
  },
};

rabbitPet.__proto__ = rabbit;
rabbitMagic.__proto__ = rabbitPet;


