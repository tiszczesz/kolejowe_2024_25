import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MoviesList from './components/MoviesList'

function App() {
console.log("renderuje komponent App");


  return (
    <div className='container'>
     <MoviesList />
      
    </div>
  )
}

export default App
