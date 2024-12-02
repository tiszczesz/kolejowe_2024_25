import fs from 'node:fs';
import { readFile } from 'node:fs/promises';
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

//użycie promises i then
// readFile("input.txt", "utf8").then(data => {
//     console.log(data);
// });

//użycie async/await
 async function  main(){
    const result = await readFile("input.txt", "utf8"); //result  czeka na wynik
    console.log(result);
}
main();
console.log(" ========== KONIEC SKRYPTU ==========");


// console.log(info);
// saveInfo("info.json", info);
