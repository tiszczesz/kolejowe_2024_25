import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css'
import FormComp from './components/FormComp'
import TableComp from './components/TableComp'
import { getLastId, type Movie } from './tools';

function App() {
  console.log("renderowanie App");
  
  const [movies, setMovies] = useState<Movie[] | []>([]);

  function addNewMovie(title: string, genre: string): void {
   // console.log(title, genre);
    const newMovie = {
      id:getLastId(movies),
      title: title,
      genre: genre
    }
    console.log(newMovie);
    setMovies( [...movies, newMovie]);
    
  }

  return (
    <div className='container'>
      <FormComp handleAdd={addNewMovie} />
      <TableComp movies={movies} />

    </div>
  )
}

export default App
