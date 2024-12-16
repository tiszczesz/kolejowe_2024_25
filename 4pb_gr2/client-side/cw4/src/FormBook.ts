import { BooksTableGener, lastId } from "./BooksTable.js";
import { books } from "./mydata.js";

export const formBookGener = (): HTMLFormElement => {
    const form = document.createElement('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const title = form.bookTitle.value;
        const author = form.author.value;
        const realizeDate = new Date(form.realizeDate.value);
        const pages = parseInt(form.pages.value);
        console.log(title, author, realizeDate, pages);
        books.push({
            id: lastId(books) + 1,
            title,
            author,
            realizeDate,
            pages
        })
        const table = document.querySelector<HTMLTableElement>('.table');
        console.log(books);
        
        table?.remove();
        const root = document.querySelector<HTMLDivElement>('#root');
        root?.appendChild(BooksTableGener(books));
        form.reset();
    });
    form.id = 'formBook';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'bookTitle';
    titleInput.placeholder = 'Title';
    form.appendChild(titleInput);

    const authorInput = document.createElement('input');
    authorInput.type = 'text';
    authorInput.name = 'author';
    authorInput.placeholder = 'Author';
    form.appendChild(authorInput);

    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.name = 'realizeDate';
    form.appendChild(dateInput);

    const pagesInput = document.createElement('input');
    pagesInput.type = 'number';
    pagesInput.name = 'pages';
    form.appendChild(pagesInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Add Book';
    form.appendChild(submitButton);

    return form;
}