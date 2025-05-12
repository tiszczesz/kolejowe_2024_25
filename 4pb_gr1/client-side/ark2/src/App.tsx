import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import FormComp from './components/FormComp';
import FormCompWithState from './components/FormCompWithState';
import FormWithAction from './components/FormWithAction';

function App() {
 

  return (
    <div className='d-flex'>
      <div style={{width:"30%"}} ><FormComp /></div>
     <div style={{width:"30%"}} ><FormCompWithState /></div>
      <div style={{width:"30%"}} ><FormWithAction /></div>
     
    </div>
  )
}

export default App
