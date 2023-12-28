import Timer from './components/Timer'
import './App.css'
import Stopwatch from './components/Stopwatch'

function App() {

  return (
    <>
    <div className='container'>
      <Timer />
    </div>
    <div className='container'>
      <Stopwatch />
    </div>
    </>
  )
}

export default App
