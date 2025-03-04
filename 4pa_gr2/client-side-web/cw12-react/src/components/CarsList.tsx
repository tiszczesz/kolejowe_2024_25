import { cars } from "../data/cars"
import CarComp from "./CarComp"



const CarsList = () => {
  return (
    <div>
        <h3>Lista ogłoszeń</h3>
        <CarComp car={cars[0]} />
        <CarComp car={cars[1]} />
        <CarComp car={cars[2]} />
        <CarComp car={cars[3]} />
    </div>
  )
}

export default CarsList