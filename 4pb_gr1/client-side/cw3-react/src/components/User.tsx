import { ComponentProps, MouseEvent, PropsWithoutRef } from 'react';
import { type UserType } from '../data/users';

type Props = {
    user: UserType;
    handleClick: (e: MouseEvent<HTMLDivElement>) => void;
} & ComponentProps<'div'>;

const User = ({user,handleClick}: Props) => {
    

    return (
        <div style={{cursor:'pointer'}} onClick={(e)=>handleClick(e)} className={user.isLogged ? "green" : "red"}>{user.name}</div>
    )
}
export default User