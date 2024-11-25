let a = 12;
console.log(typeof a); // number
//a = 'hello';
const tab = [1, 2, 3, "4"];
tab.forEach((element) => {
    if (typeof element === 'number')
        console.log(element.toFixed(2));
});
let b: string = 'hello';//definicja zmiennej typu string
const tab1: number[] = [1, 2, 3];//definicja tablicy liczb
tab1.push(4);//dodanie elementu do tablicy
const tab2: Array<number> = [34, 78, 22];//definicja tablicy liczb
const result = [...tab1, ...tab2];//połączenie dwóch tablic
const result2: number[][] = [tab1, tab2];//utworzenie tablicy z dwóch tablic

function Hello(name: string): string {
    return `Hello ${name}`;
}
console.log(Hello('World'));
//console.log(Hello(123));//error w TS
