"use strict";
let a = 12;
let b = 12; // type inference
console.log(`a: ${a}, b: ${b}`);
console.log(`a type : ${typeof a}, b type : ${typeof b}`);
const t1 = ['a', 'b', 'c'];
const t2 = ['a', 'b', 'c', 5]; //ok
// t1.push(12);// error
t1.push('d'); //ok
// t1.push(true);//error
t2.forEach((elem) => console.log(elem));
//t2.forEach((elem)=>console.log(elem.toUpperCase()));//error
t1.forEach((elem) => console.log(elem.toUpperCase()));
