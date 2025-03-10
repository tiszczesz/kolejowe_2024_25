import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const users = [
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Brown",
    "Charlie Davis",
    "Diana Evans",
  ];

  return (
    <>
     <h1>Lista użytkowników</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}  
      </ul> 
    </>
  )
}

export default App
