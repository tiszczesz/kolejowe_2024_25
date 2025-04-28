import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PersonComp from "./components/PersonComp";
import CarViewer from "./components/CarViewer";

function App() {
  

  return (
    <div className="container" >
      <h1>Praca z obiektami</h1>
     <PersonComp />
     <hr />
     <CarViewer />
     
    </div>
  );
}

export default App;
