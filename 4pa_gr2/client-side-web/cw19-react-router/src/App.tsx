import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link } from "react-router";



function App() {
  return (
    <>
      <header>
        <nav>
         <Link to="/">Strona główna</Link><br />
          <Link to="/about">O firmie</Link><br />
          <Link to="/contact">Kontakt</Link><br />
          <Link to="/list">Lista</Link><br />
        </nav>
      </header>
      <main>
        <h3>Strona główna</h3>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
