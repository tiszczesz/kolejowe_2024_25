import "bootstrap/dist/css/bootstrap.min.css";
import { courses } from "./models/courses";
import "./App.css";
import { MouseEvent, useState } from "react";



function App() {
  const [user,setUser] = useState("");
  const [courseInfo,setCourseInfo] = useState(1);


 

  function handleClick(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    if(courseInfo>0 && courseInfo<=courses.length){
      console.log("ok");
      
    }
    else{
      console.log("Nie ma takiego kursu");
    }
  }

  return (
    <>
      <h2>Liczba kursów: {courses.length}</h2>
      <ol>
        {courses.map((elem,i)=>(
          <li key={i}>{elem}</li>
        ))}
      </ol>
      <form >
        <div className="form-group m-2">
          <label htmlFor="">Imię i nazwisko:</label>
          <input value={user} onChange={(event)=>setUser(event.target.value)}  type="text" className="form-control" />
        </div>
        <div className="form-group m-2">
          <label htmlFor="">Numer kursu:</label>
          <input value={courseInfo} onChange={(event)=>setCourseInfo(parseInt(event.target.value))} type="text" className="form-control" />
        </div>
        <button
        onClick={handleClick}
         className="btn btn-primary">Zapisz do kursu</button>
      </form>
    </>
  );
}

export default App;
