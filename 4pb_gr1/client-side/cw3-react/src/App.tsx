import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import UserList from './components/UserList';

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
    <div className='container'>
     <h1>Lista użytkowników</h1>
     <UserList />
    </div>
  )
}

export default App
