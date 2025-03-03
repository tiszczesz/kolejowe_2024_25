import "./App.css";
import Message from "./components/Message";
import MyComponent1 from "./components/MyComponent1";
import Rectangle from "./components/Rectangle";

function App() {
  return (
    <>
      <p>Aktualna data: {new Date().toLocaleDateString()}</p>
      <p>d ad asd asd ad</p>
      <hr />
      <MyComponent1 />
      <Message user="Adam Nowak" division="4prB" schoolYear="2024/25" />
      <Message user="Roman Boman" division="4prB" schoolYear="2024/25" />
      <Message user="Roman XXXX" division="4prB" schoolYear="2024/25" />
      <div style={{ display: "flex", gap: "10px" }}>
        <Rectangle
          widthRect={200}
          heightRect={50}
          colorRect="red"
          borderRect="1px solid black"
        />
        <Rectangle
          widthRect={100}
          heightRect={50}
          colorRect="blue"
          borderRect="none"
        />
      </div>
    </>
  );
}

export default App;
