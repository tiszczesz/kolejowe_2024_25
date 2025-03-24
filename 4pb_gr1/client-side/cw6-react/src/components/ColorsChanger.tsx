import React, { useState } from "react";
import ColorRange from "./ColorRange";
type ColorState = {
    red: number;
    green: number;
    blue: number;
}

function ColorsChanger() {
  const [colors, setColors] = useState<ColorState>({red: 0, green: 0, blue: 0});
  function onChangeColor(color: string, value: number): void {  
    setColors({...colors, [color]: value});
  }

  return (
    <>
      <h1>Zmiana kolorów</h1>
      <ColorRange colorName="red" handleChange={onChangeColor} />
      <ColorRange colorName="green" handleChange={onChangeColor} />
      <ColorRange colorName="blue" handleChange={onChangeColor} />
      <div>
        {colors.red}, {colors.green}, {colors.blue}
      </div>
    </>
  );
}

export default ColorsChanger;
