import { users } from "./data.js";
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
if (root) {
    root.appendChild(table);
}
console.log(users);
