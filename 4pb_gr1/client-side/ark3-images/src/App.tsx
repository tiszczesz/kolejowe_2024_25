import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";
import { items, type Item } from "./data";

function App() {
  const [flowers, setFlowers] = useState(true);
  const [animals, setAnimals] = useState(true);
  const [cars, setCars] = useState(true);
  const [images, setImages] = useState<Item[]>(items);
  console.log([flowers, animals, cars]);

  function handleClick(id: number): void {
    const newImages = images.map((elem) => {
      if (elem.id === id) {
        return { ...elem, downloads: elem.downloads + 1 };
      }
      return elem;
    });
    setImages(newImages);
    console.log(newImages);
  }

  return (
    <div className="container">
      <h1>Kategorie zdjęć</h1>
      <section style={{ display: "flex", gap: "10px" }}>
        <span className="form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={() => setFlowers(!flowers)}
            checked={flowers}
            id="flowersId"
          />
          <label className="form-check-label" htmlFor="flowersId">
            Kwiaty
          </label>
        </span>
        <span className="form-switch">
          <input
            className="form-check-input"
            checked={animals}
            onChange={() => setAnimals(!animals)}
            type="checkbox"
            id="animalsId"
          />
          <label className="form-check-label" htmlFor="animalsId">
            Zwierzęta
          </label>
        </span>
        <span className="form-switch">
          <input
            className="form-check-input"
            checked={cars}
            onChange={() => setCars(!cars)}
            type="checkbox"
            id="carsId"
          />
          <label className="form-check-label" htmlFor="carsId">
            Samochody
          </label>
        </span>
      </section>
      <section style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {images.map(
          (elem, index) =>
            ((elem.category === 1 && flowers) ||
            (elem.category === 2 && animals) ||
            (elem.category === 3 && cars) ) && (
              <div key={index}>
                <img src={"assets/" + elem.filename} alt={elem.alt} />
                <div>Pobrań: {elem.downloads}</div>
                <button
                  onClick={() => handleClick(elem.id)}
                  className="btn btn-success"
                >
                  Pobierz
                </button>
              </div>
            )
        )}
      </section>
    </div>
  );
}

export default App;
