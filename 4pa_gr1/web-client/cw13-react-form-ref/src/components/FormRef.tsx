export default function FormRef(){
    const educations = ["B.Tech", "M.Tech", "BCA", "MCA", "B.Sc", "M.Sc"];
    return(
        <div className="container">
            <form>
                <div className="row m-2">
                    <label htmlFor="name" className="col-3 text-end">Name:</label>
                    <input type="text" name="name" id="name" 
                    className="col-6" />
                    <span className="col-3 text-danger"></span>
                </div>
                <div className="row m-2">
                    <label htmlFor="email" className="col-3 text-end">Email:</label>
                    <input type="text" name="email" id="email" 
                    className="col-6" />
                    <span className="col-3 text-danger"></span>
                </div>
                <div className="row m-2">
                    <label className="col-3 text-end" htmlFor="education">Education:</label>
                    <select name="education" id="education" className="col-6">
                        {educations.map((edu, i) => (
                            <option key={i} value={edu}>{edu}</option>
                        ))}
                    </select>
                </div>
                <div className="row m-2">
                    <button className="offset-3 col-6 btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
