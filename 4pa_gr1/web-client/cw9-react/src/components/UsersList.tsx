import { users } from "../data/users";
import UserComp from "./UserComp";

export default function UsersList() {
  return (
    <>
      <h3>Lista użytkowników</h3>
      <section style={{display: 'flex', flexWrap: 'wrap'}}>
       {users.map((elem,i)=>(<UserComp key={i} user={elem}/>))}
      </section>

    </>
  );
}
