import { FormEvent } from "react";

const FormWithFormData = () => {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <div>
      <h4>Formularz z FormData</h4>
      <form onSubmit={handleSubmit}>
        <input
          className="m-2"
          type="text"
          name="firstname"
          placeholder="Podaj imię"
        />
        <br />
        <input
          className="m-2"
          type="text"
          name="lastname"
          placeholder="Podaj nazwisko"
        />
        <br />
        <input
          className="m-2"
          type="number"
          name="age"
          placeholder="Podaj wiek"
        />
        <br />
        <select name="education" className="m-2">
          <option value="podstawowe">podstawowe</option>
          <option value="średnie">średnie</option>
          <option value="wyższe">wyższe</option>
        </select>
        <br />
        <div style={{border:"solid 1px black"}} className="m-2 p-1">
          <label>Wybierz płeć:</label><br />
          <input type="radio" name="gender" value="kobieta" /> kobieta <br />
          <input type="radio" name="gender" value="mężczyzna" /> mężczyzna{" "}
          <br />
        </div>
        <div style={{border:"solid 1px black"}} className="m-2 p-1">
            <label htmlFor="hobby">Hobby:</label><br />
            <input type="checkbox" name="hobby" value="sport" /> sport <br />
            <input type="checkbox" name="hobby" value="muzyka" /> muzyka <br />
            <input type="checkbox" name="hobby" value="podróże" /> podróże <br />
        </div>
        <button className="btn btn-primary m-2">Zatwierdź</button>
      </form>
      <hr />
    </div>
  );
};
export default FormWithFormData;
