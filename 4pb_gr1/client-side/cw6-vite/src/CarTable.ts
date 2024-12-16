import { Car } from "./data";

export const CarTableGener = (list: Car[]): HTMLTableElement => {
    const table = document.createElement("table");
    table.classList.add("table");
    table.classList.add("table-striped");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const trhead = document.createElement("tr");
    trhead.innerHTML = `
        <th>Id</th>
        <th>Brand</th>
        <th>Model</th>
        <th>Year</th>
        `;
    thead.appendChild(trhead);
    table.appendChild(thead);
    for (const car of list) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${car.id}</td>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.year}</td>
            `;
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    return table;
}