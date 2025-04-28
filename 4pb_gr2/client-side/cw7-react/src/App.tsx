import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductComp from "./components/ProductComp";

function App() {
  return (
    <div className="container">
      <h1>Praca z obiektami i stanem</h1>
      <ProductComp />
    </div>
  );
}

export default App;
