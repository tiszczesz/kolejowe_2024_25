import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import FormWithFormData from './components/FormWithFormData';
import FormReact19 from './components/FormReact19';

function App() {


  return (
    <div >
      <h1>Formularze</h1>
      <div className='d-flex' style={{gap: "50px"}}>
          <FormWithFormData />
          <FormReact19 />
          
      </div>
    </div>
  )
}

export default App
