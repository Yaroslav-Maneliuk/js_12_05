"use strict";

const sum = (n1, n2) => {
  return n1 + n2;
};

const sum2 = (n1, n2) => n1 + n2;

console.log(sum(1, 2));
console.log(sum2(1, 2));

const square = (n=2) => n * n;
console.log(square());
