import { FormEvent } from "react"


const FormWithFormData = () => {
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        console.log("Formularz z FormData");

    }

    return (
        <div style={{ minWidth: "500px" }}>
            <h3>Formularz z FormData</h3>
            <form onSubmit={handleSubmit} >
                <div className="row m-2">
                    <label htmlFor="firstname" className="col-3 text-end">Imię</label>
                    <input type="text" className="col-9" name="firstname" id="firstname" />
                </div>
                <div className="row m-2">
                    <label htmlFor="lastname" className="col-3 text-end">Nazwisko</label>
                    <input type="text" className="col-9" name="lastname" id="lastname" />
                </div>
                <div className="row m-2">
                    <input type="radio" className="col-3" name="gender" id="k" value="kobieta"
                        checked={true} />
                    <label htmlFor="k" className="col-9">Kobieta</label>
                </div>
                <div className="row m-2">
                    <input type="radio" className="col-3" name="gender" id="m" value="mężczyzna" />
                    <label htmlFor="m" className="col-9">Mężczyzna</label>
                </div>
                <div className="row m-2">
                    <input type="submit" value="Zapisz" className="btn btn-primary col-9 offset-3" />
                </div>
            </form>
        </div>
    )
}

export default FormWithFormData