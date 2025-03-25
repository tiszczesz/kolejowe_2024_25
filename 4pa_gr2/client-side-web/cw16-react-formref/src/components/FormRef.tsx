import { FormEvent } from "react";
import { categories } from "../data/categories";

export default function FormRef() {
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="row m-2">
        <label htmlFor="name" className="col-3 text-end">
          Nazwa produktu
        </label>
        <input id="name" type="text" className="col-6" />
      </div>
      <div className="row m-2">
        <label htmlFor="price" className="col-3 text-end">
          Cena produktu
        </label>
        <input id="price" type="number" className="col-6" step="0.01" />
      </div>
      <div className="row m-2">
        <label className="col-3 text-end" htmlFor="category">
          Wybierz kategorię
        </label>
        <select className="col-6" name="category" id="category">
          {categories.map((elem, i) => (
            <option key={i} value={elem}>
              {elem}
            </option>
          ))}
        </select>
      </div>
      <div className="row m-2">
        <button className="btn btn-primary offset-3 col-6">Zapisz</button>
      </div>
    </form>
  );
}
//export default FormRef;
