import { FormEvent, useState } from "react";
type FormDataType = {
  firstname: string;
  lastname: string;
  age: number;
  education: string;
  gender?: string;
  hobby?: string[];
};
const FormWithFormData = () => {
  console.log("render FormWithFormData");

  const [formResult, setFormResult] = useState<FormDataType | null>(null);
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    //dostęp do elementu formularz
    const form = event.currentTarget;
    console.log(form);
    //tworzenie obiektu FormData na podstawie formularza
    const formData = new FormData(form);
    console.log(formData);
    //wykorzystanie FormData do pobrania danych z formularza
    const result: FormDataType = {
      firstname: formData.get("firstname") as string,
      lastname: formData.get("lastname") as string,
      age: parseInt(formData.get("age") as string),
      education: formData.get("education") as string,
      gender: formData.get("gender")
        ? (formData.get("gender") as string)
        : "nie wybrano",
        //pobranie wszystkich wartości z checkboxów
      hobby: formData.getAll("hobby") as string[],
    };
    console.log(result);
    // walidacja formularza i jesli poprawny to ustawienie stanu
    if (ValidateForm(result)) {
      setFormResult(result);
    }
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
        <label>Wykształacenie:</label>
        <br />
        <select name="education" className="m-2">
          <option value="podstawowe">podstawowe</option>
          <option value="średnie">średnie</option>
          <option value="wyższe">wyższe</option>
        </select>
        <br />
        <div style={{ border: "solid 1px black" }} className="m-2 p-1">
          <label>Wybierz płeć:</label>
          <br />
          <input type="radio" name="gender" value="kobieta" /> kobieta <br />
          <input type="radio" name="gender" value="mężczyzna" /> mężczyzna{" "}
          <br />
        </div>
        <div style={{ border: "solid 1px black" }} className="m-2 p-1">
          <label htmlFor="hobby">Hobby:</label>
          <br />
          <input type="checkbox" name="hobby" value="sport" /> sport <br />
          <input type="checkbox" name="hobby" value="muzyka" /> muzyka <br />
          <input type="checkbox" name="hobby" value="podróże" /> podróże <br />
        </div>
        <button className="btn btn-primary m-2">Zatwierdź</button>
      </form>
      <hr />
      <h4>Wynik:</h4>
      {formResult && (
        <div style={{ border: "solid 1px black" }} className="m-2 p-1">
          <p>Imię: {formResult.firstname}</p>
          <p>Nazwisko: {formResult.lastname}</p>
          <p>Wiek: {formResult.age}</p>
          <p>Płeć: {formResult.gender}</p>
          <p>Wykształcenie: {formResult.education}</p>
          {formResult.hobby && formResult.hobby.length > 0 && (
            <p>Zainteresowania: {formResult.hobby.join(", ")}</p>
          )}
        </div>
      )}
    </div>
  );
};
export default FormWithFormData;
function ValidateForm(result: FormDataType) {
  return (
    result.firstname.length > 0 &&
    result.lastname.length > 0 &&
    !isNaN(result.age) &&
    result.age <= 120 &&
    result.age > 0
  );
}
