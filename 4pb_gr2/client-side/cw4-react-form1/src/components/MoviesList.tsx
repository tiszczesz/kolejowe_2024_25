import { useState } from 'react'
import {getLastId, movies,type Movie} from '../data/movies'

function MoviesList() {
    console.log("render listy filmów");
    
    const [moviesList, setMoviesList] = useState<Movie[]>(movies)
    const [title, setTitle] = useState<string>('')
    const [releaseYear, setReleaseYear] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    function handleAdd(): void {
        const newMovie: Movie = {
            id: getLastId(moviesList) + 1,
            title: title,
            release_year: releaseYear,
            price: price
        }
        setMoviesList([...moviesList, newMovie])
        setTitle('')
        setReleaseYear('')
        setPrice(0)
    }

    function handleDelete(id: number): void {
        const newMoviesList = moviesList.filter((movie) => movie.id !== id)
        setMoviesList(newMoviesList)
    }

  return (
    <div>
        <h1>Dodaj nowy film</h1>
        <div>
            <label>Tytuł: </label>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            {title}            
        </div>
        <div>
            <label>Rok produkcji: </label>
            <input type="text" 
            onChange={(e)=>setReleaseYear(e.target.value)} value={releaseYear}/>
            {releaseYear}
        </div>
        <div>
            <label>Cena: </label>
            <input type="number" 
            onChange={(e)=>setPrice(parseInt(e.target.value))} value={price}/>
            {price} 
        </div>
        <button onClick={()=>handleAdd()}>Dodaj</button>
        <hr />
        <h1>Lista filmów</h1>
        {moviesList.map((movie) => (

            <div key={movie.id}>
                <h2>{movie.title}</h2>
                <p>Rok produkcji: {movie.release_year}</p>
                <p>Cena: {movie.price} zł</p>
                <button onClick={()=>handleDelete(movie.id)} >USUŃ</button>
                <hr />
            </div>
            
        ))}
    </div>
  )
}

export default MoviesList