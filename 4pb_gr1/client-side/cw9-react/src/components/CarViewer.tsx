import React from "react";
import { type Car, carsData } from "../models/carsData";



const CarViewer = () => {
  const [cars, setCars] = React.useState<Car[]>(carsData);
  return (
    <div className="d-flex">
      <button>&lt;&lt;</button>
      <div className="d-flex flex-column align-items-center m-2">
        <h3>{cars[1].title}</h3>
        <img
          src={"images/" + cars[1].src}
          alt={cars[1].alt}
          width="300"
          height="200"
        />
        <p>{cars[1].description}</p>
      </div>
      <button>&gt;&gt;</button>
    </div>
  );
};
export default CarViewer;
