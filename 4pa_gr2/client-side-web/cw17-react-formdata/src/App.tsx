import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { products, type Product, categories } from "./data/products";
import { useState } from "react";

function App() {
  //zarządanie stanem listy produktów rendering przy zmianie stanu
  const [productsList, setProductsList] = useState<Product[]>(products);

  return (
    <main className="row m-2">
      <section className="col-6">
        <h2>Dodawanie produktu</h2>
      </section>
      <section className="col-6">
        <h2>Lista produktów</h2>
        {productsList.length > 0 &&
          productsList.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
              }}
            >
              <h5>{product.name}</h5>
              <p>opis: {product.description}</p>
              <p>cena: {product.price} zł</p>
              <p>kategoria: {product.category}</p>
            </div>
          ))}
      </section>
    </main>
  );
}

export default App;
