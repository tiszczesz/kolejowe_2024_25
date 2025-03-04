import {type User } from "../data/users";

type Props = {
  user: User;
};

function UserComp({ user }: Props) {
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        margin: "10px",
        borderRadius: "5px",
        backgroundColor: user.isLogged ? "green" : "red",
      }}
    >
      <h2>User: {user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserComp;
