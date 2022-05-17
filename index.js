"use strict";

// const getMaxFromTwoNumber = (n1, n1) => {
//   return n1 > n2 ? n1 : n2;
// };

const getMaxFromTwoNumber = (n1, n1) => n1 > n2 ? n1 : n2;

const showArgs = (a, b, ...c) => {
  console.log(c)
  c.forEach((item)=>{
    console.log(item)
  })
};
showArgs(1,2,3,4,5);

const obj = {
  prop:12,
  showArgs,
}
obj.showArgs(1,1,1,1);
