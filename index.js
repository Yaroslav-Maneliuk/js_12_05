"use strict";

/*
написать фунцию, которая проверяет может ли одна строка юыть создана из символов другой строки

compare('test', 'sett'); //true
compare('love', 'move'); //false

1)создать мапу для каждого слова
  -для каждого символа
    -проверять существование ключа(буквы)
      -если есть, то увеличиваем значение
      -если нет, то устанавливаем новую пару ключ:значение(1)
2)сравниваем размер мапы:
  -если по размеру разные. значит false
3) если по размеру одинкаовые:
  -проходимся по ключам одной мапы и сравниваем знасчение у соответствующих ключей второй мапы
*/

function compare(str1, str2) {
  const mapStr1 = new Map();
  for (const letter of str1) {
    //letter->key
    if (mapStr1.has(letter)) {
      const value = mapStr1.get(letter);
      mapStr1.set(letter, value + 1);
    } else {
      mapStr1.set(letter, 1);
    }
  }
  const mapStr2 = new Map();
  for (const letter of str2) {
    //letter->key
    if (mapStr2.has(letter)) {
      const value = mapStr2.get(letter);
      mapStr2.set(letter, value + 1);
    } else {
      mapStr2.set(letter, 1);
    }
  }
  console.log(mapStr1)
  console.log(mapStr2)
  if (mapStr1.size !== mapStr2.size) {
    return false;
  }
  for (const letter of mapStr1.keys()) {
    if(mapStr1.get(letter) !== mapStr2.get(letter)){
      return false;
    }
  }
  return true;
}

console.log(compare("test", "sett"));
console.log(compare("love", "move"));
console.log(compare("qwerty", "qwer"));
