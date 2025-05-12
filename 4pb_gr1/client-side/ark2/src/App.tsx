import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import FormComp from './components/FormComp';
import FormCompWithState from './components/FormCompWithState';

function App() {
 

  return (
    <div className='d-flex'>
      <div className='w-50'><FormComp /></div>
     <div className='w-50'><FormCompWithState /></div>
     
    </div>
  )
}

export default App
