import "./App.css";
import UsersList from "./components/UsersList";
import Image from "./components/Image";
import kolej from "./assets/kolej.jpg";

function App() {
  return (
    <>
      <Image
        style={{ position: "absolute", top: 0, right: 0, width: "300px" }}
        src={kolej}
        alt="Kolej parowóz"
      />
      <Image
        className="App-logo"
        style={{ position: "absolute", top: 0, left: 0 }}
        src="react.svg"
        alt="React logo"
      />
      <UsersList />
    </>
  );
}

export default App;
