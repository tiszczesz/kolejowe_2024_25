import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";
import { type Image, images } from "./data";

function App() {
  const [flowers, setFlowers] = useState(true);
  const [animals, setAnimals] = useState(true);
  const [cars, setCars] = useState(true);
  const [items, setItems] = useState(images);
  //ustawienie filtrowania
  console.log(flowers, animals, cars);
  function handleClick(id: number): void {
    //console.log(id);
    
    const newItems = items.map((elem)=>{
      if(elem.id===id){
        return {...elem, downloads: elem.downloads + 1} //zmiana tylko jednego elementu obiektu i
      }
      return elem;
    })
    console.log(newItems);
    
    //dzieki temu nie zmienia się downloads i renderuje
    setItems(newItems);
  }

  return (
    <div className="container">
      <h1>Kategorie zdjęć</h1>
      <section className="d-flex gap-3">
        <div className="form-switch">
          <input
            className="form-check-input"
            checked={flowers}
            type="checkbox"
            onChange={() => setFlowers(!flowers)}
            id="flowersId"
          />
          <label className="form-check-label" htmlFor="flowersId">
            Kwiaty
          </label>
        </div>
        <div className="form-switch">
          <input
            className="form-check-input"
            checked={animals}
            type="checkbox"
            onChange={() => setAnimals(!animals)}
            id="flowersId"
          />
          <label className="form-check-label" htmlFor="flowersId">
            Zwierzęta
          </label>
        </div>
        <div className="form-switch">
          <input
            className="form-check-input"
            checked={cars}
            type="checkbox"
            onChange={() => setCars(!cars)}
            id="flowersId"
          />
          <label className="form-check-label" htmlFor="flowersId">
            Samochody
          </label>
        </div>
      </section>
      <section className="d-flex flex-wrap gap-2">
        {/* {flowers &&
          items.map(
            (item: Image) =>
              item.category === 1 && (
                <div>
                  <img src={"assets/" + item.filename} alt={item.alt} />
                  <h4>Pobrań: {item.downloads}</h4>
                  <button className="btn btn-success">Pobierz</button>
                </div>
              )
          )}

          {animals &&  items.map(
            (item: Image) =>
              item.category === 2 && (
                <div>
                  <img src={"assets/" + item.filename} alt={item.alt} />
                  <h4>Pobrań: {item.downloads}</h4>
                  <button className="btn btn-success">Pobierz</button>
                </div>
              )
          )} 
          {cars &&  items.map(
            (item: Image) =>
              item.category === 3 && (
                <div>
                  <img src={"assets/" + item.filename} alt={item.alt} />
                  <h4>Pobrań: {item.downloads}</h4>
                  <button className="btn btn-success">Pobierz</button>
                </div>
              )
          )} */}
        {items.map(
          (item: Image) =>
            ((flowers && item.category === 1) ||
              (animals && item.category === 2) ||
              (cars && item.category === 3)) && (
              <div key={item.id}>
                <img src={"assets/" + item.filename} alt={item.alt} />
                <h4>Pobrań: {item.downloads}</h4>
                <button onClick={()=>handleClick(item.id)} className="btn btn-success">Pobierz</button>
              </div>
            )
        )}
      </section>
    </div>
  );
}

export default App;
