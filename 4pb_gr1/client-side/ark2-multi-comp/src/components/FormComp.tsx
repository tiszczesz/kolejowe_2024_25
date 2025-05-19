import type { FormEvent } from "react"


type Props = {
    handleAdd: (title: string, genre: string) => void
}

const FormComp = (props: Props) => {
    console.log("renderowanie FormComp");
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        const form = event.currentTarget;
        const formData = new FormData(form);
        const title = formData.get("title") as string;
        const genre = formData.get("genre") as string;
        if (title && genre) {
            props.handleAdd(title, genre);
            form.reset();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group m-2">
                <label htmlFor="title" >Tytuł filmu</label>
                <input type="text" className="form-control" id="title" name="title" />
            </div>
            <div className="form-group m-2">
                <label htmlFor="genre" >Rodzaj</label>
                <select className="form-control" id="title" name="genre">
                    <option value=""></option>
                    <option value="Komedia">Komedia</option>
                    <option value="Obyczajowy">Obyczajowy</option>
                    <option value="Sensacyjny">Sensacyjny</option>
                    <option value="Horror">Horror</option>
                </select>
            </div>
            <button className="btn btn-primary m-2">Dodaj</button>
        </form>
    )
}

export default FormComp