import { useState } from "react"

const TextChanger = () => {
    const [text, setText] = useState('')
  return (
    <div className="container">        
        <input 
        onChange={(e)=>setText(e.target.value)}
        type="text" 
        value={text} /><span>tu ma być długość tekstu</span>
        <div>{text}</div>
    </div>
  )
}

export default TextChanger