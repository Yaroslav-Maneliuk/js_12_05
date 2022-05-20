"use strict";
// class Test{};
// const Test = class{};


function test(a, b, ...rest) {
  return class {
    constructor(prop) {
      this.prop = prop;
    }
  };
}
const TestClass = test(1,2,3,4)

const obj = new TestClass(4);

console.dir(TestClass);