"use strict";
//декларация
function test1(){
  console.log(this);
}
//выражение
const test2 = function(){
  console.log(this);
}
//стрелка
const test3 = ()=>{
  console.log(this);
} 


test1();
test2();
test3();