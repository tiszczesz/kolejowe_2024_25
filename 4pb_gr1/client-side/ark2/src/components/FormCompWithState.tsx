import  { useState, type FormEvent } from 'react'
import { getLastId, type Movie } from '../tools';


const FormCompWithState = () => {
   const [movies, setMovies] = useState<Movie[]>([]);
   const [title, setTitle] = useState<string>("");
   const [genre, setGenre] = useState<string>("");
      function handleSubmit(event: FormEvent<HTMLFormElement>): void {
          event.preventDefault();
          const form = event.currentTarget;
          const newMovie: Movie = {
                id: getLastId(movies),
                title,
                genre
          };
          setMovies((prevMovies) =>
              [...prevMovies, newMovie])
        //   form.reset();
            setTitle("");
            setGenre("");
      }
  
    return (
      <>
      <form onSubmit={handleSubmit}>
          <div className="form-group m-2">
              <label htmlFor="title" >Tytuł filmu</label>
              <input
              onChange={(event => setTitle(event.target.value))}
              value={title}
               type="text" className="form-control" id="title" />
          </div>
          <div className="form-group m-2">
              <label htmlFor="genre" >Rodzaj</label>
              <select
                onChange={(event => setGenre(event.target.value))}
                value={genre}                 
               className="form-control" id="title">
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
                  {movies.map((elem,index)=>(
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

export default FormCompWithState