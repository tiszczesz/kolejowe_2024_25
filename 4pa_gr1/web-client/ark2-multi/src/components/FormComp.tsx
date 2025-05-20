import type { FormEvent } from "react";
import type { Movie } from "../data";

type FormProps = {
  genres: string[];
  handleAdd: (movie: Movie) => void;
};

const FormComp = (props: FormProps) => {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group m-2">
        <label htmlFor="titleId">Tytuł filmu</label>
        <input type="text" className="form-control" id="titleId" />
      </div>
      <div className="form-group m-2">
        <label htmlFor="genreId">Rodzaj</label>
        <select className="form-control" id="genreId">
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
