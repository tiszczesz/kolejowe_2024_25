import { readFileSync,writeFileSync } from "node:fs";
import { getWords } from "./data.js";

const input = readFileSync("./input.txt", "utf-8");
const words = getWords(input);
console.log(words);

//zapisac words do pliku output.txt
writeFileSync("./output.txt", words.join("\n"));
//kodowanie Cezara pliku txt
