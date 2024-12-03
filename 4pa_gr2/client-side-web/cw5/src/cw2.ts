// podaj a
// podaj b
// nwdRek(a,b) = ? funkcja rekurencyjna
// nwdIter(a,b) = ? funkcja iteracyjna
import readLine from "readline/promises";
const read = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
const nwdRek = (a: number, b: number): number => {
    if (b === 0) {
        return a;
    }
    return nwdRek(b, a % b);
};
const nwdIter = (a: number, b: number): number => {
    while (b !== 0) {
        let c = a % b;
        a = b;
        b = c;
    }
    return a;
};
const main = async () => {

    let a = parseInt(await read.question('Podaj liczbę a: '));
    let b = parseInt(await read.question('Podaj liczbę b: '));
    read.close();
    console.log(`NWDRek(${a},${b}) = ${nwdRek(a, b)}`);
    console.log(`NWDIter(${a},${b}) = ${nwdIter(a, b)}`);
}; 
main();