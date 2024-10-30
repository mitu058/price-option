
import './App.css'
import LineChart from './components/LineChart'
import NavBar from './components/navbar'
import Phones from './components/Phones'
import PriceOptions from './components/PriceOptions'

// import DaisyNav from './components/DaisyNav'

function App() {


  return (
    <>
   
   
    <NavBar></NavBar>
      <h1 className='text-5xl'>Vite + React</h1>
     <PriceOptions></PriceOptions>
     <LineChart></LineChart>
     <Phones></Phones>
    </>
  )
}

export default App
