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

function createMap(str){
  const mapStr = new Map();
  for (const letter of str1) {
    if (mapStr.has(letter)) {
      const value = mapStr.get(letter);
      mapStr.set(letter, value + 1);
    } else {
      mapStr.set(letter, 1);
    }
  }
  return mapStr;
}
function compare(str1, str2) {
  const mapStr1 = createMap(str1);
  const mapStr2 = createMap(str2);
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
