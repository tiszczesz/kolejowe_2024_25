import { ComponentProps, useState } from "react";
import { Book, books, genres } from "../data/books-data";
import BookComponent from "./BookComponent";
type Props = {
  handleAdd: (book: Book) => void;
} & ComponentProps<"div">;
const BooksList = (props: Props) => {
  //const [booksList, setBooksList] = useState(books);
  const [selectedGenre, setSelectedGenre] = useState("all");
  return (
    <div style={{}}>
      <h2 className="header">Lista książek</h2>
      <div className="row m-2">
        <label htmlFor="selectedGenre" className="col-3 text-end">
          Wybierz gatunek:
        </label>
        <select
          className="col-6"
          name="selectedGenre"
          onChange={(e) => setSelectedGenre(e.target.value)}
          id="selectedGenre"
        >
          <option value="all">all</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <section
        className="d-flex flex-wrap justify-content-center"
        style={{
          gap: "10px",
          minWidth: "1000px",
        }}
      >
        {books.map(
          (book) =>
            (selectedGenre === book.genre || selectedGenre === "all") && (
              <BookComponent
                key={book.id}
                book={book}
                addToBasket={props.handleAdd}
              />
            )
        )}
      </section>
    </div>
  );
};

export default BooksList;
