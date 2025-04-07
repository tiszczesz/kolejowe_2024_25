import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormWithFormData from "./components/FormWithFormData";
import FormReact19 from "./components/FormReact19";

function App() {
  return (
    <>
      <h1>Formularze</h1>
      <div className="d-flex" style={{ gap: "50px" }}>
        <FormWithFormData style={{width:"50%"}}/>
        <FormReact19 style={{width:"50%"}} /> 
      </div>
    </>
  );
}
export default App;
