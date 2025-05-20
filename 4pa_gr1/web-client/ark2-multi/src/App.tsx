import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FormComp from './components/FormComp';
import TableComp from './components/TableComp';
import { generId, genres,type Movie } from './data';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  function addMovie(movie: Movie): void {
    console.log(movie);
    movie.id = generId(movies);
    // dodanie filmu do tablicy
    setMovies((prev)=> [...prev, movie]);
  }
  return (
    <div className='container'>
      <FormComp genres={genres} handleAdd={addMovie} />
      <TableComp movies={movies} />
    </div>
  )
}

export default App
