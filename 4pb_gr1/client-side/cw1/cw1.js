var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var a = 12;
console.log(typeof a); // number
//a = 'hello';
var tab = [1, 2, 3, "4"];
tab.forEach(function (element) {
    if (typeof element === 'number')
        console.log(element.toFixed(2));
});
var b = 'hello'; //definicja zmiennej typu string
var tab1 = [1, 2, 3]; //definicja tablicy liczb
tab1.push(4); //dodanie elementu do tablicy
var tab2 = [34, 78, 22]; //definicja tablicy liczb
var result = __spreadArray(__spreadArray([], tab1, true), tab2, true); //połączenie dwóch tablic
var result2 = [tab1, tab2]; //utworzenie tablicy z dwóch tablic
function Hello(name) {
    return "Hello ".concat(name);
}
console.log(Hello('World'));
console.log(Hello(123)); //error w TS
