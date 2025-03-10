import { type UserType } from '../data/users';

type Props = {
    user: UserType;
}

const User = (props: Props) => {
    return (
        <div>{props.user.name}</div>
    )
}
export default User