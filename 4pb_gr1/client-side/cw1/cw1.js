var a = 12;
console.log(typeof a); // number
//a = 'hello';
var tab = [1, 2, 3, "4"];
tab.forEach(function (element) {
    if (typeof element === 'number')
        element.toFixed(2);
});
