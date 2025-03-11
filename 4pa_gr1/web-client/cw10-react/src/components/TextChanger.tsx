import { useState } from "react"

const TextChanger = () => {
    const [text, setText] = useState('')
  return (
    <div className="container">        
        <input 
        onChange={(e)=>setText(e.target.value)}
        type="text" 
        value={text} /><span>długość tekstu: {text.length}</span>
        <div>{text}</div>
    </div>
  )
}

export default TextChanger