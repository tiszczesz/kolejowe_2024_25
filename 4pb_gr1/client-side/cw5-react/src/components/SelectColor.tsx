import { useState } from "react";
import { colors } from "../data/colors";


const SelectColor = () => {
    const [listColors, setListColors] = useState<string[]>(colors);
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  return (
    <div>
        <div>
            <input type="text" placeholder="dodaj kolor '#213322'" />
            <select 
            onChange={(e)=>setSelectedColor(e.target.value)}
            >
                {listColors.map((color,index)=>(
                    <option key={index} value={color}>{color}</option>
                ))}
            </select>
        </div>
        <div style={{
            width: '200px', height: '100px', 
            backgroundColor: selectedColor,
            border: '1px solid #000',
            }}>

        </div>
    </div>
  )
}
export default SelectColor;