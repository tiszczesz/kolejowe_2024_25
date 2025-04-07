import { FormEvent, useState } from "react";
type FormResult = {
  firstname: string;
  lastname: string;
  gender?: string;
};

const FormWithFormData = () => {
  console.log("renderowanie formularza");
  const [formResult, setFormResult] = useState<FormResult | undefined>();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log("Formularz z FormData");
    console.log(event.currentTarget);
    const formData = new FormData(event.currentTarget);
    const result: FormResult = {
      firstname: formData.get("firstname") as string,
      lastname: formData.get("lastname") as string,
      gender: formData.get("gender")
        ? (formData.get("gender") as string)
        : undefined,
    };
    //console.log(result);
    if (result.firstname.trim() === "" || result.lastname.trim() === "") {
      alert("Imię i nazwisko są wymagane!");
      return;
    }
    //ustawienie wyniku formularza w stanie komponentu jest asynchroniczne!!!!!
    setFormResult(result);
    console.log("Wynik formularza", formResult);
  }

  return (
    <div style={{ minWidth: "500px" }}>
      <h3>Formularz z FormData</h3>
      <form onSubmit={handleSubmit}>
        <div className="row m-2">
          <label htmlFor="firstname" className="col-3 text-end">
            Imię
          </label>
          <input
            type="text"
            className="col-9"
            name="firstname"
            id="firstname"
          />
        </div>
        <div className="row m-2">
          <label htmlFor="lastname" className="col-3 text-end">
            Nazwisko
          </label>
          <input type="text" className="col-9" name="lastname" id="lastname" />
        </div>
        <div className="row m-2">
          <input
            type="radio"
            className="col-3"
            name="gender"
            id="k"
            value="kobieta"
          />
          <label htmlFor="k" className="col-9">
            Kobieta
          </label>
        </div>
        <div className="row m-2">
          <input
            type="radio"
            className="col-3"
            name="gender"
            id="m"
            value="mężczyzna"
          />
          <label htmlFor="m" className="col-9">
            Mężczyzna
          </label>
        </div>
        <div className="row m-2">
          <input
            type="submit"
            value="Zapisz"
            className="btn btn-primary col-9 offset-3"
          />
        </div>
      </form>
      <hr />

      {formResult && (
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            marginLeft: "30px",
          }}
        >
          <h4>Wynik formularza</h4>
          <p>Imię: {formResult.firstname}</p>
          <p>Nazwisko: {formResult.lastname}</p>
          <p>Płeć: {formResult.gender ?? "niewybrano"}</p>
        </div>
      )}
    </div>
  );
};

export default FormWithFormData;
