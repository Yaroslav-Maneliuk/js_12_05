"use strict";

/*
-наследование
-инкапсуляция
-полиморфизм
*/

class User {
  #name;
  #sname;
  constructor(name, sname, age) {
    this.name = name;
    this.sname = sname;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    if (typeof age !== "number") {
      throw new TypeError("value must be number");
    }
    if (days < 0 || age > ADULT_AGE) {
      throw new RangeError("range must be: 0 ... ${MAX_AGE}");
    }
    this._age = age;
  }
  getFullName() {
    return `${this.name} ${this.sname}`;
  }
}

class Moderator extends User {
  constructor(name, sname, age, rights) {
    super(name, sname, age);  //ссылка на консруктор родителя;
    this.rights = rights;
  }
  deleteMessage(id){
    return `${this.getFullName()} delete message ${id}`;
  }
  sayName(){
    return `${this.#name}`; //
  }
}
const mod1 = new Moderator("Elon", "Musk", 50, { rule: 1 });
console.log(mod1.deleteMessage(2))