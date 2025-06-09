
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  console.log("render App");

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [colorA, setColorA] = useState("rgb(123,23,123)");
  const [colorB, setColorB] = useState("rgb(123,23,123)");
  const [colorC, setColorC] = useState("rgb(123,23,123)");
  const [colorD, setColorD] = useState("rgb(123,23,123)");
  const [colorE, setColorE] = useState("rgb(123,23,123)");

  useEffect(() => {
    console.log("usEffect");
    const interval = setInterval(() => {
      console.log("w setInterval");
      setTime(new Date().toLocaleTimeString())
      return () => clearInterval(interval);
    }, 1000)
  }, []);
  return (
    <>
      <div>
        Aktualny czas: {time}
      </div>
      <div className='d-flex gap-2 m-3'>
        <div className="color" style={{backgroundColor:colorA}}></div>
        <div className="color" style={{backgroundColor:colorB}}></div>
        <div className="color" style={{backgroundColor:colorB}}></div>
        <div className="color" style={{backgroundColor:colorB}}></div>
        <div className="color" style={{backgroundColor:colorB}}></div>
      </div>


    </>
  )
}

export default App
