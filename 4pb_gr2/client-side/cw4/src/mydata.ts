export const colors = ['red', 'green', 'blue', 'yellow', 'black', 'white'];

export interface Book{
    id: number;
    title: string;
    author: string;
    realizeDate: Date;
    pages: number;
}
export const books: Book[] = [
    { id: 1, title: '1984', author: 'George Orwell', realizeDate: new Date('1949-06-08'), pages: 328 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', realizeDate: new Date('1960-07-11'), pages: 281 },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', realizeDate: new Date('1925-04-10'), pages: 180 },
    { id: 4, title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', realizeDate: new Date('1967-06-05'), pages: 417 },
    { id: 5, title: 'Moby Dick', author: 'Herman Melville', realizeDate: new Date('1851-10-18'), pages: 635 },
    { id: 6, title: 'War and Peace', author: 'Leo Tolstoy', realizeDate: new Date('1869-01-01'), pages: 1225 },
    { id: 7, title: 'Pride and Prejudice', author: 'Jane Austen', realizeDate: new Date('1813-01-28'), pages: 279 },
    { id: 8, title: 'The Catcher in the Rye', author: 'J.D. Salinger', realizeDate: new Date('1951-07-16'), pages: 214 },
    { id: 9, title: 'The Hobbit', author: 'J.R.R. Tolkien', realizeDate: new Date('1937-09-21'), pages: 310 },
    { id: 10, title: 'Fahrenheit 451', author: 'Ray Bradbury', realizeDate: new Date('1953-10-19'), pages: 194 }
];