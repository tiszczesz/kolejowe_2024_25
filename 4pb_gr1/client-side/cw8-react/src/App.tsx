import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { courses, type Course } from "./dane/dane";
import { useState } from "react";

function App() {
  console.log("renderowanie komponentu App");

  const [coursesList, setCoursesList] = useState<Course[]>(courses);
  function handleClick(id: number) {
    console.log("Zapisano na kurs o id: " + id);
    const actuallCourse = coursesList.find((c) => c.id === id);
    if (actuallCourse && actuallCourse.counter >= actuallCourse.maxCounter) {
      //alert("Kurs jest już pełny!");
      return;
    }
    const newCoursesList = coursesList.map((c) => {
      if (c.id === id) {
        //zmieniamy stan kursu o danym id counter++
        return { ...c, counter: c.counter + 1 };
      }
      return c;
    });
    console.log(newCoursesList);
    //wywołujemy setCoursesList z nową tablicą kursów co powoduje rerenderowanie komponentu
    setCoursesList(newCoursesList);
  }

  return (
    <div className="container">
      <h1>Zapisy na wybrany kurs</h1>
      {coursesList.map((c, i) => (
        <section className="course" key={i}>
          <h4
            style={{
              textDecoration: "underline",
            }}
          >
            Nazwa kursu: {c.name}
          </h4>
          <p>Opis kursu: {c.description}</p>
          <p>
            Cena kursu: <b>{c.price}</b> zł
          </p>
          <p>Limit uczestników: {c.maxCounter}</p>
          <p>
            {" "}
            aktualna liczba:&nbsp;
            <span className={c.counter >= c.maxCounter - 2 ? "warring" : ""}>
              {c.counter}
            </span>
          </p>
         {c.counter<c.maxCounter && <button
            onClick={() => {
              handleClick(c.id);
            }}
            className="btn btn-info"
          >
            Zapisz na kurs
          </button>}
        </section>
      ))}
      
    </div>
  );
}

export default App;
