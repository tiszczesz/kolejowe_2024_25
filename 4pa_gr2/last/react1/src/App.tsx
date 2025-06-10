import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import TimerStatic from './components/TimerStatic'
import TimerDynamic from './components/TimerDynamic'

function App() {


  return (
    <div className='container'>
     <TimerStatic />
     <TimerDynamic  />
     <TimerDynamic backColor='green' />
     <TimerDynamic backColor='grey' />
    </div>
  )
}

export default App
