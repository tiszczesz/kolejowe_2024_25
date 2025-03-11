import { Car } from "../data/cars";

type Props = {
  car: Car;
};

const CarComp = ({ car }: Props) => {
  return (
    <div className="notice">
      <h3>{car.model}</h3>
      <div>
        Rok: {car.year}
        <div style={{ textDecoration: car.promo ? "underline" : "none" }}>
          Cena: {car.price} PLN
        </div>
        <div style={{ color: car.color, fontWeight: "bold" }}>
          kolor: {car.color} 
        </div>
      </div>
    </div>
  );
};

export default CarComp;
