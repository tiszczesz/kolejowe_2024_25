import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { Link } from 'react-router';

function App() {


  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link><br />
          <Link to="/about">About</Link><br />
          <Link to="/contact">Contact</Link><br />
          <Link to="/list">Lista</Link><br />
        </nav>
      </header>
      <main>
        <h1>React a Routerm v7</h1>
      </main>
      <footer></footer>
        
    </>
  )
}

export default App
