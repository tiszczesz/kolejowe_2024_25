import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormWithFormData from "./components/FormWithFormData";

function App() {
  return (
    <>
      <h1>Formularze</h1>
      <div className="d-flex">
        <FormWithFormData/>
      </div>
    </>
  );
}
export default App;
