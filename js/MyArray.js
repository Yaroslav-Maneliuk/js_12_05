"use strict";
//реализовать аналог встроенного объекта Array
//контсруктор прототипа-родителя с логикой с методами
function MyArrayProptotype() {
  this.push = function () {
    //this[this.length] = value;
    //this.length++;
    //return this.length;
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  };
  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    //this.length;
    return lastItem;
  };
}
//конструктор объекта с данными
function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

MyArray.prototype = new MyArrayProptotype();
MyArray.prototype.qqq = function () {
  console.log("newParent");
};

const myArray1 = new MyArray(1, 2, 3, 8, 5);
myArray1.qqq();
// console.log(myArray1.prototype);
const myArray2 = new MyArray();
console.log(myArray1.length);
//console.log(myArray1.push(8,5,9));
console.log(myArray1);
console.log(myArray1.push === myArray2.push);

const array1 = new Array(1, 2, 3, 5);
// const array2 = new Array();
console.log(array1);
// console.log(array1.push(8));
// console.log(array1 === array2);
// console.log(array1.push === array2.push);

Array.prototype.qqq = function () {
  console.log("newParent");
};
array1.qqq();