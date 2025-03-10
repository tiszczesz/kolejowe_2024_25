import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UsersList from "./components/UsersList";
import { useState } from "react";
import { User } from "./data/users";

function App() {
  const [info, setInfo] = useState<string>("");
  function getInfo(user: User): void {
    setInfo(`usunięto użytkownika: ${user.name} (${user.email})`);
  }

  return (
    <>
      <div className="badge text-bg-secondary">{info}</div>
      <UsersList userInfo={getInfo} />
    </>
  );
}

export default App;
