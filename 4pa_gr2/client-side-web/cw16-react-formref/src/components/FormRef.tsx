import { FormEvent, useRef, useState } from "react";
import { categories } from "../data/categories";
type FormResult = {
  name: string;
  price: number;
  category: string;
};
export default function FormRef() {
  const [formResult, setFormResult] = useState<FormResult | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault(); //wyłączenie domyślnej akcji formularza
    if (nameRef.current && priceRef.current && categoryRef.current) {
      const name = nameRef.current.value;
      const price = parseFloat(priceRef.current.value);
      const category = categoryRef.current.value;
      if (name === "" || isNaN(price) || category === "") {
        setFormResult(null);
        return;
      }
      setFormResult({ name, price, category });
      console.log(name, price, category);
    }
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row m-2">
          <label htmlFor="name" className="col-3 text-end">
            Nazwa produktu
          </label>
          <input ref={nameRef} id="name" type="text" className="col-6" />
        </div>
        <div className="row m-2">
          <label htmlFor="price" className="col-3 text-end">
            Cena produktu
          </label>
          <input
            ref={priceRef}
            id="price"
            type="number"
            className="col-6"
            step="0.01"
          />
        </div>
        <div className="row m-2">
          <label className="col-3 text-end" htmlFor="category">
            Wybierz kategorię
          </label>
          <select
            ref={categoryRef}
            className="col-6"
            name="category"
            id="category"
          >
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
      <hr />
      {formResult && (
        <div className="info">
          <h3>Informacje o produkcie</h3>
          <p>Nazwa: {formResult.name}</p>
          <p>Cena: {formResult.price}zł</p>
          <p>Kategoria: {formResult.category}</p>
        </div>
      )}
    </>
  );
}
//export default FormRef;
