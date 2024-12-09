import { useEffect } from 'react';
import './App.css'




function App() {


  useEffect( () =>  {
    fetch('http://localhost:3000/games').then(response => response.json()).then(json => console.log(json))
  }, [])
  return (
    <>
     <h1>Nic</h1>
    </>
  )
}

export default App
