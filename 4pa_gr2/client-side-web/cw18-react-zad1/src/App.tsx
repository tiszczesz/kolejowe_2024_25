import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Products, type Product, Categories, getLastId } from "./data/products";
import { FormEvent, useState } from "react";

function App() {
  const [productsList, setProductsList] = useState<Product[]>(Products);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  function handleDelete(id: number): void {
    const newProductList = productsList.filter((p) => p.id !== id);
    setProductsList(newProductList);
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
      productName.trim() !== "" &&
      description.trim() !== "" &&
      price.trim() !== ""
    ) {
      const newProduct = {
        id: getLastId(productsList) + 1,
        name: productName,
        description: description,
        price: parseFloat(price),
        category: category,
      };
      setProductsList([...productsList, newProduct]);
      form.reset();
    }
  }

  return (
    <div className="container">
      <header>
        <h3>Dodaj produkt</h3>
        <form onSubmit={handleSubmit}>
          <div className="row m-2">
            <label htmlFor="productName" className="col-3 text-end">
              Nazwa produktu
            </label>
            <input
              type="text"
              name="productName"
              id="productName"
              className="col-6"
            />
          </div>
          <div className="row m-2">
            <label htmlFor="description" className="col-3 text-end">
              Opis produktu
            </label>
            <textarea
              name="description"
              id="description"
              className="col-6"
            ></textarea>
          </div>
          <div className="row m-2">
            <label htmlFor="price" className="col-3 text-end">
              Cena produktu
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="col-6"
              step={0.01}
            />
          </div>
          <div className="row m-2">
            <label htmlFor="category" className="col-3 text-end">
              Kategoria produktu
            </label>
            <select name="category" id="category" className="col-6">
              {Categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="row m-2">
            <button className="col-6 offset-3 btn btn-outline-primary">
              Dodaj produkt
            </button>
          </div>
        </form>
      </header>
      <hr />
      <section>
        <div className="row">
          <label className="col-3 text-end">Wybierz kategorie prduktów</label>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            name="category"
            className="col-6"
          >
            <option value="all">wszystkie</option>
            {Categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </section>
      <hr />
      <main>
        <h3>Lista produktów ilość: {productsList.length}</h3>
        {productsList.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Lp</th>
                <th>Nazwa</th>
                <th>Opis</th>
                <th>Cena</th>
                <th>Kategoria</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productsList.map(
                (product, index) =>
                  (selectedCategory === product.category ||
                    selectedCategory === "all") && (
                    <tr key={product.id}>
                      <td>{index + 1}</td>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>{product.price.toFixed(2)} zł</td>
                      <td>{product.category}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="btn btn-outline-danger"
                        >
                          USUŃ
                        </button>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        )}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
