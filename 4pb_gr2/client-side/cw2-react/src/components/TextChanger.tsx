import { useState } from "react";

const TextChanger = () => {
  const [text, setText] = useState<string>("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div style={{ color: text.length > 20 ? "red" : "black" }}>{text}</div>
    </div>
  );
};

export default TextChanger;
