export type Book = {
    id: number;
    title: string;
    price: number;
    author: string;
    genre: string;
};
export const books: Book[] = [
    { id: 1, title: "To Kill a Mockingbird", price: 39.99, author: "Harper Lee", genre: "Fiction" },
    { id: 2, title: "1984", price: 29.99, author: "George Orwell", genre: "Dystopian" },
    { id: 3, title: "The Great Gatsby", price: 25.99, author: "F. Scott Fitzgerald", genre: "Classic" },
    { id: 4, title: "The Catcher in the Rye", price: 34.99, author: "J.D. Salinger", genre: "Fiction" },
    { id: 5, title: "Moby Dick", price: 45.99, author: "Herman Melville", genre: "Adventure" },
    { id: 6, title: "Pride and Prejudice", price: 19.99, author: "Jane Austen", genre: "Romance" },
    { id: 7, title: "The Hobbit", price: 49.99, author: "J.R.R. Tolkien", genre: "Fantasy" },
    { id: 8, title: "War and Peace", price: 59.99, author: "Leo Tolstoy", genre: "Historical" },
    { id: 9, title: "The Alchemist", price: 24.99, author: "Paulo Coelho", genre: "Philosophical" },
    { id: 10, title: "Crime and Punishment", price: 39.99, author: "Fyodor Dostoevsky", genre: "Psychological" }
];
export const genres = [
    "Fiction",
    "Dystopian",
    "Classic",
    "Adventure",
    "Romance",
    "Fantasy",
    "Historical",
    "Philosophical",
    "Psychological"
];
export const getMaxId = (books: Book[]): number => {
    return books.reduce((maxId, book) => Math.max(maxId, book.id), 0);
}