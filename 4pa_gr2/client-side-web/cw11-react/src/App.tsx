import "./App.css";
import First from "./components/First";
import Message from "./components/Message";

function App() {
  return (
    <>
      {/* <h3>Ala ma kota</h3>
      <p>sdfsdf sdf sfsf s</p>
      <ul>
        <li>asd</li>
        <li>asad</li>
        <li>eeee</li>
        <img src="vite.svg" alt="sadasds" />
      </ul> */}
    <First  name="Adam" age={22}/>
    <First name="Roman" age={16}/>
    <First name="Daniel" age={33} isBorder={true}/>
    <Message text="Ala ma kota" color="red" fontSize="20px" border={true}/>
    <Message text="Ala" color="blue" fontSize="10px" border={false}/>

    </>
  );
}

export default App;
