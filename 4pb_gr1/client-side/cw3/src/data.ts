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

const getLines = (filename: string): string[] => {
    const result = fs.readFileSync(filename, "utf8").replace("\r", "").split('\n');
    return result;
};
Object.keys(student).forEach(key => {
    console.log(key);
});
Object.values(student).forEach(value => {
    console.log(value);
});
