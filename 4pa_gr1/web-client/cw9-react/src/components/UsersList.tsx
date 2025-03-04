import { users } from "../data/users";
import UserComp from "./UserComp";

export default function UsersList() {
  return (
    <>
      <h3>Lista użytkowników</h3>
      <UserComp user={users[0]} />
      <UserComp user={users[1]} />
      <UserComp user={users[2]} />
    </>
  );
}
