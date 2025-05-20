

type Props = {
    list:string[]
}

const ListCourses = (props: Props) => {
  return (
    <>
    <h2>Liczba kursów: {props.list.length}</h2>
      <ol>
        {props.list.map((elem,i)=>(
          <li key={i}>{elem}</li>
        ))}
      </ol>
    </>
  )
}

export default ListCourses