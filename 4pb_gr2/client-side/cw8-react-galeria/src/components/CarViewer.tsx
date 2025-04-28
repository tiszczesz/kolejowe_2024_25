import React, { useState } from "react";
import { type Car, carsData } from "../models/carsData";



const CarViewer = () => {
  const [cars, setCars] = useState<Car[]>(carsData);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  console.log(currentIndex);
  function handleLikes(id: number): void {
    const updatedCars = cars.map((car) => {
      if (car.id === id) {
        return { ...car, likes: car.likes + 1 };
      }
      return car;
    });
    setCars(updatedCars);
  }

  return (
    <div className="d-flex">
      <button
        onClick={() =>
          setCurrentIndex(
            currentIndex - 1 < 0 ? currentIndex + cars.length-1 : currentIndex - 1
          )
        }
      >
        &lt;&lt;
      </button>
      <div className="d-flex flex-column align-items-center m-2">
        <h3>{cars[currentIndex].title}</h3>
        <img
          src={"images/" + cars[currentIndex].src}
          alt={cars[currentIndex].alt}
          width="300"
          height="200"
        />
        <p>{cars[currentIndex].description}</p>
        <div>
          <button
            onClick={() => handleLikes(cars[currentIndex].id)}
            className="btn btn-success"
          >
            Likes
          </button>
          <div>Likes: {cars[currentIndex].likes}</div>
        </div>
      </div>
      <button onClick={() => setCurrentIndex((currentIndex + 1) % cars.length)}>
        &gt;&gt;
      </button>
    </div>
  );
};
export default CarViewer;
