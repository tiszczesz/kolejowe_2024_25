import { readFile } from "fs/promises";
export const getFromFile = async (filename: string): Promise<string[]> => {
    return readFile(filename, 'utf-8')
       .then(data=>data.replace(/\r/g, ''))
       .then(data => data.split('\n'));
}