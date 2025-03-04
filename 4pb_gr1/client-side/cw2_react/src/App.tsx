import "./App.css";
import ColorsText from "./components/ColorsText";
import { colors } from "./data/colors";

function App() {
  return (
    <>
      <h1>Ćwiczenie React 2</h1>
      <ColorsText text="Hello World!" textColor={colors[0]} />
      <ColorsText text="Inny tekst" textColor={colors[1]} />
      <ColorsText text="XXXX tekst" textColor={colors[2]} />
    </>
  );
}

export default App;
