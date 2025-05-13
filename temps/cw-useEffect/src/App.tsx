
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  useEffect( ()=> {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(interval)
  },[]);
  return (
    <>
     <h1>useEffect</h1>
      <div>
        {time}
      </div>

    </>
  )
}

export default App
