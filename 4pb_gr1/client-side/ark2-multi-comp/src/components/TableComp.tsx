import type { Movie } from "../tools"


type Props = {
    movies: Movie[]
}

const TableComp = ({movies}:Props) => {
    console.log("renderowanie TableComp");
  return (
   <div>
        {movies.length > 0 && (<table className="table table-striped">
            <thead>
                <tr>
                    <th>tytuł</th>
                    <th>rodzaj</th>
                </tr>
                {movies.map((elem)=>(
                    <tr key={elem.id}>
                        <td>{elem.title}</td>
                        <td>{elem.genre}</td>                        
                    </tr>
                ))}
            </thead>
        </table>)}
    </div>
  )
}

export default TableComp