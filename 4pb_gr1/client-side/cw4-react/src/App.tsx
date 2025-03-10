import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { useState } from "react";
import IncreaseText from "./components/IncreaseText";

function App() {
  //uzycie hooka useState do przechowywania koloru i reakcji na kliknięcie 
  // wymusza renderowanie komponentu
  const [myColor, setMyColor] = useState("noname");

  const colors = ["white", "red", "green", "blue", "yellow", "purple"];
  console.log("Renderowanie komponentu App");
 // let myColor = "noname"; //zła droga
  //musimy wymusić ponowne renderowanie komponentu
  return (
    <div className="container" style={{backgroundColor: myColor}}>
      <h1>Proste operacje na elemencie JSX</h1>
      <ul>
        {colors.map((color, index) => (
          <li style={{ cursor: "pointer" }} key={index} 
          onClick={(e)=>{
            console.log(`Kliknięto kolor ${color}`);
            console.log((e.target as HTMLLIElement).innerHTML);
            setMyColor((e.target as HTMLLIElement).innerHTML);
            console.log(myColor);
          }}>
            {color}
          </li>
        ))}
      </ul>
      {myColor}
      <hr />
      <IncreaseText />
    </div>
  );
}

export default App;
