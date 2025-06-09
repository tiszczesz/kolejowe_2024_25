import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  console.log("render App");

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [colorA, setColorA] = useState("rgb(123,23,123)");
  const [colorB, setColorB] = useState("rgb(218, 103, 103)");
  const [colorC, setColorC] = useState("rgb(201, 214, 83)");
  const [colorD, setColorD] = useState("rgb(168, 138, 127)");
  const [colorE, setColorE] = useState("rgb(100, 106, 196)");

  useEffect(() => {
    console.log("usEffect");
    const interval = setInterval(() => {
      console.log("w setInterval");
      const randomElement = Math.floor(Math.random() * 5);
      console.log("randomElement", randomElement);
      const newColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
      switch (randomElement) {
        case 0:
          setColorA(newColor);
          break;
        case 1:
          setColorB(newColor);
          break;
        case 2:
          setColorC(newColor);
          break;
        case 3:
          setColorD(newColor);
          break;
        case 4:
          setColorE(newColor);
          break;
      }
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div>Aktualny czas: {time}</div>
      <div className="d-flex gap-2 m-3 flex-wrap">
        <div className="color" style={{ backgroundColor: colorA }}></div>
        <div className="color" style={{ backgroundColor: colorB }}></div>
        <div className="color" style={{ backgroundColor: colorC }}></div>
        <div className="color" style={{ backgroundColor: colorD }}></div>
        <div className="color" style={{ backgroundColor: colorE }}></div>
      </div>
    </>
  );
}

export default App;
