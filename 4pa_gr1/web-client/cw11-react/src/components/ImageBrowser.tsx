import { useState } from "react"
import { images } from "../data/images"




const ImageBrowser = () => {
  
  const [index, setIndex] = useState(0)
  
  return (
    <>
      <h1 style={{
        textAlign:"center",
        borderBottom:"1px black solid"}}>Przeglądarka choinek</h1>
      <div className='row' style={{textAlign: 'center'}}>
        <input 
        
        type="button" 
        onClick={() => setIndex(index>0?index-1:images.length-1)}
        value="&lt;&lt;" />
        <img 
        src={images[index]} 
        alt={images[index]} />
        <input type="button" 
        onClick={() => setIndex(index+1<images.length?index+1:0)}
        value="&gt;&gt;" />
      </div>
      <div>{index}</div>
    </>
  )
}

export default ImageBrowser