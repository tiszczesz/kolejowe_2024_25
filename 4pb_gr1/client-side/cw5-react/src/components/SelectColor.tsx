import { MouseEvent, useRef, useState } from "react";
import { colors } from "../data/colors";


const SelectColor = () => {
    console.log('render SelectColor');
    //odwolanie do inputa poprzez useRef ==> inputRef.current
    const inputRef = useRef<HTMLInputElement>(null);
    const [listColors, setListColors] = useState<string[]>(colors);
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
    function isColorOK(color: string): boolean {
        const op = new Option().style;
        op.color = color;
        console.log(op.color);
        const hexColorPattern = /^#[0-9A-F]{6}$/i;        
        return op.color === color || hexColorPattern.test(color);
    }
    function handleAddColor(): void {
        if (inputRef.current) {
            console.log(inputRef.current.value);
            const color = inputRef.current.value;
            if (!isColorOK(color)) {
                alert('Podaj kolor w formacie #123456');
                return;
            }
            setListColors([...listColors, color]);
        }
    }

    return (
        <div className="container">
            <div>
                <input ref={inputRef} type="text" placeholder="dodaj kolor '#213322'" />
                <button onClick={() => handleAddColor()}>Dodaj kolor</button><br />
                <select
                    onChange={(e) => setSelectedColor(e.target.value)}
                >
                    {listColors.map((color, index) => (
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