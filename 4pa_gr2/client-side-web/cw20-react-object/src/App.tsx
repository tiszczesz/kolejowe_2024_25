import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
type Movie = {
  id: number;
  title: string;
  year: number;
  rating: number;
  image: string;
};

function App() {
  //tworzymy obiekt opisujacy stan
  const [movie, setMovie] = useState<Movie>({
    id: 1,
    title: "Górnicy w Kosmosie",
    year: 2021,
    rating: 3,
    image: "images/gornicy.jpg",
  });
  function handleImageClick(): void {
    //zmiana stanu obiektu movie
    const newMovie: Movie = {
      ...movie,
      image:
        movie.image === "images/gornicy.jpg"
          ? "images/gornicy2.jpg"
          : "images/gornicy.jpg",
    };
    //zmiana stanu komponentu --> renderowanie komponentu
    setMovie(newMovie);
  }

  function handleClick(): void {
    const newMovie: Movie = {
      ...movie,
      rating: movie.rating + 1,
    };
    setMovie(newMovie);
  }

  return (
    <>
      <h1>Zankomite filmy</h1>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
          backgroundColor: movie.rating > 20 ? "green" : "white",
        }}
      >
        <h3>{movie.title}</h3>
        <h5>Rok produkcji: {movie.year}</h5>
        <div>
          <img style={{
            cursor: "pointer",
          }}
            onClick={() => handleImageClick()}
            src={movie.image}
            alt={movie.image}
          />
        </div>
        <div className="m-3">
          <span>ilość polubień: {movie.rating}</span>
          <button
          onClick={()=>handleClick()}
           className="btn btn-primary m-1">Polub</button>
        </div>
      </div>
    </>
  );
}

export default App;
