import { useState } from 'react'
import './App.css'
type Movie = {
  id: number,
  title: string,
  year: number,
  rating: number,
  image: string,
}


function App() {
 
  //tworzymy obiekt opisujacy stan
  const [movie, setMovie] = useState<Movie>({
    id: 1,
    title: 'Górnicy w Kosmosie',
    year: 2021,
    rating: 3,
    image: 'images/gornicy.jpg'
  })
  return (
    <>
      <h1>Zankomite filmy</h1>
      <div>
        <h3>{movie.title}</h3>
        <h5>Rok produkcji: {movie.year}</h5>
        <div>
          <img src={movie.image} alt={movie.image} />
        </div>
      </div>
    </>
  )
}

export default App
