import { useState } from "react"
import { movies,type Movie } from "../data/movies"



function MoviesList() {
    const [moviesList, setMoviesList] = useState<Movie[]>(movies)
    const [title, setTitle] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const [year, setYear] = useState<number>(2000)
    function handleDelete(id: number): void {
        setMoviesList(moviesList.filter((m) => m.id !== id))
    }

  function handleAddMovie(): void {
    console.log('dodaj film');
    
  }

  return (
    <>
    <h1>Dodawanie nowego filmu</h1>
    <div className="addMovie">
   <div className="row m-2">
      <label htmlFor="title" className="col-3 text-end">Podaj tytuł</label>
      <input type="text" id="title" className="col-9" />
    </div>
    <div className="row m-2">
      <label htmlFor="category" className="col-3 text-end">Podaj kategorię</label>
      <input type="text" id="category" className="col-9" />
    </div>
    <div className="row m-2">
      <label htmlFor="year" className="col-3 text-end">Podaj rok produkcji</label>
      <input type="text" id="year" className="col-9" />
    </div>
    <div className="row m-2">
      <button className="btn btn-primary offset-3 col-9"
      onClick={()=>handleAddMovie()}
      >Dodaj film</button>
      </div>
    </div>
    <h1>Lista filmów ilość: {moviesList.length}</h1>
    {moviesList.map((m,i)=>(
        <div key={i}>
            <h2>{m.title}</h2>
            <h4>kategoria: {m.category}</h4>
            <p>rok produkcji: {m.year}</p>
            <button
            onClick={()=>handleDelete(m.id)}
            className="btn btn-danger">USUŃ</button>
            <hr />
        </div>
    ))}
    </>
  )
}

export default MoviesList