import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const names = ["Jan", "Anna", "Maria", "Piotr", "Zofia", "Krzysztof"];
  // const listNames = names.map((name, index) => <li key={index}>{name}</li>);
  // console.log(listNames);
  return (
    <div className="container">
      <h1>Ćwiczenie 2</h1>
      <ul>
        {/* <li>{names[0]}</li>
        <li>{names[1]}</li>
        <li>{names[2]}</li>
        <li>{names[3]}</li> */}
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
//polskie imiona żenśkie pogrubione
export default App;
