import { useState } from "react";

const IncreaseText = () => {
  const [content, setContent] = useState("Hello World");
  console.log("Renderowanie komponentu IncreaseText");

  return (
    <div
      onClick={
        () => {
          console.log("Kliknięto tekst");
          // (e.target as HTMLDivElement).innerHTML += 'a' ;
          setContent(content + "a");
        } //tutaj powinna być funkcja zwiększająca rozmiar tekstu
      }
    >
      {content}
    </div>
  );
};

export default IncreaseText;
