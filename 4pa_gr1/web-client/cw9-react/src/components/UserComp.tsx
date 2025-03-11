import { ComponentProps } from "react";
import { type User } from "../data/users";
import { useState } from "react";

type Props = {
  user: User;
} & ComponentProps<"div">;

function UserComp({ user }: Props) {
  const [name, setName] = useState("noname");
  const [isLogged, setIsLogged] = useState(user.isLogged);
  
  console.log("rendering user");

  //let name = "noname";
  return (
    <div
      onClick={() => {
        // console.log((e.target as HTMLDivElement).innerHTML);
        //console.log(user.name);
        setName(user.name); 
        setIsLogged((prev)=>{
          prev = !prev;
          user.isLogged = prev;
          return prev;
        });
        user.isLogged = isLogged;
        console.log(name);
      }}
      style={{
        cursor: "pointer",
        minWidth: "300px",
        padding: "10px",
        border: "1px solid #ccc",
        margin: "10px",
        borderRadius: "5px",
        backgroundColor: user.isLogged ? "green" : "red",
      }}
    >
      <h2>User: {user.name}</h2>
      <p>
        Email: {user.email}
        {" "}<span style={{ textDecoration: "underline" }}>{name}</span>
      </p>
    </div>
  );
}

export default UserComp;
