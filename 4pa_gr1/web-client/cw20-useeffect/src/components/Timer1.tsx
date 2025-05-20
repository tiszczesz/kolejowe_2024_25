import { useEffect, useState } from "react";

type Props = {};

const Timer1 = (props: Props) => {
    console.log("renderowanie komponentu timer1");
    
  //ustawienie stanu zegara
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    //ustawienie interwału
    const interval = setInterval(() => {
        //ustawienie stanu zegara
      setTime(new Date().toLocaleTimeString());
      console.log("Timer1", time);
      
    }, 1000);
    //czyszczenie interwału
    return () => clearInterval(interval);
  }, [time]);
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "2rem",
        color: "blue",
        fontWeight: "bold",
      }}
    >
      {time}
    </div>
  );
};

export default Timer1;
