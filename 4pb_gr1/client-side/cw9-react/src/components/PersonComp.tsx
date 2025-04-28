import { useState } from "react";
type Person = {
  name: string;
  age: number;
  isLogged: boolean;
};

function PersonComp() {
  const [person, setPerson] = useState<Person | undefined>({
    name: "Jan",
    age: 20,
    isLogged: true,
  });

  function handleClick(): void {
    if (person) {
      setPerson({
        ...person,
        isLogged: !person.isLogged,
      });
    } else {
      setPerson({
        name: "Jan",
        age: 20,
        isLogged: true,
      });
    }
  }
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        backgroundColor: person?.isLogged ? "lightblue" : "red",
      }}
    >
      <h4>Student</h4>
      <h5>{person?.name}</h5>
      <p>Wiek: {person?.age}</p>
      <div>
        <button className="btn btn-secondary" onClick={() => handleClick()}>
          {person?.isLogged ? "Wyloguj" : "Zaloguj"}
        </button>
      </div>
    </div>
  );
}

export default PersonComp;
