import type { FormEvent } from "react";
import { generId, type Movie } from "../data";

type FormProps = {
  genres: string[];
  handleAdd: (movie: Movie) => void;
};

const FormComp = (props: FormProps) => {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const title = formData.get("title") as string;
    const genre = formData.get("genre") as string;
    if (title && genre) {
      const movie: Movie = {
        id: -1,
        title,
        genre,
      };
      //zwrócenie fimu do rodzica
      props.handleAdd(movie);
      form.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group m-2">
        <label htmlFor="titleId">Tytuł filmu</label>
        <input type="text" className="form-control" id="titleId" name="title" />
      </div>
      <div className="form-group m-2">
        <label htmlFor="genreId">Rodzaj</label>
        <select className="form-control" id="genreId" name="genre">
            {props.genres.map((elem,index)=>(
                <option key={index} value={elem}>{elem}</option>
            ))}
        </select>
      </div>
      <button className="btn btn-primary m-2" >Dodaj</button>
    </form>
  );
};
export default FormComp;
