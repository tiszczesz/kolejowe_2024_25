import { useState } from "react"
import { genres, movies } from "../data/data"
import Movie from "./Movie"

type Props = {}

const MoviesList = (props: Props) => {
    const [selectedGenre, setSelectedGenre] = useState<string>("all")
    const [moviesList, setMoviesList] = useState<Movie[]>(movies)
    function handleDelete(id: number): void {
        console.log("usuwanie filmu o id: ", id)
        const newMoviesList = moviesList.filter((movie) => movie.id !== id);
        setMoviesList(newMoviesList)
        
    }

    return (
        <div className="container">
            <h1>Lista filmów ilość:{moviesList.length}</h1>
            <div className="row m=2">
                <label className="col-3 text-end" htmlFor="movieSelect">Wybierz kategorię filmów:</label>
                <select name="movieSelect"
                onChange={(e)=> setSelectedGenre(e.target.value)}
                    id="movieSelect"
                    className="col-6">
                    <option value="all">all</option>
                    {genres.map((genre, index) => (
                        <option key={index} value={genre}>
                            {genre}
                        </option>
                    )
                    )}
                </select>
            </div>
            <div className="row m=2">
                {moviesList.map((movie) => (
                    (selectedGenre === movie.genre || selectedGenre==='all') && 
                    <Movie key={movie.id} movie={movie} onDelete={handleDelete} />
                ))}
            </div>

        </div>
    )
}

export default MoviesList