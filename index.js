"use strict";

/*
-наследование
-инкапсуляция
-полиморфизм
*/

class User {
  constructor(name, sname, age) {
    this._name = name;
    this._sname = sname;
    this.age = age;
    this.isBan = false;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    if (typeof age !== "number") {
      throw new TypeError("value must be number");
    }
    if (age < 0 || age > ADULT_AGE) {
      throw new RangeError("range must be: 0 ... ${MAX_AGE}");
    }
    this._age = age;
  }
  getFullName() {
    return `${this._name} ${this._sname}`;
  }
}

class Moderator extends User {
  constructor(name, sname, age, rights) {
    super(name, sname, age); //ссылка на консруктор родителя;
    this.rights = rights;
  }
  deleteMessage(id) {
    return `${this.getFullName()} delete message ${id}`;
  }
  sayName() {
    return `${this._name}`; //
  }
}
class Admin extends Moderator {
  constructor(name, sname, age, rights) {
    super(name, sname, age, rights);
  }
  ban(user) {
    if (user instanceof User) {
      user.isBan = true;
    }
    throw new TypeError("type user!!!");
  }
  unBan(user) {
    if (user instanceof User) {
      user.isBan = false;
    }
    throw new TypeError("type user!!!");
  }
  toggleBan(user) {
    if (user instanceof User) {
      return (user.isBan = !user.isBan);
    }
    throw new TypeError("type user!!!");
  }
}
const admin = new Admin("Elon", "Musk", 50, { rule: 1 });
console.log(admin.getFullName());
console.log(admin.ban());

// const mod1 = new Moderator("Elon", "Musk", 50, { rule: 1 });
// console.log(mod1.deleteMessage(2));
// console.log(mod1.sayName());

class Squirrel {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  jump() {
    return `${this._name} is jumping`;
  }
}

class FlySquirrel extends Squirrel {
  constructor(name, color, distance) {
    super(name, color);
    this.distance = distance;
  }
  fly() {
    return `${this._name} is flying ${this.distance}`;
  }
}

class MagicSquirell extends FlySquirrel {
  constructor(name, color, distance, songs) {
    super(name, color, distance);
    this.songs = songs;
  }
  dance() {
    return `${this._name} is dancing`;
  }
  sing() {
    return `songs: ${this.songs.join(' , ')}`
  }
}
const Belka = new MagicSquirrel("belka", "rainbow", 2000, ["p1", "p2"]);
