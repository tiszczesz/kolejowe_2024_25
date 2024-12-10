import { colors } from "./data.js";

function generSelect(colors: string[]): string {
   let html = `<select id="colors">`;
    for (let color of colors) {
         html += `<option value="${color}">${color}</option>`;
    }
    html += `</select>`;
    return html;
}

const root = document.querySelector<HTMLDivElement>("#root");
if (root) {
    root.innerHTML = generSelect(colors);
    document.querySelector<HTMLSelectElement>("#colors")?.addEventListener("change", (e) => {
        document.body.style.backgroundColor = (e.target as HTMLSelectElement)?.value;
    });
}