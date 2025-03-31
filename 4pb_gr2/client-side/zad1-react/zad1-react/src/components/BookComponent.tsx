import { Book } from "../data/books-data";

type Props = {
  book: Book;
  addToBasket: (book: Book) => void;
};

const BookComponent = ({ book, addToBasket }: Props) => {
  return (
    <div key={book.id} className="card w-25 bg-light mb-3 p-3">
      <h4 className="card-title">{book.title}</h4>
      <section className="card-body">
        <p>Autor: {book.author}</p>
        <p>Cena: {book.price} zł</p>
        <p>Gatunek: {book.genre}</p>
        <button className="btn btn-primary" onClick={() => addToBasket(book)}>
          Dodaj do koszyka
        </button>
      </section>
    </div>
  );
};

export default BookComponent;
