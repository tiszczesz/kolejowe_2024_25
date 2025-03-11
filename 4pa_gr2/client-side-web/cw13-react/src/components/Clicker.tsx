import { useState } from "react";

const Clicker = () => {
  const [counter, setCounter] = useState(0);
  console.log("Clicker renderuje się");
  //let counter = 0;
  return (
    <>
      <div
        onClick={() => {
          //counter++;
          setCounter(counter + 1); //counter = counter + 1;
          console.log("Kliknięto!!!!", counter);
        }}
        style={{ cursor: "pointer", padding: "10px", fontSize: "3rem" }}
      >
        Clicker
      </div>
      <div>Informacja o kliknięciu {counter}</div>
    </>
  );
};

export default Clicker;
