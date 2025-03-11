import { ComponentProps } from "react";
import { type User } from "../data/users";
import { useState } from "react";

type Props = {
  user: User;
} & ComponentProps<"div">;

function UserComp({ user }: Props) {
  const [currentUser, setCurrentUser] = useState(user);

  console.log("rendering user");

  return (
    <div
      onClick={() => {
        setCurrentUser((prevUser) => ({
          ...prevUser,
          name: user.name.toUpperCase(),
          isLogged: !prevUser.isLogged,
        }));
        console.log(currentUser.name);
      }}
      style={{
        cursor: "pointer",
        minWidth: "300px",
        padding: "10px",
        border: "1px solid #ccc",
        margin: "10px",
        borderRadius: "5px",
        backgroundColor: currentUser.isLogged ? "green" : "red",
      }}
    >
      <h2>User: {currentUser.name}</h2>
      <p>
        Email: {currentUser.email}{" "}
        <span style={{ textDecoration: "underline" }}>{currentUser.name}</span>
      </p>
    </div>
  );
}

export default UserComp;
