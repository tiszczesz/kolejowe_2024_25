import { ComponentProps, MouseEvent } from 'react';
import { type UserType } from '../data/users';

type Props = {
    user: UserType;
    handleClick: (e: MouseEvent<HTMLDivElement>,user:UserType) => void;
} & ComponentProps<'div'>;

const User = ({user,handleClick,...rest}: Props) => {
    

    return (
        <div style={rest.style}  
        onClick={(e)=>handleClick(e,user)} 
        className={user.isLogged ? "green" : "red"}>{user.name}</div>
    )
}
export default User