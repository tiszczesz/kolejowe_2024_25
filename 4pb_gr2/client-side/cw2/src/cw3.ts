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
main();
