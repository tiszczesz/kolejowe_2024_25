import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { data, type ImageItem } from "./data";

function App() {
  const [animals, setAnimals] = useState(true);
  const [flowers, setFlowers] = useState(true);
  const [cars, setCars] = useState(true);
  const [photos, setPhotos] = useState(data);
  function handleClick(item: ImageItem): void {
    const newPhotos = photos.map((photo) => {
      if (photo.id === item.id) {
        return { ...photo, downloads: photo.downloads + 1 };
      }
      return photo;
    });
    setPhotos(newPhotos);
  }

  return (
    <div className="container">
      <h1>Kategorie zdjęć:</h1>
      <section className="d-flex wrap gap-2">
        <div className="form-switch">
          <input
            className="form-check-input"
            onChange={() => setFlowers(!flowers)}
            type="checkbox"
            id="flowersId"
            checked={flowers}
          />
          <label className="form-check-label" htmlFor="flowersId">
            Kwiaty
          </label>
        </div>
        <div className="form-switch">
          <input
            className="form-check-input"
            onChange={() => setAnimals(!animals)}
            type="checkbox"
            id="animalsId"
            checked={animals}
          />
          <label className="form-check-label" htmlFor="animalsId">
            Zwierzęta
          </label>
        </div>
        <div className="form-switch">
          <input
            className="form-check-input"
            onChange={() => setCars(!cars)}
            type="checkbox"
            id="carsId"
            checked={cars}
          />
          <label className="form-check-label" htmlFor="carsId">
            Samochody
          </label>
        </div>
      </section>
      <section className="d-flex flex-wrap gap-2">
        {flowers &&
          photos.map(
            (item) =>
              item.category === 1 && (
                <div key={item.id}>
                  <img src={`assets/${item.filename}`} alt={item.alt} />
                  <div>Pobrań: {item.downloads}</div>
                  <button
                    onClick={() => handleClick(item)}
                    className="btn btn-success"
                  >
                    Pobierz
                  </button>
                </div>
              )
          )}
        {animals &&
          photos.map(
            (item) =>
              item.category === 2 && (
                <div key={item.id}>
                  <img src={`assets/${item.filename}`} alt={item.alt} />
                  <div>Pobrań: {item.downloads}</div>
                  <button
                    onClick={() => handleClick(item)}
                    className="btn btn-success"
                  >
                    Pobierz
                  </button>
                </div>
              )
          )}
        {cars &&
          photos.map(
            (item) =>
              item.category === 3 && (
                <div key={item.id}>
                  <img src={`assets/${item.filename}`} alt={item.alt} />
                  <div>Pobrań: {item.downloads}</div>
                  <button
                    onClick={() => handleClick(item)}
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
