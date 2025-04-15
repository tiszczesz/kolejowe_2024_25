import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { products, categories, getLastId, type Product } from "./data/products";
import { useState } from "react";
function App() {
  const [productList, setProductList] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string>(""); 
  function handleDeleteProduct(id: number) {
    const newList = productList.filter((product) => product.id !== id);
    setProductList(newList);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const productName = formData.get("productName") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;
    const category = formData.get("category") as string;
    if (
      productName === "" ||
      description === "" ||
      price === "" ||
      category === ""
    ) return;
    const newProduct: Product = {
      id: getLastId(products) + 1,
      name: productName,
      description: description,
      price: parseFloat(price),
      category: category,
    };    
    setProductList([...productList, newProduct]);
    form.reset();
    console.log("form", form);
  }

  return (
    <div className="container">
      <h1>Produkty</h1>
      <section>
        <h3>Dodawanie produktu</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="podaj nazwę produktu"
            name="productName"
          />
          <br />
          <textarea
            name="description"
            placeholder="podaj opis produktu"
          ></textarea>
          <br />
          <input type="number" name="price" placeholder="cena" step={0.01} />
          <br />
          <select name="category">
            {categories.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
          <br />
          <button type="submit" className="btn btn-outline-primary w-50">
            DODAJ
          </button>
        </form>
      </section>
      <section>
        <h3>Wybierz kategorię wyświetlanych produktów</h3>
        <select name="category">
          <option value="">Wszystkie</option>
            {categories.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
      </section>
      <section>
        <h3>Lista produktów ilość: {productList.length}</h3>
        {productList.length > 0 && (
          <div>
            {productList.map((product) => (
              <div className="product" key={product.id}>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p>
                  cena: <b>{product.price} PLN</b>
                </p>
                <p>
                  kategoria: <i>{product.category}</i>
                </p>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="btn btn-outline-danger w-50"
                >
                  USUŃ
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
