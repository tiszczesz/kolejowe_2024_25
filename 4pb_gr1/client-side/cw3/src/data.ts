
import fs from 'fs';
export const colors = ["red", "green", "blue", "yellow", "pink"];
export const numbers = [1, 2, 3, 4, 5];
export const student = {
    name: "John",
    age: 25,
    course: "IT",
    address: {
        city: "New York",
        street: "Broadway"
    }
}
export const showColors = (data: string[]) => {
    for (let color of data) {
        console.log(color);
    }
}
export const ShowWithForIn = (data: string[]) => {
    for (let index in data) {
        console.log(index, data[index]);
    }
}

export const getLines = (filename: string): string[] => {
    return fs.readFileSync(filename, "utf8").replace(/\r/g, "").split("\n");
    // console.log(content);

};

export const howManyLetters = (data: string[]): number => {
    let total = 0;
    for (let line of data) {
        for (let letter of line) {
            if (letter.match(/[a-zA-Z]/)) {
                total++;
            }
        }        
    }
    return total;
}
Object.keys(student).forEach(key => {
    console.log(key);
});
Object.values(student).forEach(value => {
    console.log(value);
});
export const saveInfo = (filename: string, data: any) => {
    const content = JSON.stringify(data, null, 2);
    fs.writeFileSync(filename, content, "utf8");
};
