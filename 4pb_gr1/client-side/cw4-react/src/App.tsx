import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const colors = ["white", "red", "green", "blue", "yellow", "purple"];
  console.log("Renderowanie komponentu App");
  
  return (
    <div className="container">
      <h1>Proste operacje na elemencie JSX</h1>
      <ul>
        {colors.map((color, index) => (
          <li style={{cursor:"pointer"}} key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
