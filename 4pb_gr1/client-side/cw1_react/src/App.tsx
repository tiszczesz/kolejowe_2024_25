import './App.css'
import Message from './components/Message'
import MyComponent1 from './components/MyComponent1'

function App() {


  return (  
    <>
      <p>Aktualna data: {new Date().toLocaleDateString()}</p>  
      <p>d ad asd asd ad</p>
      <hr />
      <MyComponent1 />
      <Message />
      <Message />
    </>
  )
}

export default App
