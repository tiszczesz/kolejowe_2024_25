import { useState } from "react"

type Person = {
    id:number,
    name:string,
    age:number,
    image:string,
}
const PersonCom = () => {
    const [person, setPerson] = useState<Person>({
        id: 1,
        name: 'Janina',
        age: 20,
        image: 'images/p1.jpg'
    })
  return (
    <section>
        <h3>{person.name}</h3>
        <h5>wiek: {person.age}</h5>
        <div>
            <img src={person.image} alt={person.image} />
        </div>
        <button className="btn btn-primary m-2">zmień obrazek</button>
        <button className="btn btn-primary m-2">zmień nazwę</button>
        <button className="btn btn-primary m-2">zmień wiek</button>
    </section>
  )
}

export default PersonCom