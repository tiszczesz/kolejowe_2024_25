import { useState } from "react";
type FormResult = {
  firstname: string;
  lastname: string;
  gender?: string;
};
const FormReact19 = () => {
  const [formResult, setFormResult] = useState<FormResult | null>(null);
  function handleAction(formData: FormData) {
    console.log(formData);
    const result = {
      firstname: formData.get("firstname") as string,
      lastname: formData.get("lastname") as string,
      gender: formData.get("gender")
        ? (formData.get("gender") as string)
        : undefined,
    };
    if (result.firstname.trim() === "" || result.lastname.trim() === "") {
      alert("Imię i nazwisko są wymagane!");
      return;
    }
    setFormResult(result);
  }
  return (
    <div style={{ minWidth: "500px" }}>
      <h3>Formularz react19 action</h3>
      <form action={handleAction}>
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
            border: "2px solid red",
            padding: "20px",
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
export default FormReact19;
