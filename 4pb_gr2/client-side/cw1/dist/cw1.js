"use strict";
console.log(2 + 5);
const tab = [1, 2, 3, 4, 5];
const tab3 = [2, 4, 6, "ala ma kota", "hhhh", true];
const tab2 = tab.map((el) => el * el);
//const tab4 = tab3.map((el) => el * el);
let a = 12;
console.log(a + 45);
//a = "ala ma kota";
//console.log(a+45);
console.log(tab2);
//console.log(tab4);
const words = ["ala", "ma", "kota"];
function generHTML(words, html) {
    //zwaraca stringa z html
    // let result = [];
    // for(let word of words){
    //     result += `<${html}>${word}</${html}>`;
    // }
    return words.map((word) => `<${html}>${word}</${html}>`);
}
const result = generHTML(words, "div");
const result2 = generHTML(words, "li");
console.log(result);
console.log(result2);
const t1 = ["ala", "ma", "kota", 5, true, [3, 7]];
t1.forEach((el) => {
    if (typeof el === "string") {
        console.log(el.toUpperCase());
    }
    else {
        console.log(el);
    }
});
