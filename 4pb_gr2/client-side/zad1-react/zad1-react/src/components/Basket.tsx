import { ComponentProps } from "react";
import { Book } from "../data/books-data";

type Props = {
  basketList: Book[];
} & ComponentProps<"div">;

const Basket = (props: Props) => {
    // Calculate the total cost of the books in the basket
    const totalCost = props.basketList.reduce((total, book) => total + book.price, 0);
  return (
    <div style={{ width: "40%" }} className="bg-light m-2 p-3">
      <h2 className="header">Lista zakupów całkowity koszt: {totalCost.toFixed(2)} zł</h2>
      {props.basketList.length === 0 ? (
        <p style={{textAlign:"center"}}>Brak książek w koszyku</p>
      ) : (
        <ol>
          {props.basketList.map((book, id) => (
            <li key={id} className="d-flex justify-content-between align-items-center" style={{
                listStyleType: "none",
                padding: "10px",
                borderBottom: "1px solid #ccc",
            }}>
              {book.title} cena: {book.price}
              <button className="btn btn-outline-danger">x</button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Basket;
