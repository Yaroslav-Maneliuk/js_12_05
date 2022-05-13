"use strict";

for (let i = 1; i <= MAX_TRY; i++) {
  const userInput = prompt("Угадай число");
  if (userInput < CORRECT_NUMBER) {
    alert("Больше!");
  };
  if (userInput > CORRECT_NUMBER) {
    alert("Меньше!");
  };
  if (userInput === CORRECT_NUMBER) {
    alert("Молодец");
    alert("try = " + i);
    break;
  };
}


