"use strict";

const f1 = function (n1,...rest) {
  // console.log(arguments);
  console.log(n1);
  console.log(rest);
};

const f2 = (n1,...rest) => {
  // console.log(arguments);
  console.log(n1);
  console.log(rest);
};


f1(1,2,3);
f2(4,8,9);

// console.dir(f1);
// console.dir(f2);