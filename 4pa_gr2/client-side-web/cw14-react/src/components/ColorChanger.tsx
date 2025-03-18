import { useState } from "react";
import { type Color, colors } from "../data/colors";

const ColorChanger = () => {
  const [color, setColor] = useState<string>("white");
  function handleChange(value: string): void {
    setColor(value);
  }
  return (
    <div>
      <select
        onChange={(e) => handleChange(e.target.value)}
        className="form-select"
      >
        {colors.map((color: Color) => (
          <option key={color.name} value={color.hex}>
            {color.name}
          </option>
        ))}
      </select>
      <div className="scene" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default ColorChanger;
