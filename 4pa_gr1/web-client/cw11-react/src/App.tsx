import './App.css'
import {images} from './data/images'
function App() {


  return (
    <>
      <h1 style={{
        textAlign:"center",
        borderBottom:"1px black solid"}}>Przeglądarka choinek</h1>
      <div className='row' style={{textAlign: 'center'}}>
        <input 
        
        type="button" value="&lt;&lt;" />
        <img 
        src={images[0]} 
        alt={images[0]} />
        <input type="button" value="&gt;&gt;" />
      </div>
    </>
  )
}

export default App
