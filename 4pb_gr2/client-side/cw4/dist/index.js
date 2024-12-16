import { colors } from "./mydata.js";
import { generSelect } from "./MySelect.js";
const root = document.querySelector('#root');
if (root) {
    root.appendChild(generSelect(colors));
}
