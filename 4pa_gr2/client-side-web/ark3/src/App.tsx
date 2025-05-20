import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { images as elems } from "./data";

function App() {
  const [flowers, setFlowers] = useState(true);
  const [animals, setAnimals] = useState(true);
  const [cars, setCars] = useState(true);
  const [images, setImages] = useState(elems);
  console.log(flowers, animals, cars);

  function handleClick(id: number) {
    const newImages = images.map((elem) => {
      if (elem.id === id) {
        return { ...elem, downloads: elem.downloads + 1 };
      }
      return elem;
    });
    //renderowanie komponentu
    setImages(newImages);
  }

  return (
    <div className="container">
      <h1>Kategorie zdjęć</h1>
      <section className="d-flex gap-2">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            checked={flowers}
            onChange={() => setFlowers(!flowers)}
            type="checkbox"
            id="flowersId"
          />
          <label className="form-check-label" htmlFor="flowersId">
            Kwiaty
          </label>
        </div>
        <div className="form-check form-switch">
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
        </div>
        <div className="form-check form-switch">
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
        </div>
      </section>
      <section className="d-flex gap-2 flex-wrap">
        {images.map((img, index) => (
            (flowers && img.category === 1 ||
            animals && img.category === 2 ||
            cars && img.category === 3)            
            &&
            <div key={index}>
            <img src={"assets/" + img.filename} alt="" />
            <h4>Pobrano: {img.downloads}</h4>
            <button
              onClick={() => {
                handleClick(img.id);
              }}
              className="btn btn-success"
            >
              Pobierz
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
