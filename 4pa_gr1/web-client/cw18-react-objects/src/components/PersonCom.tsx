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
    <div>PersonCom</div>
  )
}

export default PersonCom