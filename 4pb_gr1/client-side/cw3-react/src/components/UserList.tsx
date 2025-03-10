import { users, type UserType } from "../data/users"
import User from "./User"


const UserList = () => {
    return (
        <>
            <h1>UserList</h1>
            {users.map((user, index) => (
                <User key={index} user={user} />
            ))}
        </>
    )
}
export default UserList