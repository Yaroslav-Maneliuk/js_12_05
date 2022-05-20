"use strict";

class User {
  constructor(name, sname, age) {
    this.name = name;
    this.sname = sname;
    this.age = age;
  }
  getFullName() {
    return `${this.name} ${this.sname}`;
  }
  isAdult() {
    return this.age >= ADULT_AGE;
  }
  static qwerty = 'qwerty';
  static createTestUser(){
    return new User('Anonim', 'Anonimich', 22)
  }
}

const userNew = new User("Tim", "Le", -5);
const userNew2 = new User("Tom", "Bom", 250);
console.log(userNew);








class Woker {
  constructor(name, sname, rate, days) {
    this.name = name;
    this.sname = sname;
    this.rate = rate;
    this.days = days;
  }
  get days() {
    return this._days;
  }
  set days(days) {
    if (typeof days !== "number") {
      throw new TypeError("value must be number");
    }
    if (days < 0 || days > MAX_DAYS) {
      throw new RangeError("range must be: 0 ... ${MAX_AGE}");
    }
    this._days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}

const woker = new Woker("Biba", "Bibovich", 500, 15);
console.log(woker.getSalary());
