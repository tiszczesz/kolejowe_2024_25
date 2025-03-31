import { type Movie } from "../data/data"


type Props = {
    movie: Movie,

    onDelete: (id: number) => void
}

const Movie = ({ movie,onDelete }: Props) => {
    return (
        <div className="col-3 card m-2" style={{
            width: "25rem",
            backgroundColor: "#f8f9fa",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}>
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">Reżyser: {movie.director}</p>
                <p className="card-text">Rok wydania: {movie.releaseYear}</p>
                <p className="card-text">Gatunek: {movie.genre}</p>
                <button className="btn btn-danger" onClick={() =>  onDelete(movie.id)  }>Usuń</button>
            </div>
        </div>
    )
}

export default Movie