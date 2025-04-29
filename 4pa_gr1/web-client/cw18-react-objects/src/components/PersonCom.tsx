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
        name: 'Jan',
        age: 20,
        image: ''
    })
  return (
    <div>PersonCom</div>
  )
}

export default PersonCom