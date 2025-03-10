import { MouseEvent } from 'react';
import { type UserType } from '../data/users';

type Props = {
    user: UserType;
    handleClick: (e: MouseEvent<HTMLDivElement>) => void;
}

const User = ({user,handleClick}: Props) => {
    

    return (
        <div onClick={(e)=>handleClick(e)} className={user.isLogged ? "green" : "red"}>{user.name}</div>
    )
}
export default User