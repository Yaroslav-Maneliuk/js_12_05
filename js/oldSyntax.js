"use strict";

function UserOld(name, sname, age) {
  this.name = name;
  this.sname = sname;
  this.age = age;
}

function UserOldPrototype() {
  this.getFullName = function () {
    return `${this.name} ${this.sname}`;
  };
}
UserOld.prototype = new UserOldPrototype();

const userOld = new UserOld("Elon", "Musk", 50);
userOld.getFullName();
console.log(userOld);