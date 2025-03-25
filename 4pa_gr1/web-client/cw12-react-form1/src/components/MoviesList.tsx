import { useState } from "react";
import { getLastId, movies, type Movie } from "../data/movies";

function MoviesList() {
  console.log("renderuje komponent MoviesList");
  
  const [moviesList, setMoviesList] = useState<Movie[]>(movies);
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [year, setYear] = useState<number>(2000);
  function handleDelete(id: number): void {
    setMoviesList(moviesList.filter((m) => m.id !== id));
  }

  function handleAddMovie(): void {
    console.log("dodaj film");
    const newMovie: Movie = {
      id: getLastId(moviesList) + 1,
      title: title,
      category: category,
      year: year,
    }; 
    //wypakowuje tablice moviesList i dodaje do niej nowy film
    setMoviesList([...moviesList, newMovie]);
    console.log(moviesList);
    
  }

  return (
    <>
      <h1>Dodawanie nowego filmu</h1>
      <div className="addMovie">
        <div className="row m-2">
          <label htmlFor="title" className="col-3 text-end">
            Podaj tytuł
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            id="title"
            className="col-6"
          />{title}
        </div>
        <div className="row m-2">
          <label htmlFor="category" className="col-3 text-end">
            Podaj kategorię
          </label>
          <input
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            type="text"
            id="category"
            className="col-6"
          />{category}
        </div>
        <div className="row m-2">
          <label htmlFor="year" className="col-3 text-end">
            Podaj rok produkcji
          </label>
          <input
            onChange={(e) => setYear(parseInt(e.target.value))}
            value={year}
            type="number"
            id="year"
            className="col-6"
          />{year}
        </div>
        <div className="row m-2">
          <button
            className="btn btn-primary offset-3 col-6"
            onClick={() => handleAddMovie()}
          >
            Dodaj film
          </button>
        </div>
      </div>
      <h1>Lista filmów ilość: {moviesList.length}</h1>
      {moviesList.map((m, i) => (
        <div key={i}>
          <h2>{m.title}</h2>
          <h4>kategoria: {m.category}</h4>
          <p>rok produkcji: {m.year}</p>
          <button onClick={() => handleDelete(m.id)} className="btn btn-danger">
            USUŃ
          </button>
          <hr />
        </div>
      ))}
    </>
  );
}

export default MoviesList;
