import { readFileSync, writeFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { getWords } from "./data.js";



const input = readFileSync("./input.txt", "utf-8");
const words = getWords(input);
console.log(words);

//zapisac words do pliku output.txt
writeFileSync("./output.txt", words.join("\n"));
//kodowanie Cezara pliku txt
const isLetter = (char: string) => /[a-zA-Z]/.test(char);
const Cezar = (text: string, key: number) => {
    key = key % 26;
    let result = "";
    for (let i = 0; i < text.length; i++) {

        if (isLetter(text[i])) {
            let code = text.charCodeAt(i);
            code += key;
            if (isLetter(String.fromCharCode(code))) {
                result += String.fromCharCode(code);
            } else {
                result += String.fromCharCode(code - 26);
            }

        } else {
            result += text[i];
        }
    }
    return result;
}
console.log(Cezar("Alał ma kota123zZ", 1));
const doZakodowania = readFileSync("napis.txt", "utf-8");
writeFileSync("zakodowane.txt", Cezar(doZakodowania, 1));

//zadanie 2 uzycie readFile z fs/promises
const main = async () => {
    try {
        const input2 = await readFile("./input.txt", "utf-8");
        console.log(input2);
    } catch (error) {
        console.log(error);
    }
   
}
main();
console.log("koniec");
