import './App.css'
import Message from './components/Message'
import MyComponent1 from './components/MyComponent1'

function App() {


  return (  
    <>
      <p>Aktualny czas: {new Date().toLocaleTimeString()}</p>  
      <p>d ad asd asd ad</p>
      <hr />
      <MyComponent1 />
      <Message />
      <Message />
    </>
  )
}

export default App
