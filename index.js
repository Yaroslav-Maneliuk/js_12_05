"use strict";

/*
-наследование
-инкапсуляция
-полиморфизм
*/

class Animal {
  #amountLegs;
  constructor(type, amountLegs) {
    this.type = type;
    // if (typeof type !== "string") {
    //   throw new TypeError("type must be string");
    // }
    // if (type === "") {
    //   throw new Error("empty string");
    // }
    // this._type = type;
    this.#amountLegs = amountLegs;
  }
  get type() {
    return this._type;
  }
  set type(type) {
    if (typeof type !== "string") {
      throw new TypeError("type must be string");
    }
    if (type === "") {
      throw new Error("empty string");
    }
    this._type = type;
  }
  eat() {
    return `${this._type} is eating`;
  }
  say(word) {
    return `${this._type} say ${word}`;
  }
  static isAnimal(obj){
    return obj instanceof Animal;
  }
}

const cat = new Animal("cat", 4);
console.log(cat.say("meow"));
const dog = new Animal("dog", 4);
const man = new Animal("man", 1);
