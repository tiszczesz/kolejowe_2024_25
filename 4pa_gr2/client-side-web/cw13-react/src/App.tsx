import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Clicker from './components/Clicker'
import BorderChanger from './components/BorderChanger';
import Image from './components/Image';
import domek1 from './assets/domek1.jpg';
import domek2 from './assets/domek2.jpg';
import obrazek3 from './assets/NaStrone.png';

function App() {
  console.log("App renderuje się");
  

  return (
    <>
     <h1>Użycie komponentu ze stanem</h1> 
     <Clicker />
     <hr />
     <BorderChanger />
     <Image src={domek1} alt='domek 1' width={200}  />
     <Image src={domek2} alt='domek 2' width={300}  />
     <Image src="vite.svg" alt='vite' width={200}  />
     <hr />
     <div>
      <button
      onClick={()=>{console.log("Kliknięto"); //pokaz ukryj obrazek
      }}
       className='btn btn-info'>Pokaż/ukryj obrazek</button>
      <Image src={obrazek3} alt='obrazek 3' width={200}  />
     </div>
    </>
  )
}

export default App
