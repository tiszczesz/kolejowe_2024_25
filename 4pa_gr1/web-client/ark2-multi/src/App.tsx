import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FormComp from './components/FormComp';
import TableComp from './components/TableComp';
import { genres,type Movie } from './data';

function App() {
  

  function addMovie(movie: Movie): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className='container'>
      <FormComp genres={genres} handleAdd={addMovie} />
      <TableComp />
    </div>
  )
}

export default App
