export const colors = ["red", "green", "blue"];

export type Book = {
    title: string;
    ISBN: string;
    author: string;
    price: number;
}

export const books: Book[] = [
    {
        title: "The Alchemist",
        ISBN: "9780062315007",
        author: "Paul Coelho",
        price: 10.99
    },
    {
        title: "The Little Prince",
        ISBN: "9780156012195",
        author: "Antoine de Saint-Exupéry",
        price: 8.99
    },
    {
        title: "The Da Vinci Code",
        ISBN: "9780307474278",
        author: "Dan Brown",
        price: 12.99}
    ];