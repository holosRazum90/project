'use strict'; // стройгий режим прописывается в начале, используй всегда!

let number = 5;

const leftBorderWidth = 1;

number = 10;
console.log(number);

//leftBorderWidth = 10; // никак, так как константа не меняется.

const obj = {
    a: 50
};
obj.a = 10;

console.log(obj);

console.log(-4/0);

const ans = +prompt("Сколько телет?", "18");
// +prompt - значение будет числовым а не строчным