import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import ManualTimer from "./components/ManualTimer";
import TextChanger from "./components/TextChanger";

function App() {
  const names = [
    "Jan",
    "Anna",
    "Maria",
    "Piotr",
    "Zofia",
    "Krzysztof",
    "Wojciech",
    "Barbara",
    "Karolina",
    "Małgorzata",
    "Wojciech",
    "Katarzyna",
    "Tomasz",
    "Paweł",
    "Michał",
  ];
  const [text, setText] = useState("Hello World");
  // const listNames = names.map((name, index) => <li key={index}>{name}</li>);
  // console.log(listNames);
  //let text = "Hello World";
  return (
    <div className="container">
      <h1>Ćwiczenie 2</h1>
      <ul>
        {names.map((name, index) => (
          <li
            onClick={(e) => {
              const target = e.target as HTMLLIElement;
              console.log(target.innerText);
              target.style.color = "red";
              setText(target.innerText);
              console.log(text);
            }}
            style={{
              fontWeight: name.endsWith("a") ? "bold" : "none",
              cursor: "pointer",
            }}
            key={index}
          >
            {name}
          </li>
        ))}
      </ul>
      {text} {/* brak zmiany tekstu */}
      <hr />
      <ManualTimer />
      <TextChanger />
    </div>
  );
}
//polskie imiona żenśkie pogrubione
export default App;
