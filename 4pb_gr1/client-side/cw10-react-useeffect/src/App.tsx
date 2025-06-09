
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  console.log("render App");

  const [time, setTime] = useState(new Date().toLocaleTimeString())
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
    </>
  )
}

export default App
