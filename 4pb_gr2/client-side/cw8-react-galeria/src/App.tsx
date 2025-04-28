import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CarViewer from './components/CarViewer';

function App() {
 

  return (
    <div className='container text-center'>
     <h1>Przeglądarka samochodów</h1>
     <CarViewer />
    </div>
  )
}

export default App
