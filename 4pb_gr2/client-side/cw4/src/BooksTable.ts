import { Book } from "./mydata.js";

//napisac funkcje ktora przyjmuje zbior ksiazek
//  i zwraca tablice ksiazek  w postaci HTMLTableElement

export const BooksTable = (data: Book[]): HTMLTableElement => {
    const table = document.createElement('table');


    return table;
}