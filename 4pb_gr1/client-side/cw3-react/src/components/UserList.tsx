import { JSX } from "react"
import { MouseEvent } from "react"
import { users } from "../data/users"
import User from "./User"


const UserList = () => {
    const elem = users.map((user, index) => (
        <User handleClick={userClick} key={index} user={user} />
    ))
    // const tab2:JSX.Element[]= [];
    // users.forEach((user, index) => {
    //     tab2.push(<User key={index} user={user} />)
    // })
    console.log(elem);

    return (
        <>
            <h1>UserList</h1>
            {/* {users.map((user, index) => (
                <User key={index} user={user} />
            ))} */}
            {elem}
            <hr />
            {/* {tab2} */}
        </>
    )
}
export default UserList

function userClick(e: MouseEvent<HTMLDivElement>): void {
    console.log(e.currentTarget.innerHTML);
}
