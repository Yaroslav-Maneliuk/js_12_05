"use strict";

//----------------1var-----------------------------//
/*
function string() {
  let string = "tO be OR Not TO bE";
  let splits = string.split(" ");
  let stringFinal = "";

  for (let i = 0; i < splits.length; i++) {
    let Name = splits[i];
    let First = Name.substring(0, 1).toUpperCase();
    let Leftovers = Name.substring(1).toLowerCase();
    stringFinal += First + Leftovers + " ";
  }
  console.log(stringFinal);
}
string();
*/
//----------------2var-----------------------------//
/*
function splitString(string, separator) {
  const arrayOfStrings = string.split(separator);
  for(let i = 0; i < arrayOfStrings.length; i++) {
    arrayOfStrings[i] = arrayOfStrings[i].substr(0,1).toUpperCase() + arrayOfStrings[i].substr(1).toLowerCase();
}
return arrayOfStrings.join(separator);
}
const tempestString = 'sadsadsa dsadas das dss adsa sa sa sad asd ';
const space = ' ';
console.log(splitString(tempestString, space));
*/
//----------------NIKITA -var----------------------//

function stringToUpper(string) {
  return string
    .split(" ")
    .map(function (element) {
      return element[0].toUpperCase() + element.substring(1).toLowerCase();
    })
    .join(" ");
}
console.log(stringToUpper("tO be OR Not TO bE"));

//----------------OLENA-var----------------------//
