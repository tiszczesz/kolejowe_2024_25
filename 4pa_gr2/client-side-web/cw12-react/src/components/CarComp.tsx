import { Car } from "../data/cars";

type Props = {
  car: Car;
};

const CarComp = ({ car }: Props) => {
  return (
    <div className="notice">
      <h3>{car.model}</h3>
      <p>
        Rok: {car.year}
        <span style={{ textDecoration: car.promo ? "underline" : "none" }}>
          {" "}
          Cena: {car.price} PLN
        </span>
        <span style={{ color: car.color, fontWeight: "bold" }}>
          {" "}
          kolor: {car.color}
        </span>
      </p>
    </div>
  );
};

export default CarComp;
