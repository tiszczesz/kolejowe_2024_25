import { readFileSync, writeFileSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { getMaxWord, getWords } from './data.js';
const data = readFileSync('input.txt', 'utf8');

// const data2 = readFile('input.txt', 'utf8');
// data2.then((result) => {console.log(result);});
async function main() {
    const data2 = await readFile('input.txt', 'utf8');
    console.log(data2);
}

main();
const words = getWords(data);
//console.log(words);
//console.log(data);
console.log(getMaxWord(words));

const info = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
//zapis do pliku output1.txt synchorniczny 
//a potem asynchroniczny zapis do pliku output2.txt
console.log(' ============== END ==================');