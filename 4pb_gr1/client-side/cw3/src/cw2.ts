import fs from 'node:fs';
import { colors } from './data.js';

const input = fs.readFileSync('input.txt', 'utf8').replace("\r","").split('\n');
console.log(input);
// fs.writeFileSync("output.txt", colors.join('-'), 'utf8');
// console.log(input);
// fs.appendFileSync("output.txt", "\n nowa linijka do pliku", 'utf8');