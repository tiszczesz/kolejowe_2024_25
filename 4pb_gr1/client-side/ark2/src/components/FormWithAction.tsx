import { useState } from "react";
import { getLastId, type Movie } from "../tools";

const FormWithAction = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    function handleAction(formData: FormData) {
        const title = formData.get("title") as string;
        const genre = formData.get("genre") as string;
        const movie: Movie = {
            id: getLastId(movies),
            title,
            genre
        }
        console.log(movie);
        setMovies((prevMovies) =>
            [...prevMovies, movie]
        );
        //     form.reset();

    }
    return (
        <>
            <form action={handleAction}>
                <div className="form-group m-2">
                    <label htmlFor="title" >Tytuł filmu</label>
                    <input type="text" className="form-control" id="title" name="title" />
                </div>
                <div className="form-group m-2">
                    <label htmlFor="genre" >Rodzaj</label>
                    <select className="form-control" id="title" name="genre">
                        <option value=""></option>
                        <option value="Komedia1">Komedia</option>
                        <option value="Obyczajowy">Obyczajowy</option>
                        <option value="Sensacyjny">Sensacyjny</option>
                        <option value="Horror">Horror</option>
                    </select>
                </div>
                <button className="btn btn-primary m-2">Dodaj</button>
            </form>
            <div>
                {movies.length > 0 && (<table className="table table-striped">
                    <thead>
                        <tr>
                            <th>tytuł</th>
                            <th>rodzaj</th>
                        </tr>
                        {movies.map((elem) => (
                            <tr key={elem.id}>
                                <td>{elem.title}</td>
                                <td>{elem.genre}</td>
                            </tr>
                        ))}
                    </thead>
                </table>)}
            </div>
        </>
    )
}

export default FormWithAction