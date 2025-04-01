import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { products, type Product, categories, getLastId } from "./data/products";
import { FormEvent, useState } from "react";

function App() {
  //zarządanie stanem listy produktów rendering przy zmianie stanu
  const [productsList, setProductsList] = useState<Product[]>(products);
  const [newProduct, setNewProduct] = useState<Product | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    // console.log(event.currentTarget);
    const formData = new FormData(event.currentTarget);
    const productName = formData.get("productName") as string;
    const price = parseFloat(formData.get("price") as string);
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    if (
      productName === "" ||
      isNaN(price) ||
      description === "" ||
      category === ""
    ) {
      alert("Wszystkie pola są wymagane");
      return;
    }
    const product: Product = {
      id: getLastId() + 1,
      name: productName,
      price: price,
      description: description,
      category: category,
    };
    setNewProduct(product);
    setProductsList((prevProducts) => [...prevProducts, product]);
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
          <input
            type="number"
            name="price"
            className="form-control mb-2"
            placeholder="cena produktu"
          />
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
          <button className="btn btn-primary w-100">Zatwierdź</button>
        </form>
        <hr />
        {newProduct && (
          <div
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h5>{newProduct.name}</h5>
            <p>opis: {newProduct.description}</p>
            <p>cena: {newProduct.price} zł</p>
            <p>kategoria: {newProduct.category}</p>
          </div>
        )}
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
