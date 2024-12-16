//napisac funkcje ktora przyjmuje zbior ksiazek
//  i zwraca tablice ksiazek  w postaci HTMLTableElement
export const BooksTableGener = (data) => {
    const table = document.createElement('table');
    table.classList.add('table');
    table.classList.add('table-striped');
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    trHead.innerHTML = `<th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Realize Date</th>
                        <th>Pages</th>`;
    thead.appendChild(trHead);
    const tbody = document.createElement('tbody');
    for (const book of data) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${book.id}</td>
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.realizeDate.toLocaleDateString()}</td>
                        <td>${book.pages}</td>`;
        tbody.appendChild(tr);
    }
    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
};
export const lastId = (data) => {
    return [...data].sort((a, b) => b.id - a.id)[0].id;
};
