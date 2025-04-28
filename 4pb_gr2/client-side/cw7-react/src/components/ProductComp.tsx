import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

const ProductComp = () => {
  const [product, setProduct] = useState<Product | null>({
    id: 1,
    name: "Motylek 1",
    price: 100,
    description: "This is product 1",
    image: "motyl1.jpg",
  });
  function handleImageChange(): void {
    if (product) {
      const newProduct: Product = {
        ...product,
        image: product.image === "motyl1.jpg" ? "motyl2.jpg" : "motyl1.jpg",
      };
      setProduct(newProduct);
    }
  }
  function handleNameChange(): void {
    if(product){
        const newProduct: Product = {
            ...product,
            name: product.name = product.name+"X",
        };
        setProduct(newProduct);
    }
  }
  function handlePriceChange(): void {
    if(product){
        const newProduct: Product = {
            ...product,
            price: product.price*2,
        };
        setProduct(newProduct);
    }
  }

  return (
    <div>
      <h3>{product?.name}</h3>
      <img src={"images/" + product?.image} alt={product?.name} />
      <p>{product?.description}</p>
      <p>Price: {product?.price} PLN</p>
      <button
        onClick={() => handleImageChange()}
        className="btn btn-secondary m-2"
      >
        Zmień obrazek{" "}
      </button>
      <br />
      <button
      onClick={()=>handleNameChange()}
       className="btn btn-secondary m-2">Zmień nazwę</button>
      <br />
      <button
      onClick={()=>handlePriceChange()}
       className="btn btn-secondary m-2">Zmień cenę</button>
      <br />
    </div>
  );
};

export default ProductComp;
