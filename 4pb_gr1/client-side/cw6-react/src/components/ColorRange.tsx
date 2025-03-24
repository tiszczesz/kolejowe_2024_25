import { useState } from "react";


type Props = {
    colorName: string;
    handleChange: (color:string,value:number) => void;
}

function ColorRange({colorName,handleChange}: Props) {
    const [color, setColor] = useState(0);
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        margin: '10px',
        padding: '10px',
        border: '1px solid black',
        width: '400px',
        justifyContent: 'space-around',
        backgroundColor:colorName
    }}>
        <label htmlFor={colorName} style={{fontWeight:"bold"}}>{colorName}: {color}</label>
        <input 
        onChange={(e)=>{
            handleChange(colorName, parseInt(e.target.value));
            setColor(parseInt(e.target.value));
        }}
        type="range" id={colorName}  min="0" max="255" value={color} />
    </div>
  )
}

export default ColorRange