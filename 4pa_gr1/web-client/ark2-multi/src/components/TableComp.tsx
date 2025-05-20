import React from 'react'
import type { Movie } from '../data'

type TableProps = {
    movies:Movie[]
}

const TableComp = (props: TableProps) => {
  return (
    <>
    <h2>Zbiór filmów: {props.movies.length}</h2>
    {props.movies.length === 0 ? <p>Brak filmów</p> : (
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Lp</th>
                    <th>Tytuł</th>
                    <th>Rodzaj</th>
                </tr>
            </thead>
            <tbody>
                {props.movies.map((m,i)=>(
                    <tr key={m.id}>
                        <td>{i+1}</td>
                        <td>{m.title}</td>
                        <td>{m.genre}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )}
    </>
  )
}

export default TableComp