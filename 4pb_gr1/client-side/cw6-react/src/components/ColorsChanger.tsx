import React, { useState } from "react";
import ColorRange from "./ColorRange";

function ColorsChanger() {
  const [colors, setColors] = useState<string[]>();
  function onChangeColor(color: string, value: number): void {
    console.log(`rgb(${color === "red" ? value : 0},
        ${color === "green" ? value : 0},
        ${color === "blue" ? value : 0})`);
    setColors([])
  }

  return (
    <>
      <h1>Zmiana kolorów</h1>
      <ColorRange colorName="red" handleChange={onChangeColor} />
      <ColorRange colorName="green" handleChange={onChangeColor} />
      <ColorRange colorName="blue" handleChange={onChangeColor} />
    </>
  );
}

export default ColorsChanger;
