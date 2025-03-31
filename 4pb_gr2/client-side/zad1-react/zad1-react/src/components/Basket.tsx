import { ComponentProps } from "react";
import { Book } from "../data/books-data";

type Props = {
  basketList: Book[];
} & ComponentProps<"div">;

const Basket = (props: Props) => {
    // Calculate the total cost of the books in the basket
    const totalCost = props.basketList.reduce((total, book) => total + book.price, 0);
  return (
    <div className={props.className}>
      <h2 className="header">Lista zakupów całkowity koszt: {totalCost.toFixed(2)} zł</h2>
      {props.basketList.length === 0 ? (
        <p style={{textAlign:"center"}}>Brak książek w koszyku</p>
      ) : (
        <ol>
          {props.basketList.map((book, id) => (
            <li key={id}>
              {book.title} cena: {book.price}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Basket;
