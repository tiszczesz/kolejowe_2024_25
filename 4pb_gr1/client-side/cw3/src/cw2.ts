import fs from 'node:fs';
import { colors, getLines, howManyLetters, saveInfo } from './data.js';

const input = fs.readFileSync('input.txt', 'utf8').replace("\r", "").split('\n');
console.log(input);
// fs.writeFileSync("output.txt", colors.join('-'), 'utf8');
// console.log(input);
// fs.appendFileSync("output.txt", "\n nowa linijka do pliku", 'utf8');
const lines = getLines("info2.txt");
console.log(lines);
const info = {
    count: lines.length,
    chars: lines.join('').length,
    words: lines.join(' ').split(' ').length,
    letters: howManyLetters(lines),
    vovels: lines.join('').match(/[aeiouAEIOU]/gi)?.length,
};
console.log(info);
saveInfo("info.json", info);
