import React from "react";
import { type Car, carsData } from "../models/carsData";

type Props = {};

const CarViewer = (props: Props) => {
  const [cars, setCars] = React.useState<Car[]>(carsData);
  return <div>CarViewer</div>;
};
export default CarViewer;
