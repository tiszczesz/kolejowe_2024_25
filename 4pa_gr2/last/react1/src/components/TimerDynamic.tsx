import React, { useEffect, useState } from "react";

type Props = {
  backColor?: string;
};

function TimerDynamic({ backColor }: Props) {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
  console.log("TimerDynamic component rendered");
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    // Cleanup function to clear the interval when the component unmounts
  }, []);
  return (
    <div
      style={{
        border: "solid 1px black",
        padding: "10px",
        backgroundColor: backColor ? backColor : "lightblue",
      }}
    >
      Czas: {time}
    </div>
  );
}

export default TimerDynamic;
