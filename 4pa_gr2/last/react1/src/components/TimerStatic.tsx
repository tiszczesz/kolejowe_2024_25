import { useState, type MouseEvent } from "react";

type Props = {};

const TimerStatic = (props: Props) => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
  console.log("TimerStatic component rendered");
  function handleClick(e: MouseEvent<HTMLInputElement>): void {
    console.log(new Date().toLocaleTimeString());
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <>
      <div>
        <input
          className="btn btn-primary"
          type="button"
          onClick={(e) => handleClick(e)}
          value="Podaj aktualny czas"
        />
      </div>
      <div>Aktalny czas: {time}</div>
    </>
  );
};

export default TimerStatic;
