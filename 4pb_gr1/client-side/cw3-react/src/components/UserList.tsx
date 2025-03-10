import { users } from "../data/users"
import User from "./User"


const UserList = () => {
    const elem = users.map((user, index) => (
        <User key={index} user={user} />
    ))
    console.log(elem);

    return (
        <>
            <h1>UserList</h1>
            {/* {users.map((user, index) => (
                <User key={index} user={user} />
            ))} */}
            {elem}
        </>
    )
}
export default UserList