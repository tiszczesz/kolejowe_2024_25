import path from "path";
import { colors } from "./data.js";
import { fileURLToPath } from "url";

console.log(colors); // ["red", "green", "blue"]
// console.log(__dirname); // /path/to/project/src
// console.log(__filename); // /path/to/project/src/first.ts

const __filname = fileURLToPath(import.meta.url);
console.log(path.basename(__filname)); 
console.log(fileURLToPath(__filname)); // /path/to/project/src/first.ts

const __dirname = path.dirname(__filname);
console.log(__dirname); // /path/to/project/src


