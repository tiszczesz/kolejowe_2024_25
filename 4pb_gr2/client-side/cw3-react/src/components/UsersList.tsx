import { useState } from "react";
import { User, users } from "../data/users";

type Props = {
    userInfo: (user:User) => void;
};

const UsersList = (props: Props) => {
  const [usersList, setUsersList] = useState(users);
  function changeLoginStatus(id: number): void {
    const newUsersList = usersList.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          isLogin: !user.isLogin,
        };
      }
      return user;
    });
    setUsersList(newUsersList);
  }
  const loggedUsers = usersList.filter((user) => user.isLogin).length;
  return (
    <div className="container">
      <h3>
        Lista użytkowników{" "}
        <i>
          ilość: {usersList.length} zalogowani: {loggedUsers} niezalogowani:{" "}
          {usersList.length - loggedUsers}
        </i>
      </h3>
      <ul className="list-group">
        {usersList.map((user) => (
          <li
            key={user.id}
            className="list-group-item"
            style={{
              backgroundColor: user.isLogin ? "lightgreen" : "lightcoral",
            }}
            onClick={() => changeLoginStatus(user.id)}
          >
            {user.name} <i>({user.email})</i>
            <button
              className="btn btn-danger btn-sm float-end"
              onClick={(e) => {
                e.stopPropagation();
                setUsersList(usersList.filter((u) => u.id !== user.id));
                props.userInfo(user);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
