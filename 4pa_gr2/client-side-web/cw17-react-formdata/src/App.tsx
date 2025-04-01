import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { products, type Product, categories } from "./data/products";
import { FormEvent, useState } from "react";

function App() {
  //zarządanie stanem listy produktów rendering przy zmianie stanu
  const [productsList, setProductsList] = useState<Product[]>(products);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <main className="row m-2">
      <section className="col-6">
        <h2>Dodawanie produktu</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            type="text"
            name="productName"
            placeholder="nazwa produktu"
          />
          <br />
          <input type="number" name="price" 
          className="form-control mb-2"
          placeholder="cena produktu" />
          <br />
          <textarea
            className="form-control mb-2"
            name="description"
            placeholder="opis produktu"
            rows={5}
            cols={30}
          ></textarea>
          <br />
          <select name="category" className="form-control mb-2">
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <br />
          <button>Zatwierdź</button>
        </form>
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
