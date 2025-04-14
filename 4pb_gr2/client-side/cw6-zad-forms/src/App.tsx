import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

interface MyFormData {
  firstName: string;
  lastName: string;
  address: string;
  pizzaName: string;
  orderType: string;
  extras: string[];
  paymentMethod: string;
}
function App() {
  const [formData, setFormData] = useState<MyFormData | null>(null);
  const handleSubmit = (data: FormData) => {
    const fromForm = {
      firstName: data.get("firstName") as string,
      lastName: data.get("lastName") as string,
      address: data.get("address") as string,
      pizzaName: data.get("pizzaName") as string,
      orderType: data.get("orderType") as string,
      extras: data.getAll("extras") as string[],
      paymentMethod: data.get("paymentMethod") as string,
    };
    console.log(fromForm);
    setFormData(fromForm);
  };
  return (
    <>
      <header></header>
      <main>
        <section>
          <form action={handleSubmit}>
            <div className="form-group mb-2">
              <label htmlFor="firstName">Imię:</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="lastName">Nazwisko:</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
            <div className="form-grou mb-2">
              <label htmlFor="address">Adres:</label>
              <input type="text" id="address" name="address" required />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="pizzaName">Pizza nazwa:</label>
              <input type="text" id="pizzaName" name="pizzaName" required />
            </div>
            <div className="form-group mb-2">
              <span>Rodzaj zamówienia:</span>
              <br />
              <label className="radio">
                <input
                  type="radio"
                  name="orderType"
                  value="naMiejscu"
                  required
                />{" "}
                Na miejscu
              </label>
              <br />
              <label className="radio">
                <input type="radio" name="orderType" value="naWynos" required />{" "}
                Na wynos
              </label>
            </div>
            <div className="form-group mb-2">
              <span>Dodatki:</span>
              <br />
              <label className="radio">
                <input type="checkbox" name="extras" value="ser" /> Ser
              </label>
              <br />
              <label className="radio">
                <input type="checkbox" name="extras" value="szynka" /> Szynka
              </label>
              <br />
              <label className="radio">
                <input type="checkbox" name="extras" value="pieczarki" />{" "}
                Pieczarki
              </label>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="paymentMethod">Rodzaj płatności:</label>
              <select id="paymentMethod" name="paymentMethod" required>
                <option value="karta">Karta</option>
                <option value="gotowka">Gotówka</option>
                <option value="blik">Blik</option>
              </select>
            </div>
            <button
              style={{
                marginLeft: "205px",
                width: "100px",
                height: "40px",
              }}
              type="submit"
            >
              Zamów
            </button>
          </form>
        </section>
        <section>
          {formData && JSON.stringify(formData, null, 2)}
        </section>
      </main>
    </>
  );
}

export default App;
