import { colors,size } from "./data.js";
console.log('Hello, world!');
console.log(colors);
const colorsToSelect = (colors: string[]) => {
    const select = document.createElement('select');
    select.id = 'colors';
    for (const color of colors) {
        const option = document.createElement('option');
        option.value = color;
        option.innerText = color;
        select.appendChild(option);
    }
    return select;
}
const sizeToSelect = (size: number[]) => {
    const select = document.createElement('select');
    select.id = 'sizeSelect';
    for (const item of size) {
        const option = document.createElement('option');
        option.value = item.toString();
        option.innerText = item.toString();
        select.appendChild(option);
    }
    return select;
}
const root = document.querySelector<HTMLDivElement>('#root');
if(root){
    root.appendChild(colorsToSelect(colors));
    root.appendChild(sizeToSelect(size));
}
//ożywić selecta, zmiana koloru tła na wybrany kolor
const colorsSelect = document.querySelector<HTMLSelectElement>('#colors');
const sizeSelect = document.querySelector<HTMLSelectElement>('#sizeSelect');
if(colorsSelect){
    colorsSelect.addEventListener('change',(e)=>{
        document.body.style.backgroundColor = colorsSelect.value;
    })
}
const info = document.querySelector<HTMLDivElement>('#info');
if(sizeSelect && info){
    sizeSelect.addEventListener('change',()=>{
        info.style.fontSize = sizeSelect.value + 'px';
    });
}