import { FormEvent, useState } from "react"
type FormResult = {
  firstname: string | null,
  lastname: string | null,
  email: string | null
}
const FormDataComp = () => {
 const [formResult, setFormResult] = useState<FormResult|null>(null)//dodanie useState do przechowywania wyniku formularza
console.log("render FormDataComp");

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {

    event.preventDefault()
    //console.log("Form submitted");
    //console.log(event.currentTarget);//dodtep do  obiekt formularza
    //uzycie event.currentTarget do odczytania wartosci z formularza
    const formData = new FormData(event.currentTarget)
    console.log(formData);
    console.log(formData.get("firstname"));//odczytanie wartosci z formularza
    const firstname = formData.get("firstname") as string//przypisanie wartosci do zmiennej
    const lastname = formData.get("lastname") as string
    const email = formData.get("email") as string
    if(firstname === "" || lastname === "" || email === ""){
      alert("Wszystkie pola są wymagane")
      return
    } 
    //sprawdzenie czy pola są puste
    //wymuszenie rendering komponentu po wysłaniu formularza
    setFormResult({firstname, lastname, email})//przypisanie wartosci do stanu
    
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="row m-2">
        <label className="col-3" htmlFor="firstname">Podaj imię</label>
        <input className="col-6" type="text" id="firstname" name="firstname" />
      </div>
      <div className="row m-2">
        <label className="col-3" htmlFor="lastname">Podaj nazwisko</label>
        <input className="col-6" type="text" id="lastname" name="lastname" />
      </div>
      <div className="row m-2">
        <label className="col-3" htmlFor="email">Podaj email</label>
        <input className="col-6" type="email" id="email" name="email" />
      </div>
      <button className="btn btn-primary offset-3 col-6">Zatwierdź</button>
    </form>
    <hr />
    { formResult &&  <div >
      <h3>Wynik</h3>
      <p>Imię: {formResult?.firstname}</p>
      <p>Nazwisko: {formResult?.lastname} </p>
      <p>Email: {formResult?.email} </p>
    </div>}
    </>
  )
}

export default FormDataComp