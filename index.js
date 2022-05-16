"use strict";

const f1 = function (n1, ...rest) {  //rest - остаточные параметры
  // console.log(arguments);
  console.log(n1);
  console.log(rest);
};

const f2 = (n1, ...rest) => {
  // console.log(arguments);
  console.log(n1);
  console.log(rest);
};

f1(1, 2, 3);
f2(4, 8, 9);

const sum1 = (...args) => {
  let result = null;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
};
console.log(sum1(3, 3, 5));

const sum2 = (...args) => {
  let result = null;
  args.forEach((number) => {
    result += number;
  });
  return result;
};
console.log(sum2());

const sum3 = (...args) =>
  args.reduce((result, number) => result + number, null);
// console.log(sum3(8, 3, 5));

const arrNums =[1,5,9,5,8,9];
console.log(sum3(...arrNums)); //spred  - оператор расширения

const a1 =[5,5,5,5];
const arrResult =[...a1, 888, ...arrNums];
console.log(sum3(arrResult));
