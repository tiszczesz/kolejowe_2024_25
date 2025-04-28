import { useState } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

const ProductComp = () => {
    const [product, setProduct] = useState<Product | null>({
        id: 1,
        name: "Motylek 1",
        price: 100,
        description: "This is product 1",
        image: "motyl1.jpg"
    });
  return (
    <div>
        <h3>{product?.name}</h3>
        <img src={'images/'+product?.image} 
        alt={product?.name} 
        />
        <p>{product?.description}</p>   
        <p>Price: {product?.price} PLN</p>
        <button className="btn btn-secondary m-2">Zmień obrazek </button><br/>
        <button className="btn btn-secondary m-2">Zmień nazwę</button><br/>
        <button className="btn btn-secondary m-2">Zmień cenę</button><br/>
    </div>
  )
}

export default ProductComp