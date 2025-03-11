import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Clicker from './components/Clicker'

function App() {
  console.log("App renderuje się");
  

  return (
    <>
     <h1>Użycie komponentu ze stanem</h1> 
     <Clicker />
    </>
  )
}

export default App
