import { useState } from "react";
import { colors } from "../data/colors";

const TextChanger = () => {
    const [text, setText] = useState('')
    const [color, setColor] = useState('black')
  return (
    <div className="container">
        <button>Wylosuj kolor</button> <br/>       
        <input 
        onChange={(e)=>setText(e.target.value)}
        type="text" 
        value={text} /><span>długość tekstu: {text.length}</span>
        <div style={{fontSize:"3em",color:color}}>{text}</div>
    </div>
  )
}

export default TextChanger