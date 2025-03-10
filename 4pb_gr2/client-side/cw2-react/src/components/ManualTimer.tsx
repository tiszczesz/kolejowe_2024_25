import { useState } from "react";

// type Props = {}

const ManualTimer = () => {
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString()
  );
  return (
    <>
      <button onClick={() => setCurrentTime(new Date().toLocaleTimeString())}>
        Podaj czas: {currentTime}
      </button>
      <br />
    </>
  );
};

export default ManualTimer;

// zdefiniuj komponent TextChanger, który będzie przepisywał tekst z inputa
// do diva podczas zmiany wartości inputa
// jeśli tekst w inpucie jest dłuższy niż 20 znaków zmienia sie
// kolor tekstu na czerwony w divie
