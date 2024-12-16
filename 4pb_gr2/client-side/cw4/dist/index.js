import { BooksTableGener, lastId } from "./BooksTable.js";
import { formBookGener } from "./FormBook.js";
import { books, colors } from "./mydata.js";
import { generSelect } from "./MySelect.js";
const root = document.querySelector('#root');
if (root) {
    root.appendChild(generSelect(colors));
    root.appendChild(formBookGener());
    root.appendChild(BooksTableGener(books));
}
console.log(lastId(books));
// napisac funkcje ktora przyjmuje zbior ksiazek
//  i zwraca tablice ksiazek  w postaci HTMLTableElement
