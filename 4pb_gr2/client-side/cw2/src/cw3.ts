import * as readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    const name = await rl.question('What is your name? ');
    const age = await rl.question('How old are you? ');
    const length = await rl.question('dlugosc czegos ? ');
    console.log(`Hello, ${name}! age: ${age} length: ${length}`);
    rl.close();
}
//main();
async function toNWD(){
    const a = parseInt(await rl.question('Podaj a: '));
    const b = parseInt(await rl.question('Podaj b: '));
    rl.close();
    console.log(`NWD(${a}, ${b}): ${nwd(a,b)}`);
}
toNWD();
function nwd(a: number, b: number): number {
    if (b == 0) {
        return a;
    } else {
        return nwd(b, a % b);
    }
}
