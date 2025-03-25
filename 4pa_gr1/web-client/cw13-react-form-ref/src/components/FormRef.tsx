import { FormEvent, useRef, useState } from "react";
type FormResult = {
  name: string;
  email: string;
  education: string;
};
export default function FormRef() {
  const educations = ["B.Tech", "M.Tech", "BCA", "MCA", "B.Sc", "M.Sc"];
  const [formResult, setFormResult] = useState<FormResult>({
    name: "",
    email: "",
    education: "",
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const educationRef = useRef<HTMLSelectElement>(null);
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log("Form submitted");
    if (nameRef.current && emailRef.current && educationRef.current) {
      // setFormResult((prev)=>{
      //     const result = {
      //         ...prev,
      //         name: nameRef.current!.value,
      //         email: emailRef.current!.value,
      //         education: educationRef.current!.value
      //     }
      //     console.log(result);
      //     return result;
      // });
      setFormResult({
        name: nameRef.current.value,
        email: emailRef.current.value,
        education: educationRef.current.value,
      });
      console.log({
        name: nameRef.current.value,
        email: emailRef.current.value,
        education: educationRef.current.value,
      });
    }
  }

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row m-2">
          <label htmlFor="name" className="col-3 text-end">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            ref={nameRef}
            className="col-6"
          />
          <span className="col-3 text-danger"></span>
        </div>
        <div className="row m-2">
          <label htmlFor="email" className="col-3 text-end">
            Email:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            ref={emailRef}
            className="col-6"
          />
          <span className="col-3 text-danger"></span>
        </div>
        <div className="row m-2">
          <label className="col-3 text-end" htmlFor="education">
            Education:
          </label>
          <select
            name="education"
            id="education"
            className="col-6"
            ref={educationRef}
          >
            {educations.map((edu, i) => (
              <option key={i} value={edu}>
                {edu}
              </option>
            ))}
          </select>
        </div>
        <div className="row m-2">
          <button className="offset-3 col-6 btn btn-primary">Save</button>
        </div>
      </form>
      <hr />
      <div className="info">
        <h2>Form Result</h2>
        <p>Name: {formResult.name}</p>
        <p>Email: {formResult.email}</p>
        <p>Education: {formResult.education}</p>
      </div>
    </div>
  );
}
