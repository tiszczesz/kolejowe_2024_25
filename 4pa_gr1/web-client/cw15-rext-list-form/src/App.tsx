import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { users, getMaxId, type User } from "./data/users";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState<User[]>(users);
  const handleAction = (formData: FormData) => {
    const newUser: User = {
      id: getMaxId(userList) + 1,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
    };
    setUserList([...userList, newUser]);
  };
  return (
    <main className="App">
      <header className="App-header">
        <h1 className="text-center">Lista Użytkowników</h1>
        <h2 className="text-center">Zarządzanie użytkownikami</h2>
      </header>
      <section
        className="form container m-4"
        style={{
          maxWidth: "800px",
          margin: "auto",
          backgroundColor: "#f8f9fa",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          padding: "1rem",
        }}
      >
        <form action={handleAction}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Imię i Nazwisko
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Telefon
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Dodaj Użytkownika
          </button>
        </form>
      </section>
      <section
        className="list d-flex flex-wrap justify-content-center"
        style={{ gap: "1rem" }}
      >
        {userList.map((user) => (
          <div
            key={user.id}
            className="card"
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              width: "18rem",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">Phone: {user.phone}</p>
              <button
                className="btn btn-danger"
                onClick={() => {
                  setUserList(userList.filter((u) => u.id !== user.id));
                }}
              >
                Usuń
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
