import { colors } from "./data.js";
function generSelect(colors) {
    let html = `<select id="colors">`;
    for (let color of colors) {
        html += `<option value="${color}">${color}</option>`;
    }
    html += `</select>`;
    return html;
}
const root = document.querySelector("#root");
if (root) {
    root.innerHTML = generSelect(colors);
    document.querySelector("#colors")?.addEventListener("change", (e) => {
        document.body.style.backgroundColor = e.target?.value;
    });
}
