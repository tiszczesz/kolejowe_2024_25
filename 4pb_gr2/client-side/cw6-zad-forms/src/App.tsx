import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <header></header>
      <main>
        <section>
          <form>
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
            <button type="submit">Zamów</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
