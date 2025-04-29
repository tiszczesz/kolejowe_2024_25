import { useState } from "react";

type Person = {
  id: number;
  name: string;
  age: number;
  image: string;
  isLoggedIn?: boolean;
};
const PersonCom = () => {
  const [person, setPerson] = useState<Person>({
    id: 1,
    name: "Janina",
    age: 20,
    image: "images/p1.jpg",
    isLoggedIn: false,
  });
  function handleChangeImage(): void {
    // zmiana stanu obiektu
    const newPerson: Person = {
      ...person,
      image:
        person.image === "images/p1.jpg" ? "images/p2.jpg" : "images/p1.jpg",
    };
    // zmiana stanu komponentu
    setPerson(newPerson);
  }
  function handleChangeName(): void {
    // zmiana stanu obiektu
    const newPerson: Person = {
      ...person,
      name: person.name === "Janina" ? "Grażyna" : "Janina",
    };
    // zmiana stanu komponentu
    setPerson(newPerson);
  }
  const handleChangeAge = (): void => {
    // zmiana stanu obiektu
    const newPerson: Person = {
      ...person,
      age: person.age + 1,
    };
    // zmiana stanu komponentu
    setPerson(newPerson);
  };
  function handleLoggin(): void {
    const newPerson: Person = {
        ...person,
        isLoggedIn: !person.isLoggedIn,
    }
    setPerson(newPerson);
  }

  return (
    <section
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        backgroundColor: person?.isLoggedIn ? "lightblue" : "red",
      }}
    >
      <h3>{person.name}</h3>
      <h5>wiek: {person.age}</h5>
      <div>
        <img src={person.image} alt={person.image} />
      </div>
      <button
        onClick={() => handleChangeImage()}
        className="btn btn-primary m-2"
      >
        zmień obrazek
      </button>
      <button
        onClick={() => handleChangeName()}
        className="btn btn-primary m-2"
      >
        zmień nazwę
      </button>
      <button onClick={() => handleChangeAge()} className="btn btn-primary m-2">
        zmień wiek
      </button>
      <button onClick={() => handleLoggin()} className="btn btn-primary m-2">
        {person.isLoggedIn ? "wyloguj" : "zaloguj"}
      </button>
    </section>
  );
};

export default PersonCom;
