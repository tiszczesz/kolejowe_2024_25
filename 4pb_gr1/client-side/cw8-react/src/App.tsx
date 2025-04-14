import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { courses, type Course } from './dane/dane';
import { useState } from 'react';

function App() {

  const [coursesList, setCoursesList] =
    useState<Course[]>(courses);
  function handleClick(id: number) {
    console.log("Zapisano na kurs o id: " + id);    
  }

  return (
    <div className='container'>
      <h1>Zapisy na wybrany kurs</h1>
      {coursesList.map((c, i) => (
        <section className='course' key={i}>
          <h4 style={{
            textDecoration: "underline",
          }}>Nazwa kursu: {c.name}</h4>
          <p>Opis kursu: {c.description}</p>
          <p>Cena kursu: <b>{c.price}</b> zł</p>
          <p>Limit uczestników: {c.maxCounter}</p>
          <p> aktualna liczba:&nbsp;
            <span
              className={c.counter >= c.maxCounter - 2 ? "warring" : ""}>
              {c.counter}</span>
          </p>
          <button
          onClick={()=>{
            handleClick(c.id);
          }}
           className='btn btn-info'>Zapisz na kurs</button>
        </section>
      ))};
    </div>
  )
}

export default App
