import { colors, users } from "./data.js";
function userTable(users) {
    const table = document.createElement('table');
    table.classList.add('table');
    table.classList.add('table-striped');
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Login</th>
            <th>Password</th>
            <th>Date</th>
        </tr>
    `;
    table.appendChild(thead);
    const tbody = document.createElement('tbody');
    for (const user of users) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.login}</td>
            <td>${user.password}</td>
            <td>${user.date.toLocaleDateString()}</td>
        `;
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    return table;
}
const table = userTable(users);
const root = document.querySelector('#root');
const root2 = document.querySelector('#root2');
function generSelectColors(colors) {
    const select = document.createElement('select');
    //todo add li to select
    for (const color of colors) {
        const option = document.createElement('option');
        option.value = color;
        option.textContent = color;
        select.appendChild(option);
    }
    return select;
}
if (root) {
    root.appendChild(table);
}
if (root2) {
    const select = generSelectColors(colors);
    root2.appendChild(select);
}
console.log(users);
