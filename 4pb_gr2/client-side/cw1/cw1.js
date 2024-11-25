console.log(2 + 5);
var tab = [1, 2, 3, 4, 5];
var tab3 = [2, 4, 6, "ala ma kota", "hhhh", true];
var tab2 = tab.map(function (el) { return el * el; });
//const tab4 = tab3.map((el) => el * el);
var a = 12;
console.log(a + 45);
//a = "ala ma kota";
//console.log(a+45);
console.log(tab2);
//console.log(tab4);
var words = ["ala", "ma", "kota"];
function generHTML(words, html) {
    //zwaraca stringa z html
    // let result = [];
    // for(let word of words){
    //     result += `<${html}>${word}</${html}>`;
    // }
    return words.map(function (word) { return "<".concat(html, ">").concat(word, "</").concat(html, ">"); });
}
var result = generHTML(words, "div");
var result2 = generHTML(words, "li");
console.log(result);
console.log(result2);
var t1 = ["ala", "ma", "kota", 5, true, [3, 7]];
t1.forEach(function (el) {
    if (typeof el === "string") {
        console.log(el.toUpperCase());
    }
    else {
        console.log(el);
    }
});
