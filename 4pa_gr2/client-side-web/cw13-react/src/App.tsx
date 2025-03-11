import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Clicker from './components/Clicker'
import BorderChanger from './components/BorderChanger';

function App() {
  console.log("App renderuje się");
  

  return (
    <>
     <h1>Użycie komponentu ze stanem</h1> 
     <Clicker />
     <hr />
     <BorderChanger />
    </>
  )
}

export default App
