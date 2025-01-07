import { Todo } from "../MyTypes/tools";

export const TodosTable = (todos: Todo[]): HTMLTableElement => {
    const table = document.createElement('table');
    table.className = "table table-striped";
    const theader = document.createElement('theader');
    theader.innerHTML = `
        <tr>
            <th>userId</th>
            <th>title</th>
            <th></th>
        </tr>
    `
    table.appendChild(theader);
    const tbody = document.createElement('tbody');
    todos.forEach(todo => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${todo.userId}</td>
            <td>${todo.title}</td>
            <td>
                ${todo.completed ? '<span class="badge bg-success">Completed</span>' : '<span class="badge bg-danger">Not completed</span>'}
            </td>
        `
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    return table;
};