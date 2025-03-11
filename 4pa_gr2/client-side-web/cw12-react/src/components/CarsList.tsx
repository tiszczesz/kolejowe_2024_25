import { cars } from "../data/cars";
import CarComp from "./CarComp";

const CarsList = () => {
  return (
    <div>
      <h3>Lista ogłoszeń</h3>
      {cars.map((elem, i) => (
        <CarComp car={elem} key={i} />
      ))}
    </div>
  );
};

export default CarsList;
