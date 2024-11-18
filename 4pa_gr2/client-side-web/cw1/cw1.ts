let firstname = "John";
let lastname: string = "Doe";
let age: number = 20;
console.log(firstname + " "
    + lastname + " is "
    + age + " years old.");
const t1: string[] = ["a", "b", "c", "olo", "Ania"];
const t2: Array<number> = [1, 2, 3, 4, 5];
for (const elem of t1) {
    console.log(elem.toUpperCase());
}
for (const elem of t2) {
    console.log(elem.toFixed(2));
}
type dd = number | string;
function add(a: dd, b: dd): dd {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return a.toString() + b.toString();
}

console.log(add(23, 3));
console.log(add('23', 3));