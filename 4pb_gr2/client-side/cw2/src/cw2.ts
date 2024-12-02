import fs from 'fs';
import { colors } from './models/data.js';
import { getFromFile } from './models/info.js';

//DO JEDNEGO stringa
const input = fs.readFileSync('input.txt', 'utf-8');

//DO TABLICY stringów
const lines = fs.readFileSync('input.txt', 'utf-8').replace(/\r/g, '').split('\n');
console.log(input);
console.log(lines);
fs.writeFileSync('output.txt', colors.join('\n'), 'utf-8');
async function main(){
    const infoLines = await getFromFile('info.txt')
    console.log(infoLines);
}
main();
console.log(" ----- KONIEC -----");

