import "./App.css";
import CompWithProps from "./components/CompWithProps";
import MyComponent1 from "./components/MyComponent1";
import Rectangle from "./components/Rectangle";

function App() {
  return (
    <>
      <h2 className="ddd">React: </h2>
      <h4>ASasASss</h4>
      <hr />
      <MyComponent1 />
      <div style={{ display: "flex", gap: "10px" }}>
        <Rectangle width={100} height={50} color="red" isBorder={true} />
        <Rectangle width={200} height={100} color="blue" />
        <Rectangle width={300} height={150} color="green" isBorder={true} />
        <Rectangle width={400} height={100} color="yellow" />
      </div>
      <hr />
      <CompWithProps title="Tytuł" style={{ color: "blue",border:"solid 1px grey" }} className="temp"  />
    </>
  );
}

export default App;
