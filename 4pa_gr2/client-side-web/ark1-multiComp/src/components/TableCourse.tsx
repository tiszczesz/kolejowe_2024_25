import React from 'react'
import type { User } from '../tools';

type Props = {
    listUsers: User[];
}

const TableCourse = (props: Props) => {
  return (
   props.listUsers.length > 0 && (<table className='table table-striped'>
        <thead>
            <tr>
                <th>Uczestnik kursu</th>
                <th>Numer kursu</th>
            </tr>
        </thead>
        <tbody>
            {props.listUsers.map((u,i)=>(
                <tr key={i}>
                    <td>{u.userName}</td>
                    <td>{u.courseNumber}</td>
                </tr>
                ))}
        </tbody>
    </table>)
  )
}


export default TableCourse