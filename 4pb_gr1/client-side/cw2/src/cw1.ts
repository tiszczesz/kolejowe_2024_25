console.log('Hello World');

const words = ['hello', 'world', 'typescript', 'is', 'awesome'];
words.forEach(word => console.log(word.toUpperCase()));
console.log('---');

words.reverse().forEach(word => console.log(word.toUpperCase()));
//const t = generNumbers(10);
const generNumbers = (count: number): number[] => { //mozna uzyc tylko ponizej
    const numbers: number[] = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 100)); //z przedziału 0-99
    }
    return numbers;
}
const t = generNumbers(10);
const numbers = generNumbers(10);

console.log('----------------------------------');

printNumbers(numbers);
function printNumbers(numbers: number[]): void { //widoczna w całym pliku
    numbers.forEach(number => console.log(number));
}
// document.querySelector("#btn1")?.addEventListener((event) =>{})
//1. napisac funkcje ktora zwraca sume liczb z tablicy
function sumNumbers(numbers: number[]): number {
    return numbers.reduce((acc, number) => acc + number, 0);
}
//1. napisac funkcje ktora zwraca sume liczb parzystych lub niepoarzystych z tablicy
function sumEvenNumbers(numbers: number[], isEven: boolean = true): number {
    let totoal = 0;
    for (const elem of numbers) {
        if (isEven && elem % 2 === 0) {
            totoal += elem;
        } else if (!isEven && elem % 2 !== 0) {
            totoal += elem;
        }
    }
    return totoal;
}
console.log(" =======================================");

console.log(sumEvenNumbers([1, 2, 3]));
console.log(sumEvenNumbers([1, 2, 3], false));