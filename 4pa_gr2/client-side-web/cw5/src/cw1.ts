import  readline from 'readline/promises';

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    let firstname = await read.question('Podaj swoje imię: ');
    let lastname = await read.question('Podaj swoje nazwisko: ');
    let age = parseInt(await read.question('Podaj swój wiek: '));
    read.close();
    console.log(`Witaj ${firstname} ${lastname}, masz ${age} lat.`);    
}
console.log('----- Witaj w programie----');
main();
