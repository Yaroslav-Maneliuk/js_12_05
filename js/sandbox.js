

function sum(){
  let result = 0;
  console.log(arguments);
  for (let index = 0; index < arguments.length; index++) {
    result += arguments[index];
  }
  return result;
}

// console.dir(sum);

const res= sum(1,1,1,1,1,1,1,1);
console.log(res);

const res2= sum(1,11);
console.log(res2);