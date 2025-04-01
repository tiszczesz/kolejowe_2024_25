import { useState } from "react";
import { educations } from "../data/educations";
type FormResult = {
  firstname: string | null;
  lastname: string | null;
  email: string | null;
  education: string | null;
};
const Form19Comp = () => {
  const [formResult, setFormResult] = useState<FormResult | null>(null);
  const handleAction = async (formData: FormData) => {
    console.log(formData);
    const firstname = formData.get("firstname") as string; //przypisanie wartosci do zmiennej
    const lastname = formData.get("lastname") as string;
    const email = formData.get("email") as string;
    const education = formData.get("education") as string;
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      education === ""
    ) {
      alert("Wszystkie pola są wymagane");
      return;
    }
    //sprawdzenie czy pola są puste
    //wymuszenie rendering komponentu po wysłaniu formularza
    setFormResult({ firstname, lastname, email, education }); //przypisanie wartosci do stanu
  };
  return (
    <>
      <form action={handleAction}>
        <div className="row m-2">
          <label className="col-3" htmlFor="firstname">
            Podaj imię
          </label>
          <input
            className="col-6"
            type="text"
            id="firstname"
            name="firstname"
          />
        </div>
        <div className="row m-2">
          <label className="col-3" htmlFor="lastname">
            Podaj nazwisko
          </label>
          <input className="col-6" type="text" id="lastname" name="lastname" />
        </div>
        <div className="row m-2">
          <label className="col-3" htmlFor="email">
            Podaj email
          </label>
          <input className="col-6" type="email" id="email" name="email" />
        </div>
        <div className="row m-2">
          <label className="col-3" htmlFor="education">
            Wybierz wykształcenie
          </label>
          <select className="col-6" id="education" name="education">
            {educations.map((education) => (
              <option key={education} value={education}>
                {education}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary offset-3 col-6">Zatwierdź</button>
      </form>
      <hr />
      {formResult && (
        <div>
          <h3>Wynik</h3>
          <p>Imię: {formResult.firstname}</p>
          <p>Nazwisko: {formResult.lastname} </p>
          <p>Email: {formResult.email} </p>
          <p>Wykształcenie: {formResult.education} </p>
        </div>
      )}
    </>
  );
};

export default Form19Comp;
