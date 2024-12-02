import { colors,student, showColors, ShowWithForIn} from './data.js';
const myColors = colors; 
showColors(myColors);
ShowWithForIn(myColors);
for (let item in student) {
    console.log(item);
}
//console.log(myColors);