import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductComp from "./components/ProductComp";
import motyl1 from "/images/motyl1.jpg";

function App() {
  return (
    <div className="container">
      <h1>Praca z obiektami i stanem</h1>
      <ProductComp />
      <hr />
      <div>
        <img src={motyl1} alt={motyl1} />
      </div>
    </div>
  );
}

export default App;
